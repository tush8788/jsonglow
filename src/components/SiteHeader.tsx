import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-accent/15 font-mono text-sm font-semibold text-accent ring-1 ring-accent/30">
            J
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">jsonlens</span>
          <span className="hidden font-mono text-[11px] text-muted sm:inline">
            / format · minify · validate
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-[13px] text-muted">
          <Link to="/json-validator" className="transition-colors hover:text-foreground">
            Validator
          </Link>
          <Link
            to="/json-minifier"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            Minifier
          </Link>
          <Link
            to="/json-to-csv"
            className="rounded-md bg-secondary/40 px-3 py-1.5 text-foreground ring-1 ring-border transition-colors hover:bg-secondary/70"
          >
            JSON to CSV
          </Link>
        </nav>
      </div>
    </header>
  );
}
