import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { JsonWorkbench } from "@/components/JsonWorkbench";
import { Faq, FeatureGrid, Prose } from "@/components/ContentSections";
import { RelatedTools } from "@/components/RelatedTools";

const TITLE = "JSON Validator — Check JSON Syntax Online, Free";
const DESC =
  "Validate JSON online and get the exact line and column of every syntax error. Free, instant and fully client-side — your data never leaves the browser.";

const FAQ = [
  {
    q: "What does the validator check?",
    a: "It runs a strict JSON parse: quoted keys, no trailing commas, no comments, and valid escape sequences. The first failure is reported with its line and column.",
  },
  {
    q: "Why does my JSON fail on a trailing comma?",
    a: "The JSON specification forbids a comma after the last element of an object or array, even though JavaScript allows it.",
  },
  {
    q: "Can I validate against a schema?",
    a: "Not yet — jsonlens validates syntax, not JSON Schema rules. Structural validation is on the roadmap.",
  },
];

export const Route = createFileRoute("/json-validator")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/json-validator" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/json-validator" }],
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
  component: ValidatorPage,
});

function ValidatorPage() {
  return (
    <PageShell>
      <JsonWorkbench
        initialMode="validate"
        heading="Validate JSON and find the exact broken token."
        intro="Strict parsing with line and column diagnostics, plus sorted keys for easier review."
      />
      <Prose
        id="what"
        eyebrow="01 · How validation works"
        title="Strict grammar, precise error location."
        paragraphs={[
          "A JSON validator does one job well: decide whether a string parses, and if not, say exactly where it broke. jsonlens reports the first offending token with its line and column so you can jump straight to it in your editor.",
          "Common failures are trailing commas, single quotes around keys or strings, unescaped newlines inside strings, and stray comments copied from a config file. Each of these fails the specification even though many languages accept them.",
        ]}
      />
      <FeatureGrid
        id="features"
        eyebrow="02 · Capabilities"
        title="Diagnostics built for debugging real payloads."
        items={[
          { title: "Line and column", body: "Every error carries a precise position, not a vague message." },
          { title: "Sorted key output", body: "Review a validated payload with keys ordered alphabetically." },
          { title: "Tree inspection", body: "Expand nested objects to confirm the shape matches your contract." },
        ]}
      />
      <Faq id="faq" items={FAQ} />
      <RelatedTools exclude="/json-validator" />
    </PageShell>
  );
}
