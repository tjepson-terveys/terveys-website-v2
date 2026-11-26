// Imported verbatim from https://www.terveystech.com/what-vibe-coding-taught-us-about-ai-assisted-development/ — keep the slug unchanged (SEO).
import type { BlogPost } from "../blog";

const post: BlogPost = {
  "slug": "what-vibe-coding-taught-us-about-ai-assisted-development",
  "title": "What Vibe Coding Taught Us About AI-Assisted Development",
  "seoTitle": "What Vibe Coding Taught Us About AI-Assisted Development - Terveystech",
  "description": "We embraced AI tools early, moved fast, and learned a lot — not all of it the easy way. Here’s what actually stuck.",
  "author": "Suji V",
  "publishedAt": "2025-10-22",
  "categories": [],
  "readingMinutes": 7,
  "image": {
    "src": "/images/blog/what-vibe-coding-taught-us-about-ai-assisted-development.jpg",
    "alt": "",
    "width": 1600,
    "height": 1067
  },
  "body": [
    {
      "type": "lead",
      "text": "We embraced AI tools early, moved fast, and learned a lot — not all of it the easy way. Here’s what actually stuck."
    },
    {
      "type": "quote",
      "text": "The biggest thing AI-assisted development taught us wasn’t about the AI. It was about how clearly we actually understood our own systems."
    },
    {
      "type": "heading",
      "id": "speed-exposes-gaps-you-didn-t-know-you-had",
      "text": "01 Speed Exposes Gaps You Didn’t Know You Had"
    },
    {
      "type": "p",
      "text": "The first thing we noticed when AI started generating code quickly was that our existing standards weren’t as well-defined as we thought. When a developer writes every line manually, ambiguity gets resolved quietly in their head. When AI generates code at scale, those ambiguities surface as inconsistencies – and they surface fast."
    },
    {
      "type": "p",
      "text": "Suddenly, the absence of a clear decision on error handling, logging format, or async conventions wasn’t invisible anymore. It showed up in every generated file, slightly differently each time."
    },
    {
      "type": "p",
      "label": "The lesson",
      "text": "vibe coding acts like a stress test on your engineering culture. If your standards are implicit, AI will expose that immediately. If they’re explicit, AI will reinforce them."
    },
    {
      "type": "heading",
      "id": "ai-works-best-when-you-ve-already-done-the-think",
      "text": "02 AI Works Best When You’ve Already Done the Thinking"
    },
    {
      "type": "p",
      "text": "Early on, we experimented with open-ended prompts – “build me an authentication service”, “scaffold a dashboard API”. The output was functional but generic. It didn’t reflect our patterns, our naming conventions, or our architectural decisions. We spent as much time correcting it as we would have spent writing it."
    },
    {
      "type": "p",
      "text": "The shift came when we started treating prompts as structured technical briefs. Specifying framework version, architectural layer, validation approach, response format, and edge cases produced output that required minimal adjustment – and often introduced approaches we hadn’t considered."
    },
    {
      "type": "callout",
      "title": "WHAT CHANGED IN PRACTICE",
      "text": "We stopped asking AI to decide and started asking it to implement. The difference in output quality was immediate and consistent."
    },
    {
      "type": "p",
      "text": "The insight wasn’t about prompting tricks. It was that AI amplifies the clarity you bring to it. Vague in, vague out. Structured in, structured out."
    },
    {
      "type": "heading",
      "id": "defining-your-standards-explicitly-pays-back-imm",
      "text": "03 Defining Your Standards Explicitly Pays Back Immediately"
    },
    {
      "type": "p",
      "text": "One of the most practical things we did was introduce a .github/copilot-instructions.md file – a repository-level instruction document that communicated our team’s expectations to the AI directly. It covered things like:"
    },
    {
      "type": "list",
      "items": [
        {
          "text": "Controllers must not contain business logic"
        },
        {
          "text": "All I/O must be asynchronous"
        },
        {
          "text": "Error responses must follow a standard contract"
        },
        {
          "text": "Logging must use structured patterns"
        },
        {
          "text": "Unit tests must accompany all service-layer code"
        },
        {
          "text": "No direct database calls outside the repository layer"
        }
      ]
    },
    {
      "type": "p",
      "text": "The effect was gradual but unmistakeable. Over time, Copilot suggestions began to mirror our conventions more closely. The volume of corrective refactoring decreased. Code review conversations shifted from “this doesn’t follow our patterns” to substantive architectural discussions."
    },
    {
      "type": "p",
      "label": "The side effect we didn’t anticipate",
      "text": "writing those instructions forced us to resolve several longstanding decisions we’d been quietly avoiding. AI gave us a reason to finally commit."
    },
    {
      "type": "heading",
      "id": "flow-is-real-but-it-s-earned-not-automatic",
      "text": "04 Flow Is Real – But It’s Earned, Not Automatic"
    },
    {
      "type": "p",
      "text": "The promise of vibe coding is staying in creative flow – minimising the repetitive friction that pulls developers out of deep work. We did experience that. When boilerplate was handled, scaffolding appeared on demand, and test cases generated themselves, there were stretches of work that felt genuinely different. More focused. Less mentally fragmented."
    },
    {
      "type": "p",
      "text": "But flow didn’t come from simply turning AI tools on. It came from the reduction of a specific kind of friction – the repetitive kind. Cognitive friction – understanding a system, making architectural decisions, handling edge cases – remained entirely ours."
    },
    {
      "type": "callout",
      "title": "WHAT WE GOT WRONG INITIALLY",
      "text": "We assumed AI would reduce all friction. It reduces repetitive friction. The hard thinking doesn’t go away – if anything, it becomes more important because the routine work no longer obscures it."
    },
    {
      "type": "heading",
      "id": "velocity-without-feedback-loops-creates-technica",
      "text": "05 Velocity Without Feedback Loops Creates Technical Debt Faster Than You Can Track It"
    },
    {
      "type": "p",
      "text": "This was the hardest lesson. In the early months, we moved quickly and felt productive. Then a sprint arrived where the accumulated issues from AI-generated code – subtle inconsistencies, missed edge cases, convention drift – landed all at once."
    },
    {
      "type": "p",
      "text": "AI-generated code needs the same quality gates as any other code. Arguably more, because the volume is higher and the developer has less intimate knowledge of every line. The pipelines that protect your codebase become more critical, not less, when AI is accelerating output."
    },
    {
      "type": "p",
      "text": "What saved us was enforcing the same feedback loops we had always had – and being disciplined about not skipping them just because something was “AI-generated and probably fine”:"
    },
    {
      "type": "list",
      "items": [
        {
          "text": "Automated unit and integration testing – non-negotiable"
        },
        {
          "text": "Static code analysis on every pull request"
        },
        {
          "text": "Security scanning before merge"
        },
        {
          "text": "Genuine pull request reviews, not rubber stamps"
        },
        {
          "text": "CI/CD enforcement without exceptions"
        }
      ]
    },
    {
      "type": "p",
      "text": "Once those gates were consistently applied, AI-assisted velocity became genuinely sustainable. Before that, it was borrowing against future pain."
    },
    {
      "type": "heading",
      "id": "the-developers-who-adapted-fastest-were-the-best",
      "text": "06 The Developers Who Adapted Fastest Were the Best Architects"
    },
    {
      "type": "p",
      "text": "We expected that the developers most comfortable with AI tools would be the ones who had worked with the most cutting-edge tech. That’s not what we observed."
    },
    {
      "type": "p",
      "text": "The people who extracted the most value from AI-assisted development were the ones with the clearest mental models of the systems they were building – developers who could articulate exactly what they wanted, why, and how it should fit into the broader architecture. The AI didn’t replace their expertise. It gave them a faster path from thinking to implementation."
    },
    {
      "type": "p",
      "text": "By contrast, developers who were less confident in their architectural thinking found AI disorienting. When AI generates five plausible-looking options and you’re not sure which one is right for your context, the tool becomes noise rather than signal."
    },
    {
      "type": "p",
      "label": "The implication for teams",
      "text": "investment in architectural literacy and design thinking matters more in an AI-assisted environment, not less."
    },
    {
      "type": "heading",
      "id": "prompting-is-a-technical-skill-worth-developing-",
      "text": "07 Prompting Is a Technical Skill Worth Developing Deliberately"
    },
    {
      "type": "p",
      "text": "We initially treated prompt quality as a matter of individual style – some people were just naturally better at it. After a few months, we recognised it as a learnable, teachable craft with identifiable patterns that made a consistent difference."
    },
    {
      "type": "p",
      "text": "The prompts that produced the best output shared a few things: they specified architectural constraints upfront, stated what not to do alongside what to do, referenced existing patterns in the codebase, and included expected test scenarios. The prompts that produced poor output were the ones that described the desired outcome without describing the constraints."
    },
    {
      "type": "p",
      "text": "We started sharing effective prompts internally – building a small team library of structured prompt templates for common tasks. The quality lift across the team was immediate."
    },
    {
      "type": "heading",
      "id": "the-biggest-shift-was-cognitive-not-tooling",
      "text": "08 The Biggest Shift Was Cognitive, Not Tooling"
    },
    {
      "type": "p",
      "text": "When we reflect on what vibe coding actually changed for us, it wasn’t primarily the tools. It was the way we think about where developer energy should go."
    },
    {
      "type": "p",
      "text": "Before AI tools were this capable, a lot of cognitive bandwidth went to tasks that were necessary but not intellectually differentiating – writing boilerplate, remembering syntax, generating test scaffolding. Those tasks are real work, but they’re not the work that makes or breaks a system’s design."
    },
    {
      "type": "p",
      "text": "With that layer partially automated, the expectation shifted. Developers are now expected to spend more time on the problems that genuinely require human judgment: understanding trade-offs, making architectural decisions, anticipating failure modes, designing for maintainability. The bar for thinking clearly about what you’re building has risen."
    },
    {
      "type": "p",
      "text": "That’s a net positive – but only if teams recognise it and create space for that deeper thinking rather than just filling the freed-up time with more output."
    },
    {
      "type": "heading",
      "id": "where-we-ve-landed",
      "text": "Where We’ve Landed"
    },
    {
      "type": "p",
      "text": "Vibe coding, as we’ve practised it, is not a productivity hack. It’s a change in how software development is structured – and it requires deliberate adaptation to work well."
    },
    {
      "type": "p",
      "text": "The teams that benefit most are those who treat AI as a configurable collaborator rather than an autocomplete engine. They invest in clear standards, strong pipelines, and the kind of architectural thinking that gives AI useful direction."
    },
    {
      "type": "p",
      "text": "The experience hasn’t made development frictionless. But it has made the right kind of friction more visible – and given us better tools to work through it."
    },
    {
      "type": "p",
      "text": "If we were starting over with what we know now, we’d spend the first month not on AI tools at all – but on making our standards explicit enough that any collaborator, human or AI, could work within them effectively."
    },
    {
      "type": "p",
      "text": "That’s the foundation everything else is built on."
    }
  ]
};

export default post;
