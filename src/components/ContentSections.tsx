export function Prose({
  eyebrow,
  title,
  paragraphs,
  id,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
          <h2 className="mt-3 max-w-[24ch] text-2xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
        </div>
        <div className="max-w-[60ch] space-y-4 text-[15px] leading-relaxed text-pretty text-muted lg:col-span-7">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  eyebrow,
  title,
  items,
  id,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; body: string }[];
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <div className="mb-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-3 max-w-[30ch] text-2xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-panel/40 p-5 ring-1 ring-border backdrop-blur-xl"
          >
            <div className="font-mono text-sm text-accent">▸</div>
            <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faq({ items, id }: { items: { q: string; a: string }[]; id?: string }) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">03 · FAQ</p>
          <h2 className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight text-balance">
            Quick answers.
          </h2>
        </div>
        <div className="divide-y divide-border lg:col-span-8">
          {items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium transition-colors hover:text-accent">
                {item.q}
                <span className="font-mono text-muted transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
