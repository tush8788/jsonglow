export type ParseError = {
  message: string;
  line: number;
  column: number;
};

export type ParseResult =
  | { ok: true; value: unknown }
  | { ok: false; error: ParseError };

function positionFromIndex(text: string, index: number) {
  const upTo = text.slice(0, Math.max(0, index));
  const lines = upTo.split("\n");
  return { line: lines.length, column: (lines[lines.length - 1] ?? "").length + 1 };
}

export function parseJson(text: string): ParseResult {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (e) {
    const raw = e instanceof Error ? e.message : String(e);
    const posMatch = raw.match(/position (\d+)/i);
    let line = 1;
    let column = 1;
    if (posMatch) {
      const pos = positionFromIndex(text, Number(posMatch[1]));
      line = pos.line;
      column = pos.column;
    } else {
      const lineMatch = raw.match(/line (\d+) column (\d+)/i);
      if (lineMatch) {
        line = Number(lineMatch[1]);
        column = Number(lineMatch[2]);
      }
    }
    const message = raw
      .replace(/^JSON\.parse:\s*/, "")
      .replace(/\s*in JSON at position \d+.*$/i, "")
      .replace(/\s*at line \d+ column \d+.*$/i, "");
    return { ok: false, error: { message, line, column } };
  }
}

export function formatJson(text: string, indent: string): string {
  const result = parseJson(text);
  if (!result.ok) return "";
  return JSON.stringify(result.value, null, indent);
}

export function minifyJson(text: string): string {
  const result = parseJson(text);
  if (!result.ok) return "";
  return JSON.stringify(result.value);
}

export function sortKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeysDeep);
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).sort(
      ([a], [b]) => a.localeCompare(b),
    );
    return Object.fromEntries(entries.map(([k, v]) => [k, sortKeysDeep(v)]));
  }
  return value;
}

function flatten(obj: unknown, prefix = "", out: Record<string, string> = {}) {
  if (obj === null || typeof obj !== "object") {
    out[prefix || "value"] = obj === null ? "" : String(obj);
    return out;
  }
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object") {
      flatten(value, path, out);
    } else {
      out[path] = value === null ? "" : String(value);
    }
  }
  return out;
}

function csvCell(value: string) {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

export function jsonToCsv(value: unknown): string {
  const rows = Array.isArray(value) ? value : [value];
  const flatRows = rows.map((row) => flatten(row));
  const columns: string[] = [];
  for (const row of flatRows) {
    for (const key of Object.keys(row)) {
      if (!columns.includes(key)) columns.push(key);
    }
  }
  const lines = [columns.map(csvCell).join(",")];
  for (const row of flatRows) {
    lines.push(columns.map((c) => csvCell(row[c] ?? "")).join(","));
  }
  return lines.join("\n");
}

export function byteSize(text: string) {
  const bytes = new TextEncoder().encode(text).length;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export const SAMPLE_JSON = `{
  "deploy": {
    "service": "api-gateway",
    "region": "eu-west-1",
    "replicas": 3,
    "env": { "LOG_LEVEL": "debug", "TIMEOUT_MS": 2500 },
    "health": true,
    "notes": null
  }
}`;
