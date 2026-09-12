import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { JsonWorkbench } from "@/components/JsonWorkbench";
import { Faq, FeatureGrid, Prose } from "@/components/ContentSections";
import { RelatedTools } from "@/components/RelatedTools";

const TITLE = "JSON Formatter Online — Format, Validate & Beautify JSON";
const DESC =
  "Free online JSON formatter and validator. Paste JSON to beautify, minify, sort keys or view as a tree. Runs entirely in your browser — nothing is uploaded.";

const FAQ = [
  {
    q: "Does jsonlens send my data anywhere?",
    a: "No. Parsing happens entirely client-side. Nothing is transmitted, logged, or stored on a server.",
  },
  {
    q: "What counts as valid JSON?",
    a: "Double-quoted keys and strings, no trailing commas, no comments, and values limited to object, array, string, number, boolean and null. The validator flags each violation with a line and column.",
  },
  {
    q: "Can I paste very large payloads?",
    a: "Yes — multi-megabyte responses format quickly because everything runs locally in your browser with no network round-trip.",
  },
  {
    q: "Is the JSON formatter free?",
    a: "Yes, completely free with no account, no sign-up and no usage limits.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "jsonlens JSON Formatter",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              description: DESC,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <JsonWorkbench
        initialMode="format"
        heading="Paste messy JSON, get aligned, validated rows."
        intro="A fast, privacy-first format & validate surface. Chaos in, a tidy patch panel out."
      />
      <Prose
        id="what"
        eyebrow="01 · What is JSON"
        title="A lightweight, human-readable data format."
        paragraphs={[
          "JSON (JavaScript Object Notation) is the lingua franca of APIs and configuration. It encodes objects, arrays, strings, numbers, booleans and null using a syntax most developers can read at a glance.",
          "jsonlens parses your payload, enforces the grammar, and re-emits it with consistent indentation so nested keys line up like labels on a patch panel. Validation surfaces the exact line and column where a parse would fail — no guesswork.",
        ]}
      />
      <FeatureGrid
        id="features"
        eyebrow="02 · Capabilities"
        title="Every tool a payload needs, in one surface."
        items={[
          {
            title: "Live validation",
            body: "Instant parse with precise line/column diagnostics on the first malformed token.",
          },
          {
            title: "Tree view",
            body: "Collapse and expand nested keys so a 400-line payload reads like a table of contents.",
          },
          {
            title: "Format & minify",
            body: "Toggle 2 / 4-space / tab indent, or collapse to a single line for logging and storage.",
          },
          {
            title: "Type-aware coloring",
            body: "Keys, strings, numbers and literals each get a distinct hue so structure pops instantly.",
          },
          {
            title: "Export to file",
            body: "Copy to clipboard or download a clean .json — everything stays on your device.",
          },
          {
            title: "Zero upload",
            body: "All processing runs in the browser. Secrets and tokens never leave your machine.",
          },
        ]}
      />
      <Faq id="faq" items={FAQ} />
      <RelatedTools exclude="/" />
    </PageShell>
  );
}
