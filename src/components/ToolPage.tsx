import { PageShell } from "@/components/PageShell";
import { JsonWorkbench } from "@/components/JsonWorkbench";
import { Faq, FeatureGrid, Prose } from "@/components/ContentSections";
import { RelatedTools } from "@/components/RelatedTools";
import type { ToolPageConfig } from "@/config/tool-pages";

export function ToolPage({ config }: { config: ToolPageConfig }) {
  return (
    <PageShell>
      <JsonWorkbench
      // @ts-ignore
        initialMode={config.initialMode}
        heading={config.heading}
        intro={config.intro}
      />
      <Prose
        id="about"
        eyebrow="About this tool"
        title={config.proseTitle}
        paragraphs={config.proseParagraphs}
      />
      <FeatureGrid id="features" eyebrow="Capabilities" title="What it does" items={config.features} />
      <Faq id="faq" items={config.faq} />
      <RelatedTools exclude={config.relatedExclude} />
    </PageShell>
  );
}