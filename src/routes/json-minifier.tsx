import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { JsonWorkbench } from "@/components/JsonWorkbench";
import { Faq, FeatureGrid, Prose } from "@/components/ContentSections";
import { RelatedTools } from "@/components/RelatedTools";

const TITLE = "JSON Minifier — Compress JSON to One Line, Free";
const DESC =
  "Minify JSON online: strip whitespace and newlines to shrink payloads for APIs, logs and storage. Instant, free and fully client-side.";

const FAQ = [
  {
    q: "Does minifying change my data?",
    a: "No. Only insignificant whitespace is removed. Keys, values, ordering and types stay exactly the same.",
  },
  {
    q: "How much smaller will my JSON get?",
    a: "Indented payloads typically shrink 15–40%, depending on nesting depth and indent width.",
  },
  {
    q: "Can I reverse a minified file?",
    a: "Yes — paste it into the formatter and pick an indent width to get a readable version back.",
  },
];

export const Route = createFileRoute("/json-minifier")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/json-minifier" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/json-minifier" }],
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
  component: MinifierPage,
});

function MinifierPage() {
  return (
    <PageShell>
      <JsonWorkbench
        initialMode="minify"
        heading="Compress JSON to a single, transport-ready line."
        intro="Strip every byte of insignificant whitespace without touching your data."
      />
      <Prose
        id="what"
        eyebrow="01 · Why minify"
        title="Fewer bytes over the wire, same structure."
        paragraphs={[
          "Minified JSON removes the spaces, tabs and newlines that exist purely for human readers. The parsed result is identical, so it is safe for request bodies, cache entries, log lines and database columns.",
          "Single-line payloads also travel better through log aggregators and shell pipelines, where a pretty-printed object would be split across dozens of entries.",
        ]}
      />
      <FeatureGrid
        id="features"
        eyebrow="02 · Capabilities"
        title="Minify, verify, and ship."
        items={[
          { title: "Lossless compression", body: "Only whitespace is discarded — values are untouched." },
          { title: "Size readout", body: "See character and byte counts before and after in real time." },
          { title: "One-click export", body: "Copy the single line or download it as a .json file." },
        ]}
      />
      <Faq id="faq" items={FAQ} />
      <RelatedTools exclude="/json-minifier" />
    </PageShell>
  );
}
