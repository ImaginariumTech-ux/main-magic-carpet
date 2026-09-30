import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Website Privacy Policy — Magic Carpet Studios",
  description:
    "Official Website Privacy Policy for Magic Carpet Studios. Learn how we collect, use, disclose, store, and protect personal data in compliance with the Nigeria Data Protection Act 2023 (NDPA).",
  openGraph: {
    title: "Website Privacy Policy — Magic Carpet Studios",
    description:
      "Official Privacy Policy explaining how Magic Carpet Studios handles personal data, creative submissions, and recruitment records.",
    url: "https://magiccarpet.studio/privacy",
    siteName: "Magic Carpet Studios",
    type: "website",
  },
};

const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    badge: "Scope & Law",
    content: (
      <>
        <p>
          Magic Carpet Studios (&quot;Magic Carpet Studios&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is committed to protecting the privacy and personal data of individuals who interact with us through our website, digital platforms and related services.
        </p>
        <p>
          This Website Privacy Policy (&quot;Privacy Policy&quot;) explains how we collect, use, disclose, store and protect personal data obtained through our website at{" "}
          <a href="https://magiccarpet.studio/" target="_blank" rel="noreferrer" className="text-amber-600 underline font-medium">
            https://magiccarpet.studio/
          </a>{" "}
          (the &quot;Website&quot;).
        </p>
        <p>
          This Privacy Policy applies to personal data collected through the Website, including information submitted through our Create with Us and Join Our Team pages, newsletter subscriptions, meeting-booking arrangements and other interactions with the Website.
        </p>
        <p>
          We process personal data in accordance with the <strong>Nigeria Data Protection Act 2023 (&quot;NDPA&quot;)</strong>, applicable regulations and guidance issued by the <strong>Nigeria Data Protection Commission (&quot;NDPC&quot;)</strong>, and other applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "who-we-are",
    title: "2. Who We Are",
    badge: "Studio Operator",
    content: (
      <>
        <p>
          Magic Carpet Studios is an animation, VFX and motion design studio. This policy explains how we handle personal data, in compliance with the UK GDPR and the Data Protection Act 2018.
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm my-4">
          <p className="font-bold text-[#0E121B] text-sm">The Website is operated by:</p>
          <p className="font-semibold text-slate-800">Magic Carpet Studios</p>
          <p className="text-slate-600">Plot 18, Nike Art Gallery Road, Ikate, Lekki, Lagos, Nigeria.</p>
          <p className="text-slate-600">
            Email:{" "}
            <a href="mailto:hello@magiccarpet.studio" className="text-amber-600 font-semibold underline">
              hello@magiccarpet.studio
            </a>
          </p>
        </div>
        <p>
          For privacy and data-protection enquiries, please contact us at:{" "}
          <a href="mailto:hello@magiccarpet.studio" className="text-amber-600 font-semibold underline">
            hello@magiccarpet.studio
          </a>
        </p>
        <p className="text-xs text-slate-500 italic">
          Where Magic Carpet Studios appoints a designated Data Protection Officer or dedicated privacy contact, the relevant contact details may be added to this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "personal-data-we-collect",
    title: "3. Personal Data We Collect",
    badge: "Data Categories",
    content: (
      <>
        <p>The type of personal data we collect depends on how you interact with the Website.</p>

        <div className="space-y-6 mt-4">
          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">3.1 Information submitted through &quot;Create with Us&quot;</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              When you contact us regarding a potential project, partnership, production, licensing or other business opportunity, we may collect information such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>name and contact details;</li>
              <li>email address;</li>
              <li>telephone number, where requested;</li>
              <li>organisation or business information;</li>
              <li>details concerning the project, production or proposed collaboration;</li>
              <li>services of interest;</li>
              <li>
                information relating to animation, VFX, motion graphics, game animation, voice acting, scriptwriting, storyboarding, concept art, modelling, visualization, AR/VR, subtitling, dubbing or other services selected through the form;
              </li>
              <li>information contained in your message or enquiry; and</li>
              <li>any other information you voluntarily provide.</li>
            </ul>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">3.2 Information submitted through &quot;Join Our Team&quot;</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              If you apply for an opportunity through the Website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>first name;</li>
              <li>last name;</li>
              <li>email address;</li>
              <li>portfolio or website;</li>
              <li>CV or résumé;</li>
              <li>social-media information voluntarily provided;</li>
              <li>additional information included in your application; and</li>
              <li>other information reasonably necessary to assess your application.</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-1">
              Uploaded CVs and other application materials may contain additional personal information. Applicants should ensure that information supplied is accurate and relevant to their application.
            </p>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">3.3 Newsletter information</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Where you subscribe to our newsletter or other communications, we may collect your email address and information necessary to manage your subscription and communications preferences.
            </p>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">3.4 Meeting and appointment information</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The Website provides access to third-party meeting-booking services, including Calendly.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Where you choose to book a meeting through a third-party platform, information you provide may be processed directly by that provider in accordance with its own privacy policy and terms.
            </p>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 space-y-2">
            <h4 className="font-bold text-[#0E121B] text-sm">3.5 Technical and usage information</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              When you visit the Website, certain technical information may be collected automatically, depending on the Website&apos;s configuration. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>IP address;</li>
              <li>browser type and version;</li>
              <li>device type;</li>
              <li>operating system;</li>
              <li>pages viewed;</li>
              <li>approximate date and time of access;</li>
              <li>referring website;</li>
              <li>Website interaction information;</li>
              <li>security and diagnostic information; and</li>
              <li>information collected through cookies and similar technologies.</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "4. How We Collect Personal Data",
    badge: "Collection Methods",
    content: (
      <>
        <p>We may collect personal data:</p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
          <li>directly from you through Website forms;</li>
          <li>when you contact us by email;</li>
          <li>when you subscribe to our communications;</li>
          <li>when you submit an employment or collaboration enquiry;</li>
          <li>when you interact with the Website;</li>
          <li>when you book a meeting through an integrated third-party service;</li>
          <li>through cookies and similar technologies; and</li>
          <li>from third parties where such collection is lawful and appropriate.</li>
        </ul>
      </>
    ),
  },
  {
    id: "why-we-process",
    title: "5. Why We Process Personal Data",
    badge: "Purposes",
    content: (
      <>
        <p>We may process personal data for purposes including:</p>
        <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
          <li>responding to enquiries and requests;</li>
          <li>evaluating potential projects, partnerships and business opportunities;</li>
          <li>communicating with prospective and existing clients, collaborators and partners;</li>
          <li>considering employment and talent applications;</li>
          <li>managing recruitment and selection processes;</li>
          <li>providing requested information and services;</li>
          <li>arranging meetings and consultations;</li>
          <li>managing newsletter and other communications;</li>
          <li>maintaining and improving the Website;</li>
          <li>monitoring Website performance and security;</li>
          <li>protecting our intellectual property, confidential information and other rights;</li>
          <li>preventing fraud, misuse or unauthorised access;</li>
          <li>complying with applicable legal and regulatory obligations;</li>
          <li>establishing, exercising or defending legal claims; and</li>
          <li>carrying out other purposes disclosed at the point of collection or otherwise permitted by law.</li>
        </ol>
        <p className="mt-4 text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          We will not use personal data for purposes incompatible with the purpose for which it was collected unless such processing is permitted or required by law.
        </p>
      </>
    ),
  },
  {
    id: "lawful-basis",
    title: "6. Lawful Basis for Processing",
    badge: "Legal Ground",
    content: (
      <>
        <p>Depending on the circumstances, we may process personal data on the basis of:</p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
          <li>your consent;</li>
          <li>steps taken at your request before entering into a contract;</li>
          <li>performance of a contract;</li>
          <li>compliance with a legal obligation;</li>
          <li>protection of vital interests where applicable;</li>
          <li>performance of a task carried out in the public interest where applicable; or</li>
          <li>our legitimate interests, where permitted by law and where those interests are not overridden by your rights and freedoms.</li>
        </ul>
        <p className="mt-4 text-xs sm:text-sm text-slate-700">
          Where we rely on consent, you may withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.
        </p>
      </>
    ),
  },
  {
    id: "creative-and-project-information",
    title: "7. Creative and Project Information",
    badge: "Creative Submissions",
    content: (
      <>
        <p>
          Magic Carpet Studios operates in the creative and entertainment industry and may receive project-related information through the Website.
        </p>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-800 space-y-2 my-3 text-xs sm:text-sm">
          <p className="font-semibold text-[#0E121B]">Caution Regarding Unsolicited Concepts & Materials:</p>
          <p>
            Users should exercise appropriate caution before submitting confidential information, trade secrets, unpublished creative materials, scripts, concepts, storylines, characters, artwork, business plans or other commercially sensitive material through a general Website form.
          </p>
        </div>
        <p>
          Unless expressly agreed otherwise in writing, submission of information through the Website does not create an obligation on Magic Carpet Studios to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>maintain confidentiality beyond any obligation imposed by law;</li>
          <li>develop or produce the submitted material;</li>
          <li>enter into a commercial relationship;</li>
          <li>pay compensation;</li>
          <li>license or acquire rights in the material; or</li>
          <li>return submitted materials.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Any specific confidentiality, intellectual-property, production, licensing or commercial arrangement will be governed by the applicable written agreement.
        </p>
      </>
    ),
  },
  {
    id: "disclosure-of-personal-data",
    title: "8. Disclosure of Personal Data",
    badge: "Disclosures",
    content: (
      <>
        <p>We may disclose personal data where reasonably necessary to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>authorised employees and representatives;</li>
          <li>professional advisers, including legal and financial advisers;</li>
          <li>recruitment and human-resources service providers;</li>
          <li>hosting, cloud-storage and technology providers;</li>
          <li>Website developers and technical service providers;</li>
          <li>communications and newsletter providers;</li>
          <li>analytics and security providers, where applicable;</li>
          <li>meeting and scheduling service providers;</li>
          <li>business partners and contractors where necessary for an identified purpose;</li>
          <li>regulators and government authorities where legally required;</li>
          <li>courts or other competent authorities; and</li>
          <li>prospective investors, purchasers or transaction counterparties where reasonably necessary in connection with a corporate transaction.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-3">
          Where a third party processes personal data on our behalf, we will take reasonable steps to ensure appropriate data-protection obligations and safeguards are in place.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "9. Third-Party Services",
    badge: "External Services",
    content: (
      <>
        <p>
          The Website may link to or integrate third-party services, platforms and websites, including meeting-booking services, social-media platforms and the Magic Lab Academy website.
        </p>
        <p>Third-party providers operate under their own privacy policies and terms.</p>
        <p>We are not responsible for the privacy practices of third-party websites or platforms that we do not control.</p>
      </>
    ),
  },
  {
    id: "international-data-transfers",
    title: "10. International Data Transfers",
    badge: "Cross-Border Transfers",
    content: (
      <>
        <p>Some of our service providers may process personal data outside Nigeria.</p>
        <p>
          Where personal data is transferred outside Nigeria, Magic Carpet Studios will take appropriate steps to ensure that the transfer complies with applicable Nigerian data-protection requirements.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "11. Data Security",
    badge: "Technical Measures",
    content: (
      <>
        <p>We take reasonable technical and organisational measures to protect personal data against:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>unauthorised access;</li>
          <li>unlawful processing;</li>
          <li>accidental loss;</li>
          <li>destruction;</li>
          <li>alteration;</li>
          <li>unauthorised disclosure; and</li>
          <li>other unauthorised or unlawful processing.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          No electronic transmission or storage system can be guaranteed to be completely secure. Where a personal-data breach occurs, we will take appropriate steps in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "12. Data Retention",
    badge: "Retention Periods",
    content: (
      <>
        <p>
          We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, to comply with legal and regulatory obligations, resolve disputes, enforce agreements and protect our legitimate interests.
        </p>
        <p>Retention periods may vary depending on the type of information and the circumstances in which it was collected. For example:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>
            <strong>recruitment/application information:</strong> may be retained for a reasonable period after the relevant recruitment process;
          </li>
          <li>
            <strong>business enquiry information:</strong> may be retained for as long as reasonably necessary to manage the relevant relationship or potential relationship;
          </li>
          <li>
            <strong>contractual records:</strong> may be retained for the applicable contractual, legal and limitation periods; and
          </li>
          <li>
            <strong>newsletter information:</strong> may be retained while a subscription remains active, subject to applicable requirements.
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          When information is no longer required, we will take reasonable steps to delete, destroy or anonymise it, subject to applicable legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "data-protection-rights",
    title: "13. Your Data-Protection Rights",
    badge: "User Rights",
    content: (
      <>
        <p>Subject to applicable law and relevant limitations, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>request information about how your personal data is processed;</li>
          <li>request access to personal data we hold about you;</li>
          <li>request correction of inaccurate or incomplete information;</li>
          <li>request deletion or erasure in appropriate circumstances;</li>
          <li>request restriction of certain processing;</li>
          <li>object to certain processing;</li>
          <li>withdraw consent where processing is based on consent;</li>
          <li>request portability of personal data where applicable;</li>
          <li>object to direct marketing;</li>
          <li>exercise rights relating to applicable automated decision-making; and</li>
          <li>lodge a complaint with the NDPC.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-500 italic mt-2">
          These rights are subject to the conditions and exemptions provided by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "exercise-your-rights",
    title: "14. How to Exercise Your Rights",
    badge: "Contact Desk",
    content: (
      <>
        <p>To exercise a data-protection right or raise a privacy concern, contact:</p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1 my-2">
          <p className="font-bold text-[#0E121B]">Magic Carpet Studios</p>
          <p>Plot 18, Nike Art Gallery Road, Ikate, Lekki, Lagos, Nigeria.</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@magiccarpet.studio" className="text-amber-600 underline font-semibold">
              hello@magiccarpet.studio
            </a>
          </p>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          We may request reasonable information to verify your identity before processing a request. We will respond to valid requests within the timeframe prescribed by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "childrens-data",
    title: "15. Children's Data",
    badge: "Minors",
    content: (
      <>
        <p>
          The Website is not intended to knowingly collect personal data from children in circumstances where applicable law requires additional safeguards or consent.
        </p>
        <p>
          Where we become aware that personal data has been collected contrary to applicable legal requirements, we will take reasonable steps to address the situation.
        </p>
      </>
    ),
  },
  {
    id: "cookies-and-tracking",
    title: "16. Cookies and Tracking Technologies",
    badge: "Cookies",
    content: (
      <>
        <p>
          The Website may use cookies and similar technologies for essential functionality, security, preferences, analytics and other purposes.
        </p>
        <p>
          Where applicable law requires consent for non-essential cookies or tracking technologies, appropriate consent mechanisms will be provided.
        </p>
        <p>
          Further information is contained in our{" "}
          <a href="/cookies" className="text-amber-600 underline font-semibold">
            Cookie Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "social-media",
    title: "17. Social Media",
    badge: "Social Channels",
    content: (
      <>
        <p>
          The Website contains links to Magic Carpet Studios&apos; social-media channels and may contain embedded or linked social-media content.
        </p>
        <p>
          Interaction with third-party social-media platforms is governed by the relevant platform&apos;s own terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-policy",
    title: "18. Changes to this Privacy Policy",
    badge: "Policy Updates",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our operations, Website functionality, technology, legal requirements or data-protection practices.
        </p>
        <p>
          The updated version will be published on the Website with a revised &quot;Last Updated&quot; date.
        </p>
      </>
    ),
  },
  {
    id: "complaints",
    title: "19. Complaints",
    badge: "Regulatory Body",
    content: (
      <>
        <p>
          If you have concerns about how we process your personal data, please contact us first at{" "}
          <a href="mailto:hello@magiccarpet.studio" className="text-amber-600 underline font-semibold">
            hello@magiccarpet.studio
          </a>
          .
        </p>
        <p>
          You may also have the right to lodge a complaint with the <strong>Nigeria Data Protection Commission (NDPC)</strong> or another competent supervisory authority.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "20. Governing Law",
    badge: "Jurisdiction",
    content: (
      <>
        <p>
          This Privacy Policy shall be governed by and interpreted in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="Website Privacy Policy"
      title="Website Privacy"
      titleItalic="Policy."
      subtitle="How Magic Carpet Studios collects, uses, discloses, stores and protects personal data obtained through our website and digital services in accordance with the Nigeria Data Protection Act 2023 (NDPA)."
      effectiveDate="23 September 2026"
      currentPath="/privacy"
      sections={privacySections}
      relatedPages={[
        {
          title: "Website Terms of Use",
          href: "/terms",
          desc: "Read the governing terms regarding website access, intellectual property, Create With Us submissions, and limitations.",
        },
        {
          title: "Cookies Policy",
          href: "/cookies",
          desc: "Learn about the categories of cookies we deploy, third-party technologies, and how to manage your cookie preferences.",
        },
      ]}
    />
  );
}
