import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Website Cookies Policy — Magic Carpet Studios",
  description:
    "Official Website Cookies Policy for Magic Carpet Studios. Learn what cookies are, why they are used, the categories deployed, and how to manage your cookie preferences.",
  openGraph: {
    title: "Website Cookies Policy — Magic Carpet Studios",
    description:
      "Official Cookie Policy explaining cookie categories, third-party technologies, and consent mechanisms on Magic Carpet Studios.",
    url: "https://magiccarpet.studio/cookies",
    siteName: "Magic Carpet Studios",
    type: "website",
  },
};

const cookieSections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    badge: "Overview",
    content: (
      <>
        <p>
          Magic Carpet Studios (&quot;Magic Carpet Studios&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) uses cookies and similar technologies on its website at{" "}
          <a href="https://magiccarpet.studio/" target="_blank" rel="noreferrer" className="text-amber-600 underline font-medium">
            https://magiccarpet.studio/
          </a>{" "}
          (the &quot;Website&quot;).
        </p>
        <p>
          This Cookie Policy explains what cookies are, why they may be used on the Website, the categories of cookies that may be deployed, and how you can manage your preferences.
        </p>
        <p>
          This Cookie Policy should be read together with our{" "}
          <a href="/privacy" className="text-amber-600 underline font-semibold">
            Website Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    title: "2. What Are Cookies?",
    badge: "Definition",
    content: (
      <>
        <p>
          Cookies are small text files that may be stored on your device when you visit a website.
        </p>
        <p>
          Cookies may allow a website to recognise a browser or device, remember preferences, maintain functionality, understand how visitors use a website and support security and other features.
        </p>
        <p>
          We may also use technologies that perform similar functions, including pixels, tags, web beacons, local storage and similar tracking technologies.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-cookies",
    title: "3. Why We Use Cookies",
    badge: "Purposes",
    content: (
      <>
        <p>Depending on the configuration of the Website, cookies and similar technologies may be used to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>operate essential Website functionality;</li>
          <li>maintain security;</li>
          <li>remember user preferences;</li>
          <li>improve Website performance;</li>
          <li>understand how visitors interact with the Website;</li>
          <li>measure Website traffic;</li>
          <li>analyse usage patterns;</li>
          <li>improve our content and services; and</li>
          <li>support other Website functions.</li>
        </ul>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    title: "4. Types of Cookies",
    badge: "Cookie Categories",
    content: (
      <>
        <div className="space-y-6">
          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">4.1 Strictly Necessary Cookies</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              These cookies are necessary for the Website to operate properly or securely.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">They may support:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>page navigation;</li>
              <li>security;</li>
              <li>session management;</li>
              <li>accessibility;</li>
              <li>form functionality; and</li>
              <li>other essential Website functions.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 mt-2">
              Where a cookie is strictly necessary for a requested Website function, it may not be possible to disable it without affecting Website functionality.
            </p>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">4.2 Functional/Preference Cookies</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              These cookies allow the Website to remember choices and preferences.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">They may be used for features such as:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>language or regional preferences;</li>
              <li>display preferences;</li>
              <li>remembered settings; and</li>
              <li>other functionality requested by a visitor.</li>
            </ul>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">4.3 Analytics/Performance Cookies</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Where deployed, analytics cookies may help us understand how visitors interact with the Website.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">They may provide information about:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>pages visited;</li>
              <li>Website navigation;</li>
              <li>traffic sources;</li>
              <li>device and browser information;</li>
              <li>session activity; and</li>
              <li>general Website performance.</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-1">
              The final technical cookie register should identify the actual analytics provider(s) deployed on the Website.
            </p>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">4.4 Marketing/Advertising Cookies</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Where deployed, marketing or advertising technologies may be used to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>measure marketing activity;</li>
              <li>understand interactions with promotional content;</li>
              <li>measure advertising performance; or</li>
              <li>support relevant communications.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 mt-2">
              Such technologies will only be used where permitted by applicable law and, where required, after obtaining appropriate consent.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "third-party-technologies",
    title: "5. Third-Party Technologies",
    badge: "Integrations",
    content: (
      <>
        <p>The Website may contain links, integrations or embedded content from third-party services.</p>
        <p>These may include, depending on the Website&apos;s technical configuration:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>Calendly;</li>
          <li>social-media platforms;</li>
          <li>video or media providers;</li>
          <li>analytics providers;</li>
          <li>security services;</li>
          <li>hosting and technical service providers; and</li>
          <li>other third-party technologies.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-3">
          The actual third-party technologies deployed on the Website should be reflected in Magic Carpet Studios&apos; internal cookie register and consent-management configuration.
        </p>
        <p className="text-xs sm:text-sm text-slate-600">
          Third parties may use their own cookies or similar technologies and process information according to their own privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "cookie-consent",
    title: "6. Cookie Consent",
    badge: "Consent Mechanisms",
    content: (
      <>
        <p>
          Where applicable law requires consent for non-essential cookies or similar tracking technologies, Magic Carpet Studios will provide a cookie-consent mechanism that allows visitors to make an informed choice.
        </p>
        <p>Where appropriate, the consent mechanism should allow users to:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>accept non-essential cookies;</li>
          <li>reject non-essential cookies;</li>
          <li>select cookie categories; and</li>
          <li>change or withdraw their preferences.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Strictly necessary cookies may operate where they are necessary for the Website&apos;s requested functionality and applicable law permits their use without additional consent.
        </p>
      </>
    ),
  },
  {
    id: "cookie-notice",
    title: "7. Cookie Notice",
    badge: "Transparency",
    content: (
      <>
        <p>The Website&apos;s cookie notice should be displayed in a clear and conspicuous manner.</p>
        <p>The notice should explain:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>that cookies or similar technologies are used;</li>
          <li>the purposes for which they are used;</li>
          <li>who is responsible for their use;</li>
          <li>the categories of cookies deployed; and</li>
          <li>how visitors may manage or withdraw consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookie-retention",
    title: "8. Cookie Retention",
    badge: "Storage Duration",
    content: (
      <>
        <p>Cookies may be either:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>
            <strong>Session cookies:</strong> which are generally removed when the browser is closed; or
          </li>
          <li>
            <strong>Persistent cookies:</strong> which remain for a defined period or until deleted by the user.
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          The retention period for each cookie will depend on its purpose and provider. Magic Carpet Studios will seek to ensure that cookies are retained for no longer than reasonably necessary for their stated purpose.
        </p>
      </>
    ),
  },
  {
    id: "managing-preferences",
    title: "9. Managing Your Cookie Preferences",
    badge: "User Controls",
    content: (
      <>
        <p>You may manage cookies through:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>the Website&apos;s cookie-preference mechanism, where available;</li>
          <li>your browser settings;</li>
          <li>device settings; or</li>
          <li>settings provided by relevant third-party services.</li>
        </ul>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 my-2">
          Please note that disabling certain cookies may affect Website functionality.
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Where the Website provides a cookie-preference mechanism, you may use it to change or withdraw your choices.
        </p>
      </>
    ),
  },
  {
    id: "cookies-and-personal-data",
    title: "10. Cookies and Personal Data",
    badge: "Data Protection",
    content: (
      <>
        <p>
          Some cookies and similar technologies may involve the processing of personal data, including online identifiers and information that may be associated with an identifiable individual.
        </p>
        <p>
          Where such processing occurs, Magic Carpet Studios will process the relevant information in accordance with applicable data-protection law and our{" "}
          <a href="/privacy" className="text-amber-600 underline font-semibold">
            Website Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "11. International Transfers",
    badge: "Cross-Border",
    content: (
      <>
        <p>Some third-party technology providers may process information outside Nigeria.</p>
        <p>
          Where this involves personal data, Magic Carpet Studios will take appropriate measures required by applicable data-protection law for international transfers.
        </p>
      </>
    ),
  },
  {
    id: "do-not-track",
    title: "12. Do Not Track",
    badge: "Privacy Signals",
    content: (
      <>
        <p>Some browsers provide &quot;Do Not Track&quot; or similar browser settings.</p>
        <p>
          Because there is currently no uniform technical standard for interpreting such signals across all services, the Website may not respond to every such signal.
        </p>
        <p>
          Where legally required, we will comply with applicable requirements relating to recognised privacy preference signals.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-cookie-policy",
    title: "13. Changes to this Cookie Policy",
    badge: "Policy Updates",
    content: (
      <>
        <p>We may update this Cookie Policy where:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>the Website changes;</li>
          <li>new cookies or technologies are introduced;</li>
          <li>existing cookies are removed;</li>
          <li>third-party providers change;</li>
          <li>applicable law changes; or</li>
          <li>our privacy practices change.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          The updated version will be published on the Website with a revised &quot;Last Updated&quot; date.
        </p>
      </>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      badge="Website Cookies Policy"
      title="Website Cookies"
      titleItalic="Policy."
      subtitle="This Cookie Policy explains what cookies are, why they may be used on the Website, the categories of cookies deployed, and how you can manage your preferences."
      effectiveDate="23 September 2026"
      currentPath="/cookies"
      sections={cookieSections}
      relatedPages={[
        {
          title: "Website Privacy Policy",
          href: "/privacy",
          desc: "Read our comprehensive privacy policy governing personal data, Create With Us submissions, and user rights.",
        },
        {
          title: "Website Terms of Use",
          href: "/terms",
          desc: "Review the governing terms and conditions regarding website access, intellectual property, and limitations.",
        },
      ]}
    />
  );
}
