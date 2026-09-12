import { useEffect, useRef } from "react";

export function countMatches(code: string, query: string) {
  if (!query) return 0;
  const q = query.toLowerCase();
  const c = code.toLowerCase();
  let n = 0;
  let i = c.indexOf(q);
  while (i !== -1) {
    n++;
    i = c.indexOf(q, i + q.length);
  }
  return n;
}

/** Renders `code` as plain text with every occurrence of `query` highlighted. */
export function SearchMatches({
  code,
  query,
  activeIndex,
}: {
  code: string;
  query: string;
  activeIndex: number;
}) {
  const activeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeIndex, query]);

  if (!query) return <>{code}</>;

  const q = query.toLowerCase();
  const lower = code.toLowerCase();
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let idx = lower.indexOf(q);
  let n = 0;

  while (idx !== -1) {
    if (idx > last) nodes.push(code.slice(last, idx));
    const isActive = n === activeIndex;
    nodes.push(
      <span
        key={n}
        ref={isActive ? activeRef : undefined}
        className={
          isActive
            ? "rounded-[3px] bg-accent px-[1px] font-semibold text-accent-foreground"
            : "rounded-[3px] bg-accent/25 px-[1px] text-foreground"
        }
      >
        {code.slice(idx, idx + query.length)}
      </span>,
    );
    last = idx + query.length;
    n++;
    idx = lower.indexOf(q, last);
  }
  if (last < code.length) nodes.push(code.slice(last));

  return <>{nodes}</>;
}
