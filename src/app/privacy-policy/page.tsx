import { StubPage, stubMetadata } from "@/components/layout/StubPage";
import { stubPages } from "@/content/pages";

const page = stubPages.privacy;

export const metadata = stubMetadata(page.title, page.path);

export default function Page() {
  return <StubPage eyebrow={page.eyebrow} title={page.title} lang={page.lang} message={page.comingSoon} />;
}
