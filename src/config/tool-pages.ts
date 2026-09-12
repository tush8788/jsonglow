export type ToolMode = "format" | "validate" | "minify" | "csv" | "tree";

export type FaqItem = { q: string; a: string };
export type FeatureItem = { title: string; body: string };

export type ToolPageConfig = {
  path: string;
  initialMode: ToolMode;
  title: string;
  description: string;
  heading: string; // passed to JsonWorkbench
  intro: string; // passed to JsonWorkbench
  proseTitle: string;
  proseParagraphs: string[];
  features: FeatureItem[];
  faq: FaqItem[];
  relatedExclude: string; // passed to RelatedTools
};

const SITE_URL = "https://jsonglow.com";

export const TOOL_PAGES: Record<string, ToolPageConfig> = {
  "/json-formatter": {
    path: "/json-formatter",
    initialMode: "format",
    title: "JSON Formatter Online — Beautify & Pretty-Print JSON | JSONGlow",
    description:
      "Free online JSON formatter. Paste JSON and instantly get clean, indented output. Runs entirely in your browser — nothing is uploaded.",
    heading: "Paste messy JSON, get a clean, indented result.",
    intro:
      "A fast, privacy-first formatting surface. Drop in minified or inconsistent JSON and get readable, properly indented output instantly.",
    proseTitle: "Why formatting matters",
    proseParagraphs: [
      "Minified API responses and compact config files are hard to scan by eye. Formatting reintroduces indentation and line breaks so nested structures read like an outline instead of a wall of text.",
      "jsonglow's formatter re-emits your JSON with consistent spacing, letting you choose 2-space, 4-space, or tab indentation depending on your project's style.",
    ],
    features: [
      { title: "Instant reformatting", body: "Paste and get properly indented JSON immediately, no button required." },
      { title: "Adjustable indent", body: "Switch between 2-space, 4-space, or tab indentation to match your codebase." },
      { title: "Type-aware coloring", body: "Keys, strings, numbers and literals are each colored for fast scanning." },
      { title: "Zero upload", body: "Formatting runs entirely in your browser — nothing is sent to a server." },
    ],
    faq: [
      { q: "Is this JSON formatter free?", a: "Yes, completely free with no signup or usage limits." },
      { q: "Does it upload my data?", a: "No — all formatting happens client-side in your browser." },
      {
        q: "What if my JSON has a syntax error?",
        a: "The formatter will flag it. For detailed line/column diagnostics, use the JSON Validator instead.",
      },
    ],
    relatedExclude: "/json-formatter",
  },
  "/json-validator": {
    path: "/json-validator",
    initialMode: "validate",
    title: "JSON Validator Online — Check JSON Syntax | JSONGlow",
    description:
      "Validate JSON instantly and locate syntax errors by exact line and column. Free, private, and runs entirely in your browser.",
    heading: "Paste JSON, find exactly where it breaks.",
    intro:
      "A precise, privacy-first validation surface. Get the exact line and column of the first syntax error — no guesswork.",
    proseTitle: "What counts as valid JSON",
    proseParagraphs: [
      "Valid JSON requires double-quoted keys and strings, no trailing commas, no comments, and values limited to object, array, string, number, boolean, and null.",
      "jsonglow's validator parses your payload against this grammar and reports the first violation with its exact position, so you can jump straight to the fix.",
    ],
    features: [
      { title: "Line/column diagnostics", body: "Pinpoints the exact location of the first malformed token." },
      { title: "Handles large payloads", body: "Multi-megabyte responses validate quickly with no network round-trip." },
      { title: "Clear error messages", body: "Explains what rule was violated, not just where." },
      { title: "Zero upload", body: "Validation runs entirely client-side — your data stays local." },
    ],
    faq: [
      {
        q: "What does the validator check for?",
        a: "It parses your JSON against the JSON specification and reports the first syntax error, including line and column.",
      },
      { q: "Can it auto-fix invalid JSON?", a: "It flags the exact issue so you can fix it manually and stay in control of your data." },
      { q: "Is my data uploaded?", a: "No, validation happens entirely in your browser." },
    ],
    relatedExclude: "/json-validator",
  },
  "/json-minifier": {
    path: "/json-minifier",
    initialMode: "minify",
    title: "JSON Minifier Online — Compress JSON Instantly | JSONGlow",
    description:
      "Minify JSON by removing all whitespace and line breaks. Free, privacy-first JSON compressor that runs entirely in your browser.",
    heading: "Paste formatted JSON, get the smallest possible output.",
    intro:
      "A fast, privacy-first compression surface. Strip whitespace instantly to reduce payload size for APIs, configs, and storage.",
    proseTitle: "Why minify JSON",
    proseParagraphs: [
      "Whitespace and line breaks make JSON readable but add size that serves no purpose once a human isn't reading it directly — every extra byte costs bandwidth and latency at scale.",
      "jsonglow's minifier removes all insignificant whitespace while preserving the exact data and structure, giving you the smallest valid representation of the same payload.",
    ],
    features: [
      { title: "One-click compression", body: "Strip all whitespace and line breaks instantly." },
      { title: "Lossless output", body: "Structure and values stay identical — only formatting is removed." },
      { title: "Copy or download", body: "Grab the minified result to your clipboard or as a file." },
      { title: "Zero upload", body: "Minification runs entirely in your browser." },
    ],
    faq: [
      { q: "Does minifying change my data?", a: "No — only insignificant whitespace is removed. Structure and values are untouched." },
      { q: "Why minify JSON?", a: "Smaller payloads transfer faster and reduce storage costs for APIs and configs." },
      { q: "Is this free?", a: "Yes, with no limits or signup." },
    ],
    relatedExclude: "/json-minifier",
  },
  "/json-to-csv": {
    path: "/json-to-csv",
    initialMode: "csv",
    title: "JSON to CSV Converter Online | JSONGlow",
    description:
      "Convert JSON arrays to CSV instantly in your browser. Free, private, and handles nested JSON structures.",
    heading: "Paste a JSON array, get a ready-to-use CSV.",
    intro:
      "A fast, privacy-first conversion surface. Turn arrays of JSON objects into spreadsheet-ready CSV instantly.",
    proseTitle: "Converting JSON arrays to tabular data",
    proseParagraphs: [
      "APIs commonly return arrays of objects, but spreadsheets and BI tools need flat, tabular rows and columns. Converting between the two by hand is tedious and error-prone.",
      "jsonglow flattens each object into a row, turning keys into columns — including nested fields, expressed as dot-notated column names — so nothing is lost in the conversion.",
    ],
    features: [
      { title: "Handles nested objects", body: "Nested fields are flattened into dot-notated columns." },
      { title: "Spreadsheet-ready", body: "Output opens cleanly in Excel, Sheets, or any CSV-compatible tool." },
      { title: "Instant conversion", body: "No upload step — conversion happens as you paste." },
      { title: "Zero upload", body: "Conversion runs entirely in your browser." },
    ],
    faq: [
      { q: "What JSON structure works best?", a: "An array of flat or nested objects — each object becomes one CSV row." },
      { q: "Are nested objects supported?", a: "Yes, nested values are flattened into dot-notated columns." },
      { q: "Is this free?", a: "Yes, completely free with no signup." },
    ],
    relatedExclude: "/json-to-csv",
  },
  "/json-tree-viewer": {
    path: "/json-tree-viewer",
    initialMode: "tree",
    title: "JSON Tree Viewer — Explore JSON Structure Online | JSONGlow",
    description:
      "Visualize JSON as a collapsible tree to explore deeply nested structures quickly. Free and runs entirely in your browser.",
    heading: "Explore JSON structure as a collapsible tree.",
    intro:
      "A fast, privacy-first exploration surface. Collapse and expand nested keys to understand large payloads at a glance.",
    proseTitle: "Reading deeply nested JSON",
    proseParagraphs: [
      "Raw JSON becomes hard to scan once nesting goes more than a couple of levels deep — brackets pile up and context gets lost scrolling through raw text.",
      "jsonglow's tree view renders each object and array as a collapsible node, so you can fold away irrelevant branches and focus only on the part of the structure you're inspecting.",
    ],
    features: [
      { title: "Collapsible nodes", body: "Expand or collapse any object or array to control what you see." },
      { title: "Handles large structures", body: "Deeply nested and large payloads stay navigable without endless scrolling." },
      { title: "Type-aware coloring", body: "Keys, strings, numbers and literals are visually distinct." },
      { title: "Zero upload", body: "Tree rendering happens entirely in your browser." },
    ],
    faq: [
      { q: "Can I collapse nested nodes?", a: "Yes, every object and array node can be expanded or collapsed independently." },
      { q: "Does this work with large JSON files?", a: "Yes, it's built to stay usable with deeply nested and large structures." },
      { q: "Is this free?", a: "Yes, with no signup or limits." },
    ],
    relatedExclude: "/json-tree-viewer",
  },
};

export function getToolPageConfig(path: string): ToolPageConfig {
  const config = TOOL_PAGES[path];
  if (!config) throw new Error(`No tool page config found for path: ${path}`);
  return config;
}

export function buildToolPageHead(config: ToolPageConfig) {
  const canonical = `${SITE_URL}${config.path}`;
  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: `jsonglow ${config.heading}`,
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              description: config.description,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@type": "FAQPage",
              mainEntity: config.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  };
}