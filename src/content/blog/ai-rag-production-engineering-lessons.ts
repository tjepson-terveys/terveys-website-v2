// Imported verbatim from https://www.terveystech.com/ai-rag-production-engineering-lessons/ — keep the slug unchanged (SEO).
import type { BlogPost } from "../blog";

const post: BlogPost = {
  "slug": "ai-rag-production-engineering-lessons",
  "title": "The RAG Reality Check",
  "seoTitle": "The RAG Reality Check - Terveystech",
  "description": "Production RAG isn't a model problem — it's a data engineering problem with an LLM at the end",
  "author": "Justin M",
  "publishedAt": "2026-01-10",
  "categories": [],
  "readingMinutes": 6,
  "image": {
    "src": "/images/blog/ai-rag-production-engineering-lessons.png",
    "alt": "",
    "width": 1600,
    "height": 857
  },
  "body": [
    {
      "type": "lead",
      "text": "Production RAG isn't a model problem — it's a data engineering problem with an LLM at the end"
    },
    {
      "type": "subheading",
      "text": "Engineering Challenges We Didn't See Coming"
    },
    {
      "type": "p",
      "text": "RAG is everywhere now. Every other AI blog post explains chunking, embeddings, and vector databases like they’re solved problems. They aren’t. Once you move past toy demos and start ingesting real customer documents—messy PDFs with merged table cells, dual-column layouts, footnote symbols that mean different things on different pages—the gap between “RAG tutorial” and “RAG in production” becomes a chasm."
    },
    {
      "type": "p",
      "text": "This post isn’t about what RAG is. It’s about what broke when we built one, and what we did about it."
    },
    {
      "type": "heading",
      "id": "the-retrieval-problem-nobody-warns-you-about",
      "text": "The Retrieval Problem Nobody Warns You About"
    },
    {
      "type": "p",
      "text": "We started, like most teams do, with pure dense vector search on Milvus. Embeddings, cosine similarity, top-k retrieval—the textbook stack. It worked beautifully on semantic queries. It failed spectacularly on anything where the user typed an exact term."
    },
    {
      "type": "p",
      "text": "A query for a specific part number, error code, or proper noun would return semantically “nearby” results while completely missing the document that contained the literal string. Embedding models are trained to capture meaning, which means they actively smooth over the exact-match signal you need for technical content. The closer your domain gets to compliance, engineering specs, or product catalogs, the worse this gets."
    },
    {
      "type": "p",
      "text": "Our fix was to stop pretending dense retrieval alone was sufficient. We built a hybrid system: dense retrieval through Milvus running in parallel with a BM25 sparse index constructed at ingestion time, with the two result sets combined through score fusion. The dense side handles “find me something about authentication failures,” the sparse side handles “find me error code E-4471.” Neither path is optional. Teams that ship pure-vector RAG and wonder why their users complain about “missing obvious results” are almost always hitting this exact wall."
    },
    {
      "type": "p",
      "text": "The non-obvious part of hybrid retrieval isn’t the architecture—it’s the fusion weighting. Equal weights are rarely right. The correct ratio depends on your corpus and query distribution, and it shifts as both evolve."
    },
    {
      "type": "heading",
      "id": "pdfs-are-not-documents-they-are-coordinates",
      "text": "PDFs Are Not Documents. They Are Coordinates."
    },
    {
      "type": "p",
      "text": "The single largest source of pain in our pipeline turned out to be table extraction from PDFs. This sounds boring until you’re staring at a parsed output where a three-row merged header has been flattened into a single garbled string, column boundaries have shifted mid-table, and the downstream LLM is now confidently answering questions using data that has been silently scrambled."
    },
    {
      "type": "p",
      "text": "PDFs don’t store tables. They store glyphs at coordinates. Whether something is “a table” is an interpretation layer that every parser implements differently, and most implement badly on anything beyond simple grids."
    },
    {
      "type": "p",
      "text": "Docling handled most of our content reasonably well, but tables with merged cells, multi-line entries, and irregular structures kept coming through corrupted. We ended up writing our own table parser built on spatial geometry—clustering glyphs by position, using statistical estimation to infer column boundaries, and reconstructing cell relationships from the bottom up rather than trusting any heuristic about lines or whitespace. We integrated this into the Docling pipeline rather than replacing it, because Docling’s strengths on prose and layout were genuinely useful. The lesson: there is no single PDF parser that handles everything. There is a portfolio of parsers, each good at one thing, and your job is to route content to the right one."
    },
    {
      "type": "p",
      "text": "This became explicit when we hit dual-column documents. Docling’s markdown conversion was excellent for layout-agnostic flow, but its table detection on these layouts was unreliable. PyMuPDF had the opposite profile—competent at locating tables, weak at interpreting the surrounding layout. So we built a two-stage, page-aware pipeline: Docling for the overall structure, PyMuPDF invoked selectively where tables were detected, and the outputs merged back into a coherent document representation. Ingestion accuracy went up substantially, and—just as importantly—it became debuggable. When something parsed wrong, we could tell which stage failed."
    },
    {
      "type": "heading",
      "id": "symbol-tables-the-quiet-data-corruption",
      "text": "Symbol Tables: The Quiet Data Corruption"
    },
    {
      "type": "p",
      "text": "Here’s a failure mode that doesn’t show up in any RAG blog post. Technical documents reuse symbols. An asterisk on page 4 might refer to one footnote; an asterisk on page 17 refers to a completely different one. Daggers, superscript numbers, “*1” markers—these are scoped references whose meaning depends on context that the parser has usually thrown away by the time you notice."
    },
    {
      "type": "p",
      "text": "Our naive parser was building a flat symbol table and overwriting entries as it went. The result was subtle and dangerous: retrieved chunks looked correct, but their footnoted clarifications had been silently swapped with unrelated definitions from later in the document. The LLM, trusting its inputs, generated answers that were grammatically fluent and factually wrong."
    },
    {
      "type": "p",
      "text": "The fix required treating symbol resolution as context-aware rather than global. Entries are scoped to their region of origin, existing entries are never overwritten implicitly, and ambiguity is preserved rather than collapsed. This is one of those problems where the bug is invisible until you specifically look for it, and once you’ve seen it you start wondering how many other RAG systems are quietly corrupting their own data this way."
    },
    {
      "type": "heading",
      "id": "the-prompt-budget-is-a-hard-constraint-not-a-sug",
      "text": "The Prompt Budget Is a Hard Constraint, Not a Suggestion"
    },
    {
      "type": "p",
      "text": "The LLM integration phase is where most teams discover that “just stuff the retrieved context in the prompt” is not an architecture. We hit memory ceilings, watched generation quality collapse as prompts grew, and saw response latency become unpredictable as different queries pulled wildly different amounts of context."
    },
    {
      "type": "p",
      "text": "The fix wasn’t one change—it was a discipline. We moved to a Q4 quantized model to stay within memory constraints without giving up too much quality. We tuned num_ctx to match the actual prompt and generation envelope rather than leaving it at defaults that wasted memory we needed elsewhere. We dropped top-k retrieval counts and compensated by improving chunking, so each retrieved chunk carried more semantic density per token. We enforced an explicit token budget across system prompt, retrieved context, and expected output—treating the prompt as a fixed-size container that has to be packed deliberately. Redundant instruction phrasing got trimmed. Generation parameters (max tokens, temperature, top-p) were tuned for completion stability rather than left at notebook defaults."
    },
    {
      "type": "p",
      "text": "None of these individually was dramatic. Together they were the difference between a pipeline that worked on demos and one that worked on production load."
    },
    {
      "type": "heading",
      "id": "what-actually-matters",
      "text": "What Actually Matters"
    },
    {
      "type": "p",
      "text": "If there’s a through-line in all of this, it’s that production RAG isn’t a model problem. It’s a data engineering problem with an LLM at the end. The interesting failures aren’t in the embedding model or the LLM—they’re in the seams between components: between dense and sparse retrieval, between layout parsing and table parsing, between symbol scope and chunk boundaries, between retrieved context and prompt budget."
    },
    {
      "type": "p",
      "text": "The teams that ship reliable RAG systems treat those seams as first-class engineering surface. They instrument them, test them with adversarial inputs, and accept that no off-the-shelf tool will handle their corpus end-to-end. The ones that don’t tend to ship something that works in the demo and breaks in the first customer pilot."
    },
    {
      "type": "p",
      "text": "RAG is common now. Building one that actually holds up under real documents and real users is not."
    }
  ]
};

export default post;
