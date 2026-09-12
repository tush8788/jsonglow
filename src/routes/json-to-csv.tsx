import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { JsonWorkbench } from "@/components/JsonWorkbench";
import { Faq, FeatureGrid, Prose } from "@/components/ContentSections";
import { RelatedTools } from "@/components/RelatedTools";

const TITLE = "JSON to CSV Converter — Flatten JSON to Spreadsheet Rows";
const DESC =
  "Convert JSON to CSV online. Nested objects are flattened into dot-notation columns you can open in Excel, Sheets or Numbers. Free and fully client-side.";

const FAQ = [
  {
    q: "How are nested objects handled?",
    a: "Nested keys are flattened into dot-notation columns, so { user: { id: 1 } } becomes a column named user.id.",
  },
  {
    q: "What input shape works best?",
    a: "An array of objects maps cleanly to rows. A single object produces one row with the same flattening rules.",
  },
  {
    q: "Are commas and quotes escaped?",
    a: "Yes. Values containing commas, quotes or newlines are wrapped in quotes and internal quotes are doubled, per RFC 4180.",
  },
];

export const Route = createFileRoute("/json-to-csv")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/json-to-csv" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/json-to-csv" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: CsvPage,
});

function CsvPage() {
  return (
    <PageShell>
      <JsonWorkbench
        initialMode="csv"
        heading="Turn JSON into spreadsheet rows in one paste."
        intro="Nested keys flatten into dot-notation columns, ready for Excel, Sheets or a data pipeline."
      />
      <Prose
        id="what"
        eyebrow="01 · How conversion works"
        title="From nested tree to flat table."
        paragraphs={[
          "CSV has no notion of nesting, so every leaf value gets a column named by its full path. An array of objects becomes one row per element, with the union of all paths as the header row.",
          "Values that contain commas, quotes or newlines are escaped so the file opens correctly in any spreadsheet application.",
        ]}
      />
      <FeatureGrid
        id="features"
        eyebrow="02 · Capabilities"
        title="Spreadsheet-ready output."
        items={[
          { title: "Dot-notation columns", body: "Deeply nested keys stay readable and unambiguous." },
          { title: "RFC 4180 escaping", body: "Quotes, commas and newlines are handled correctly." },
          { title: "Download as .csv", body: "One click gives you a file ready to open in Excel or Sheets." },
        ]}
      />
      <Faq id="faq" items={FAQ} />
      <RelatedTools exclude="/json-to-csv" />
    </PageShell>
  );
}
