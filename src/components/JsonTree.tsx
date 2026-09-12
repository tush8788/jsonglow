import { useState } from "react";

function Leaf({ value }: { value: unknown }) {
  if (typeof value === "string") return <span className="text-str">"{value}"</span>;
  if (typeof value === "number") return <span className="text-num">{value}</span>;
  if (typeof value === "boolean" || value === null)
    return <span className="text-lit">{String(value)}</span>;
  return null;
}

export function JsonTree({ value, label, depth = 0 }: { value: unknown; label?: string; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);
  const isBranch = value !== null && typeof value === "object";

  if (!isBranch) {
    return (
      <div className="flex gap-2 py-0.5" style={{ paddingLeft: depth * 14 }}>
        {label !== undefined && <span className="text-key">"{label}":</span>}
        <Leaf value={value} />
      </div>
    );
  }

  const entries = Array.isArray(value)
    ? value.map((v, i) => [String(i), v] as const)
    : Object.entries(value as Record<string, unknown>);
  const brackets = Array.isArray(value) ? ["[", "]"] : ["{", "}"];

  return (
    <div style={{ paddingLeft: depth * 14 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 py-0.5 text-left transition-colors hover:text-accent"
      >
        <span className="text-muted">{open ? "▾" : "▸"}</span>
        {label !== undefined && <span className="text-key">"{label}":</span>}
        <span className="text-muted">
          {brackets[0]}
          {open ? "" : ` ${entries.length} ${entries.length === 1 ? "item" : "items"} `}
          {open ? "" : brackets[1]}
        </span>
      </button>
      {open && (
        <>
          {entries.map(([k, v]) => (
            <JsonTree key={k} label={k} value={v} depth={depth + 1} />
          ))}
          <div className="text-muted" style={{ paddingLeft: 0 }}>
            {brackets[1]}
          </div>
        </>
      )}
    </div>
  );
}
