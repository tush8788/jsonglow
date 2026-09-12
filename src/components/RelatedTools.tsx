import { Link } from "@tanstack/react-router";

const TOOLS = [
  { to: "/", title: "JSON Formatter", body: "Beautify and indent any payload." },
  { to: "/json-validator", title: "JSON Validator", body: "Check a payload for syntax errors only." },
  { to: "/json-to-csv", title: "JSON to CSV", body: "Flatten an array of objects into a spreadsheet." },
  { to: "/json-minifier", title: "JSON Minifier", body: "Strip whitespace down to a single compact line." },
] as const;

export function RelatedTools({ exclude }: { exclude: string }) {
  const items = TOOLS.filter((t) => t.to !== exclude).slice(0, 3);
  return (
    <section id="tools" className="border-t border-border py-16 sm:py-20">
      <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
        04 · Related tools
      </p>
      <h2 className="mt-3 max-w-[30ch] text-2xl font-semibold tracking-tight text-balance">
        The jsonlens toolkit.
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((tool) => (
          <Link
            key={tool.to}
            to={tool.to}
            className="group flex items-center justify-between rounded-xl bg-panel/40 p-5 ring-1 ring-border backdrop-blur-xl transition-colors hover:ring-accent/40"
          >
            <div>
              <h3 className="text-base font-semibold">{tool.title}</h3>
              <p className="mt-1 text-sm text-muted">{tool.body}</p>
            </div>
            <span className="font-mono text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
