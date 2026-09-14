import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

const TITLE = "Privacy Policy — jsonglow";
const DESC =
  "How jsonglow handles your data: JSON content is processed in your browser and never uploaded. Read about cookies, analytics, advertising, and your privacy rights.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jsonglow.com/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://jsonglow.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
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

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl py-16 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
          Privacy Policy for jsonglow
        </h1>
        <p className="mt-3 font-mono text-[12px] text-muted">Last updated: September 14, 2026</p>

        <P>
          jsonglow (“jsonglow,” “we,” “us,” or “our”) operates https://jsonglow.com and
          related pages and tools (the “Service”). This Privacy Policy explains what information we
          collect, how we use it, and the choices available to visitors.
        </P>
        <p className="mt-3 rounded-lg bg-panel/40 p-4 text-[13px] leading-relaxed text-muted ring-1 ring-border">
          Important: jsonglow is a template based on the features currently described to us. Replace the
          bracketed fields before publishing it. This document is not legal advice and should be reviewed
          by a qualified privacy professional for the jurisdictions in which you operate.
        </p>

        <H2 id="contact-information">1. Contact information</H2>
        <P>
          The data controller or website operator is: JSONGlow. Contact email:
          tushar.jagtap8788@gmail.com. Mailing address: MH India. Website: https://jsonglow.com.
        </P>
        <P>For privacy questions or requests, contact us at tushar.jagtap8788@gmail.com.</P>

        <H2 id="json-in-browser">2. JSON content is processed in your browser</H2>
        <P>
          jsonglow’s formatter, validator, minifier, and JSON-to-CSV tools are designed to process the JSON
          you enter locally in your browser. We do not intentionally upload, read, store, or log the JSON
          content that you paste into the tools.
        </P>
        <P>
          Because you may paste sensitive information into any developer tool, do not enter passwords,
          access tokens, API keys, personal data, confidential business information, or other information
          that you are not authorized to process. jsonglow cannot guarantee that browser extensions,
          malware, shared devices, screenshots, clipboard tools, or other software on your device will not
          access content displayed in your browser.
        </P>
        <P>
          If a future feature sends data to a server, we will update this Privacy Policy and identify that
          feature before or when it is introduced.
        </P>

        <H2 id="information-we-may-collect">3. Information we may collect</H2>

        <H3>3.1 Information you provide directly</H3>
        <P>
          jsonglow currently does not require an account or sign-up to use the public tools. If you contact
          us by email or through a future contact form, we may receive your name, email address, message,
          attachments, and any other information you choose to provide. We use that information to respond
          to you, provide support, prevent abuse, and maintain records of communications.
        </P>
        <P>
          Please do not include JSON payloads, credentials, or confidential information in a support message
          unless it is necessary and you are authorized to share it.
        </P>

        <H3>3.2 Automatically collected technical information</H3>
        <P>
          Our hosting provider and security services may process limited technical information needed to
          deliver, secure, and troubleshoot the Service. This may include IP address, browser type, device
          type, operating system, requested URL, referring URL, approximate location derived from IP
          address, timestamps, and error or security logs. We do not use this information to reconstruct the
          JSON content entered into the tools.
        </P>

        <H3>3.3 Analytics information</H3>
        <P>
          With your consent where required by law, jsonglow uses Google Analytics 4 to understand website
          traffic and usage. Analytics may collect information such as pages viewed, approximate location,
          device and browser information, referrer, session information, and interactions with the website.
          We may configure analytics events such as page views and anonymous tool-use events, for example
          json-formatter or json-validator.
        </P>
        <P>
          We do not send the JSON text, formatted output, API keys, passwords, tokens, or other
          user-entered payloads to Google Analytics. We do not intentionally include such information in
          URLs, page titles, event parameters, or analytics metadata.
        </P>
        <P>
          Google may process data on our behalf under its applicable terms and policies. More information is
          available in Google’s Privacy & Terms and Google Analytics data privacy and security
          information.
        </P>

        <H3>3.4 Advertising</H3>
        <P>
          jsonglow does not currently need to use personalized advertising cookies unless and until
          advertising is enabled. If we introduce advertising, we will update this Policy, identify the
          advertising providers, and request consent where required before using non-essential advertising
          cookies or similar technologies. We will not intentionally send JSON payload content to
          advertising providers.
        </P>

        <H2 id="cookies">4. Cookies and similar technologies</H2>
        <P>
          jsonglow may use strictly necessary technologies required for security, hosting, routing, and
          remembering your privacy choice. With consent where required, Google Analytics may use cookies or
          similar identifiers for analytics. Future advertising providers may use additional technologies
          only after the relevant disclosures and consent are in place where required.
        </P>
        <P>
          You can manage your choices through the cookie-consent controls on the website and through your
          browser settings. Blocking some technologies may affect analytics but should not prevent the
          browser-based JSON tools from operating.
        </P>

        <H2 id="how-we-use-information">5. How we use information</H2>
        <P>We may use information to:</P>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
          <li>provide, operate, maintain, and secure jsonglow;</li>
          <li>process JSON locally in your browser as described above;</li>
          <li>understand aggregate traffic and improve usability, performance, and content;</li>
          <li>respond to questions and support requests;</li>
          <li>detect fraud, abuse, attacks, and technical problems;</li>
          <li>comply with legal obligations and enforce our terms; and</li>
          <li>protect the rights, safety, and property of jsonglow, our users, and others.</li>
        </ul>
        <P>
          We do not sell the JSON content entered into the tools. We do not use entered JSON to build
          advertising profiles.
        </P>

        <H2 id="legal-bases">6. Legal bases where applicable</H2>
        <P>
          Where laws such as the European Union or United Kingdom General Data Protection Regulation apply,
          our legal basis may include:
        </P>
        <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-border">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-panel/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Possible legal basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted">
              <tr>
                <td className="px-4 py-3">Operating and securing the Service</td>
                <td className="px-4 py-3">Legitimate interests and, where applicable, performance of a contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Responding to a request</td>
                <td className="px-4 py-3">Taking steps at the visitor’s request or legitimate interests</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Non-essential analytics</td>
                <td className="px-4 py-3">Consent, where required</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Non-essential advertising</td>
                <td className="px-4 py-3">Consent, where required</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Legal compliance</td>
                <td className="px-4 py-3">Legal obligation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          The appropriate legal basis depends on the facts, the visitor’s location, and the applicable law.
          We will obtain consent where consent is required.
        </P>

        <H2 id="sharing-and-service-providers">7. Sharing and service providers</H2>
        <P>
          We may share limited information with service providers that help us host, secure, measure, and
          operate the Service. Current or planned providers may include:
        </P>
        <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-border">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-panel/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Provider</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Information potentially processed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted">
              <tr>
                <td className="px-4 py-3">Vecel / hosting partner</td>
                <td className="px-4 py-3">Hosting, delivery, and security</td>
                <td className="px-4 py-3">Request and technical data needed to deliver the site</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Google Analytics</td>
                <td className="px-4 py-3">Consent-based analytics</td>
                <td className="px-4 py-3">Website usage and device information, not JSON payloads</td>
              </tr>
              <tr>
                <td className="px-4 py-3">[Support provider, if any]</td>
                <td className="px-4 py-3">Responding to messages</td>
                <td className="px-4 py-3">Information you send in a support request</td>
              </tr>
              <tr>
                <td className="px-4 py-3">[Advertising provider, if enabled]</td>
                <td className="px-4 py-3">Advertising</td>
                <td className="px-4 py-3">Information described in the updated Policy and consent notice</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          We do not authorize these providers to use JSON payloads entered into jsonglow for their own
          purposes. Providers may process information in countries different from your own, subject to
          applicable legal safeguards.
        </P>

        <H2 id="data-retention">8. Data retention</H2>
        <P>
          We retain information only for as long as reasonably necessary for the purposes described in this
          Policy, including security, accounting, legal, dispute-resolution, and operational requirements.
          JSON entered into the browser-based tools is not intentionally transmitted to or retained by
          jsonglow. Analytics retention settings should be configured in Google Analytics according to your
          operational needs and legal obligations.
        </P>

        <H2 id="international-transfers">9. International transfers</H2>
        <P>
          Our service providers may process information in countries outside your country of residence.
          Where required, we use appropriate safeguards for international transfers, such as an adequacy
          decision, standard contractual clauses, or another legally recognized mechanism.
        </P>

        <H2 id="your-privacy-rights">10. Your privacy rights</H2>
        <P>
          Depending on your location and applicable law, you may have rights to request access to,
          correction of, deletion of, restriction of, or portability of personal information, and to object
          to or withdraw consent for certain processing. You may also have the right to lodge a complaint
          with a data-protection authority.
        </P>
        <P>
          To make a request, contact tushar.jagtap8788@gmail.com and include the request type and the information
          needed to identify the relevant interaction. We may need to verify your identity before
          responding. We will not ask you to send us your JSON payload to verify a request.
        </P>
        <P>
          You can withdraw analytics consent at any time through the Privacy Settings link or control on the
          website. Withdrawal does not affect processing that occurred before withdrawal.
        </P>
        <P>
          California, Colorado, Connecticut, Utah, Virginia, and other US state laws may provide additional
          rights. jsonglow does not knowingly sell or share the JSON content entered into the tools. If
          applicable law provides a right to opt out of targeted advertising or certain forms of sharing, we
          will provide the required control.
        </P>

        <H2 id="children">11. Children</H2>
        <P>
          The Service is intended for developers and general users and is not directed to children under
          the age required by applicable law. We do not knowingly collect personal information from children
          in violation of applicable law. Contact us if you believe a child has provided personal
          information.
        </P>

        <H2 id="security">12. Security</H2>
        <P>
          We use reasonable technical and organizational measures appropriate to the risk. These measures
          cannot guarantee absolute security. Because JSON processing occurs in your browser, you are
          responsible for securing your device, browser, clipboard, and any extensions or software that can
          access browser content.
        </P>

        <H2 id="third-party-links">13. Third-party links</H2>
        <P>
          The Service may contain links to third-party websites or services. Their privacy practices are
          governed by their own policies. jsonglow is not responsible for third-party content or privacy
          practices.
        </P>

        <H2 id="changes">14. Changes to this Policy</H2>
        <P>
          We may update this Policy when the Service, analytics configuration, advertising, or applicable
          legal requirements change. We will post the updated version at this URL and change the “Last
          updated” date. Material changes may be communicated through the Service where appropriate.
        </P>

        <H2 id="contact">15. Contact</H2>
        <P>For questions, requests, or complaints about privacy, contact:</P>
        <p className="mt-3 font-mono text-[13px] text-muted">
          JSONGlow
          <br />
          Email: tushar.jagtap8788@gmail.com
          <br />
          Address: MH India
        </p>
      </article>
    </PageShell>
  );
}
