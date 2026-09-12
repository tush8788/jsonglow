import { useEffect, useMemo, useRef, useState } from "react";
import { JsonHighlight } from "./JsonHighlight";
import { SearchMatches, countMatches } from "./SearchMatches";
import { JsonTree } from "./JsonTree";
import {
  SAMPLE_JSON,
  byteSize,
  jsonToCsv,
  parseJson,
  sortKeysDeep,
} from "@/lib/json-tools";

type Mode = "format" | "minify" | "validate" | "csv";

const INDENTS: Record<string, string> = {
  "2 spaces": "  ",
  "4 spaces": "    ",
  Tab: "\t",
};

export function JsonWorkbench({
  initialMode = "format",
  heading,
  intro,
}: {
  initialMode?: Mode;
  heading: string;
  intro: string;
}) {
  const [input, setInput] = useState(SAMPLE_JSON);
  const [mode, setMode] = useState<Mode>(initialMode);
  const [indent, setIndent] = useState("2 spaces");
  const [tree, setTree] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeMatch, setActiveMatch] = useState(0);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const parsed = useMemo(() => parseJson(input), [input]);

  const output = useMemo(() => {
    if (!parsed.ok) return "";
    const value = parsed.value;
    if (mode === "minify") return JSON.stringify(value);
    if (mode === "csv") return jsonToCsv(value);
    if (mode === "validate")
      return JSON.stringify(sortKeysDeep(value), null, INDENTS[indent]);
    return JSON.stringify(value, null, INDENTS[indent]);
  }, [parsed, mode, indent]);

  const matchCount = useMemo(() => countMatches(output, query), [output, query]);

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => searchRef.current?.select());
  };

  const step = (dir: 1 | -1) => {
    if (matchCount === 0) return;
    setActiveMatch((i) => (i + dir + matchCount) % matchCount);
  };

  useEffect(() => {
    setActiveMatch(0);
  }, [query, output]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);


  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const download = () => {
    const isCsv = mode === "csv";
    const blob = new Blob([output], {
      type: isCsv ? "text/csv" : "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = isCsv ? "data.csv" : "data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const btn =
    "rounded-md bg-secondary/40 px-3 py-2 text-sm text-foreground ring-1 ring-border transition-transform hover:bg-secondary/70 active:scale-[0.97]";
  const btnActive =
    "rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground ring-1 ring-accent transition-transform active:scale-[0.97]";

  return (
    <div className="pt-5 sm:pt-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="animate-fadeup">
          <h1 className="max-w-[34ch] text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-1.5 max-w-[52ch] text-sm text-pretty text-muted">{intro}</p>
        </div>
        {parsed.ok ? (
          <div className="flex animate-slidein items-center gap-2.5 rounded-lg bg-accent/10 px-3 py-2 ring-1 ring-accent/30">
            <span className="grid size-5 place-items-center rounded-full bg-accent/20 font-mono text-xs font-semibold text-accent">
              ✓
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[12px] font-semibold text-accent">Valid JSON</p>
              <p className="font-mono text-[11px] text-muted">
                {input.split("\n").length} lines · {byteSize(input)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex animate-slidein items-center gap-2.5 rounded-lg bg-err/10 px-3 py-2 ring-1 ring-err/30">
            <span className="grid size-5 place-items-center rounded-full bg-err/20 font-mono text-xs font-semibold text-err">
              !
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[12px] font-semibold text-err">Validation failed</p>
              <p className="font-mono text-[11px] text-err/80">
                line {parsed.error.line} · col {parsed.error.column} — {parsed.error.message}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 animate-fadeup rounded-2xl bg-panel/40 p-2 ring-1 ring-border backdrop-blur-2xl sm:p-2.5">
        <div className="sticky top-[56px] z-20 flex flex-wrap items-center gap-1.5 rounded-xl bg-panel/90 px-2 py-2 ring-1 ring-border backdrop-blur-xl">
          <button className={mode === "format" ? btnActive : btn} onClick={() => setMode("format")}>
            Format
          </button>
          <button className={mode === "minify" ? btnActive : btn} onClick={() => setMode("minify")}>
            Minify
          </button>
          <button
            className={mode === "validate" ? btnActive : btn}
            onClick={() => setMode("validate")}
          >
            Sort keys
          </button>
          <button className={mode === "csv" ? btnActive : btn} onClick={() => setMode("csv")}>
            To CSV
          </button>
          <button className={btn} onClick={() => setInput("")}>
            Clear
          </button>
          <button className={`${btn} flex items-center gap-1.5`} onClick={copy}>
            <span className="font-mono text-accent">⧉</span>
            {copied ? "Copied" : "Copy"}
          </button>
          <button className={`${btn} flex items-center gap-1.5`} onClick={download}>
            <span className="font-mono text-accent">↧</span>Download
          </button>
          <div className="ml-auto flex items-center gap-1.5">
            <label
              htmlFor="indent"
              className="font-mono text-[11px] tracking-wide text-muted uppercase"
            >
              indent
            </label>
            <select
              id="indent"
              value={indent}
              onChange={(e) => setIndent(e.target.value)}
              className="rounded-md bg-secondary/40 px-2 py-1.5 font-mono text-[13px] text-foreground ring-1 ring-border focus:ring-accent/50 focus:outline-none"
            >
              <option>2 spaces</option>
              <option>4 spaces</option>
              <option>Tab</option>
            </select>
            <button
              className={`ml-1 ${tree ? btnActive : btn} py-1.5`}
              onClick={() => setTree((t) => !t)}
            >
              Tree view
            </button>
            <button
              className={`${searchOpen ? btnActive : btn} flex items-center gap-1.5 py-1.5`}
              onClick={() => (searchOpen ? setSearchOpen(false) : openSearch())}
            >
              <span className="font-mono">⌕</span>Search
              <kbd className="rounded bg-background/60 px-1 font-mono text-[10px] text-muted">
                Ctrl F
              </kbd>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-2 flex animate-slidein flex-wrap items-center gap-2 rounded-xl bg-panel/80 px-2.5 py-2 ring-1 ring-border">
            <input
              ref={searchRef}
              value={query}
              autoFocus
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  step(e.shiftKey ? -1 : 1);
                }
              }}
              placeholder="Find in output…"
              aria-label="Find in output"
              className="min-w-[180px] flex-1 rounded-md bg-background/70 px-2.5 py-1.5 font-mono text-[13px] text-foreground ring-1 ring-border placeholder:text-muted focus:ring-accent/50 focus:outline-none"
            />
            <span className="font-mono text-[12px] text-muted">
              {query ? (matchCount ? `${activeMatch + 1} / ${matchCount}` : "no matches") : "0 / 0"}
            </span>
            <button className={`${btn} py-1.5`} onClick={() => step(-1)} aria-label="Previous match">
              ↑
            </button>
            <button className={`${btn} py-1.5`} onClick={() => step(1)} aria-label="Next match">
              ↓
            </button>
            <button
              className={`${btn} py-1.5`}
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
            >
              Esc
            </button>
          </div>
        )}


        <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-xl bg-background/60 ring-1 ring-border">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="font-mono text-[11px] tracking-wide text-muted uppercase">input</span>
              <span className="font-mono text-[11px] text-muted">
                {byteSize(input)} · {input ? input.split("\n").length : 0} lines
              </span>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              aria-label="JSON input"
              placeholder="Paste your JSON here…"
              className="h-[420px] w-full resize-none bg-transparent p-4 font-mono text-[13px] leading-[1.7] text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl bg-background/60 ring-1 ring-border">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="font-mono text-[11px] tracking-wide text-muted uppercase">
                output
              </span>
              {parsed.ok ? (
                <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-accent uppercase">
                  {mode}
                </span>
              ) : (
                <span className="rounded bg-err/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-err uppercase">
                  error
                </span>
              )}
            </div>
            <div className="h-[420px] overflow-auto p-4 font-mono text-[13px] leading-[1.7]">
              {!parsed.ok ? (
                <p className="text-err">
                  ← line {parsed.error.line}, col {parsed.error.column}: {parsed.error.message}
                </p>
              ) : searchOpen && query ? (
                <pre className="break-all whitespace-pre-wrap text-foreground">
                  <SearchMatches code={output} query={query} activeIndex={activeMatch} />
                </pre>
              ) : tree && mode !== "csv" ? (
                <JsonTree value={parsed.value} />
              ) : mode === "csv" ? (
                <pre className="text-foreground">{output}</pre>
              ) : (
                <pre className="break-all whitespace-pre-wrap">
                  <JsonHighlight code={output} />
                </pre>
              )}
              {parsed.ok && mode !== "csv" && (
                <p className="mt-3 text-[12px] text-muted">
                  # {mode === "minify" ? "1 line" : `${output.split("\n").length} lines`} ·{" "}
                  {output.length} chars
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
