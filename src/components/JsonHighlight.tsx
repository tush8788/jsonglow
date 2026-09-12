import { Fragment } from "react";

const TOKEN =
  /("(?:\\.|[^"\\])*"\s*:)|("(?:\\.|[^"\\])*")|(\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b)/g;

export function JsonHighlight({ code }: { code: string }) {
  if (!code) return null;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  let i = 0;

  while ((match = TOKEN.exec(code)) !== null) {
    if (match.index > last) {
      nodes.push(
        <span key={`p${i++}`} className="text-muted">
          {code.slice(last, match.index)}
        </span>,
      );
    }
    const [text, key, str, num, lit] = match;
    if (key) {
      const colon = text.slice(text.indexOf(":"));
      nodes.push(
        <Fragment key={`k${i++}`}>
          <span className="text-key">{text.slice(0, text.indexOf(":"))}</span>
          <span className="text-muted">{colon}</span>
        </Fragment>,
      );
    } else if (str) {
      nodes.push(
        <span key={`s${i++}`} className="text-str">
          {text}
        </span>,
      );
    } else if (num) {
      nodes.push(
        <span key={`n${i++}`} className="text-num">
          {text}
        </span>,
      );
    } else if (lit) {
      nodes.push(
        <span key={`l${i++}`} className="text-lit">
          {text}
        </span>,
      );
    }
    last = match.index + text.length;
  }
  if (last < code.length) {
    nodes.push(
      <span key="tail" className="text-muted">
        {code.slice(last)}
      </span>,
    );
  }
  return <>{nodes}</>;
}
