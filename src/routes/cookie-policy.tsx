import { createFileRoute, Link } from "@tanstack/react-router";
// import { PageShell } from "@/components/PageShell";

const TITLE = "Cookie Policy — jsonglow";
const DESC =
  "How jsonglow uses cookies: necessary technologies for the site, optional analytics with consent, and no advertising cookies unless explicitly enabled.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/cookie-policy" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function H2({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-20 text-xl font-semibold tracking-tight text-balance">
      {children}
    </h2>
  );
}

function H3({ children }: { children: string }) {
  return <h3 className="mt-8 text-base font-semibold">{children}</h3>;
}

function P({ children }: { children: string }) {
  return <p className="mt-3 text-[15px] leading-relaxed text-muted">{children}</p>;
}

function CookiePolicyPage() {
  return (
    // <PageShell>
      <article className="mx-auto max-w-3xl py-16 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
          Cookie Policy for jsonglow
        </h1>
        <p className="mt-3 font-mono text-[12px] text-muted">Last updated: September 14, 2026</p>

        <p>
          This page explains the cookies and similar technologies jsonglow (“jsonglow,” “we,” “us,” or
          “our”) uses on https://jsonglow.com (the “Service”), and the choices available to you. It should
          be read alongside our{" "}
          <Link to="/privacy-policy" className="text-accent underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-3 rounded-lg bg-panel/40 p-4 text-[13px] leading-relaxed text-muted ring-1 ring-border">
          Important: this is a template based on the features currently described to us. Confirm the
          actual cookies and vendors used by your deployment before publishing. This document is not legal
          advice.
        </p>

        <H2 id="overview">1. Overview</H2>
        <P>
          jsonglow uses necessary technologies to operate and secure this website. With your permission, we
          also use analytics to understand traffic and improve our tools. We do not send the JSON you paste
          into our tools to analytics or advertising providers. You can accept, reject, or customize
          optional cookies at any time through Privacy Settings.
        </P>

        <H2 id="necessary">2. Necessary technologies</H2>
        <P>
          Always active. These technologies are required for website delivery, security, routing, and
          remembering your privacy choice. They cannot be switched off through the preference panel.
          jsonglow’s JSON processing is performed in your browser; this category does not mean that JSON
          payloads are uploaded to jsonglow.
        </P>

        <H2 id="analytics">3. Analytics cookies</H2>
        <P>
          Optional. If enabled, Google Analytics 4 helps us measure page views, traffic sources,
          approximate location, device information, and anonymous interactions such as which tool was
          used. We do not send pasted JSON, formatted output, API keys, passwords, tokens, or other payload
          content to Google Analytics.
        </P>
        <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-border">
          <table className="w-full text-left text-[13px]">
            <tbody className="divide-y divide-border text-muted">
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground">Provider</td>
                <td className="px-4 py-3">Google LLC</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground">Purpose</td>
                <td className="px-4 py-3">Website measurement and improvement</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground">Retention</td>
                <td className="px-4 py-3">
                  According to our Google Analytics configuration and applicable provider settings
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground">More information</td>
                <td className="px-4 py-3">Google Analytics privacy and security information</td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2 id="advertising">4. Advertising cookies</H2>
        <P>
          Optional and currently inactive unless explicitly enabled. If jsonglow introduces advertising,
          this section will describe the advertising providers and purposes before the related tags are
          activated. Advertising technologies will be used only in accordance with applicable consent
          requirements.
        </P>

        <H2 id="managing-choices">5. Managing your choices</H2>
        <P>
          Before the banner is shown, optional consent (analytics and advertising) is set to denied by
          default. Google Analytics loads only after you grant analytics consent. If you reject optional
          cookies, the browser-based JSON tools remain fully usable.
        </P>
        <H3>Consent options</H3>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
          <li>Accept all — enables necessary and optional (analytics) technologies</li>
          <li>Reject optional — keeps only necessary technologies active</li>
          <li>Manage preferences — choose categories individually</li>
        </ul>
        <P>
          You can change your choice at any time through Privacy Settings in the site footer, or through
          your browser’s cookie controls. We record the consent choice, timestamp, policy version, and
          categories selected only to the extent necessary to demonstrate and manage consent.
        </P>

        <H2 id="changes">6. Changes to this policy</H2>
        <P>
          We may update this Cookie Policy when the Service, analytics configuration, advertising, or
          applicable legal requirements change. We will post the updated version at this URL and change the
          “Last updated” date.
        </P>

        <H2 id="contact">7. Contact</H2>
        <P>For questions about this Cookie Policy, contact:</P>
        <p className="mt-3 font-mono text-[13px] text-muted">
          JSONGlow
          <br />
          Email: tushar.jagtap8788@gmail.com
          <br />
          Address: MH India
        </p>
      </article>
    // </PageShell>
  );
}