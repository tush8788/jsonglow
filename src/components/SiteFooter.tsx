export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-md bg-accent/15 font-mono text-xs font-semibold text-accent">
            J
          </span>
          <span className="font-mono text-sm">jsonglow</span>
        </div>
        <p className="font-mono text-[12px] text-muted">
          Built for engineers. Runs in your browser. © 2026 jsonglow.
        </p>
      </div>
    </footer>
  );
}
