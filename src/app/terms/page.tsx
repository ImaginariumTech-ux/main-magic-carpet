import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description:
    "Official Website Terms of Use for Magic Carpet Studios. Review our terms regarding website access, intellectual property, Create With Us submissions, and dispute resolution.",
  openGraph: {
    title: "Website Terms of Use — Magic Carpet Studios",
    description:
      "Official Website Terms of Use governing access to Magic Carpet Studios, portfolio content, intellectual property, and creative submissions.",
    url: "https://magiccarpet.studio/terms",
    siteName: "Magic Carpet Studios",
    type: "website",
  },
};

const termsSections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    badge: "Agreement",
    content: (
      <>
        <p>
          These Website Terms of Use (&quot;Terms&quot;) govern your access to and use of the Magic Carpet Studios website at{" "}
          <a href="https://magiccarpet.studio/" target="_blank" rel="noreferrer" className="text-amber-600 underline font-medium">
            https://magiccarpet.studio/
          </a>{" "}
          (the &quot;Website&quot;).
        </p>
        <p>
          The Website is operated by Magic Carpet Studios (&quot;Magic Carpet Studios&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing, browsing or using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, you should discontinue use of the Website.
        </p>
      </>
    ),
  },
  {
    id: "about-magic-carpet",
    title: "2. About Magic Carpet Studios",
    badge: "Studio Profile",
    content: (
      <>
        <p>
          Magic Carpet Studios is an African storytelling and entertainment company focused on developing globally valuable entertainment intellectual property and providing animation, VFX, motion and related creative services.
        </p>
        <p>The Website provides information about our:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>intellectual properties and creative projects;</li>
          <li>animation and VFX capabilities;</li>
          <li>services;</li>
          <li>partnerships and clients;</li>
          <li>team;</li>
          <li>projects and productions;</li>
          <li>blog and other editorial content;</li>
          <li>opportunities to collaborate or join our team; and</li>
          <li>Magic Lab/Academy activities.</li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-the-website",
    title: "3. Use of the Website",
    badge: "User Conduct",
    content: (
      <>
        <p>You may access and use the Website for lawful purposes and in accordance with these Terms.</p>
        <p className="font-semibold text-[#0E121B] mt-2">You must not:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>use the Website for an unlawful, fraudulent or unauthorised purpose;</li>
          <li>attempt to gain unauthorised access to the Website or its systems;</li>
          <li>interfere with the operation or security of the Website;</li>
          <li>introduce viruses, malware or other harmful code;</li>
          <li>impersonate another person or organisation;</li>
          <li>use the Website to transmit unlawful or harmful material;</li>
          <li>scrape, reproduce or systematically extract Website content without permission;</li>
          <li>infringe the intellectual-property rights of Magic Carpet Studios or any third party;</li>
          <li>use Website content to create misleading representations;</li>
          <li>interfere with another person&apos;s use of the Website; or</li>
          <li>use the Website in a way that may damage, disable, overburden or impair its operation.</li>
        </ul>
      </>
    ),
  },
  {
    id: "website-content",
    title: "4. Website Content",
    badge: "Informational",
    content: (
      <>
        <p>
          The Website contains text, images, artwork, animations, videos, graphics, logos, designs, photographs, audiovisual materials, project information, editorial content and other materials.
        </p>
        <p>
          Website content is provided for general information and promotional purposes.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          Information about projects, services, partnerships or other activities does not constitute a binding offer unless expressly stated otherwise.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    badge: "Ownership",
    content: (
      <>
        <p>
          All intellectual property displayed or made available through the Website belongs to Magic Carpet Studios, its licensors or other relevant rights holders, unless expressly stated otherwise.
        </p>
        <p>This includes, without limitation:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 my-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Magic Carpet Studios branding;</li>
            <li>logos and trademarks;</li>
            <li>characters;</li>
            <li>animation;</li>
            <li>artwork;</li>
            <li>illustrations;</li>
            <li>photographs;</li>
            <li>videos;</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>showreels;</li>
            <li>audiovisual works;</li>
            <li>project names;</li>
            <li>creative concepts;</li>
            <li>text;</li>
            <li>graphics;</li>
            <li>website design;</li>
            <li>software and code;</li>
            <li>blog content;</li>
            <li>entertainment properties; and</li>
            <li>other creative and proprietary materials.</li>
          </ul>
        </div>
        <p className="font-semibold text-[#0E121B] pt-1">
          Nothing in these Terms transfers ownership of any intellectual property to you.
        </p>
      </>
    ),
  },
  {
    id: "limited-right-of-use",
    title: "6. Limited Right of Use",
    badge: "License",
    content: (
      <>
        <p>
          Subject to these Terms, Magic Carpet Studios grants you a limited, non-exclusive, non-transferable and revocable right to access and view publicly available Website content for personal, informational or legitimate business purposes.
        </p>
        <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
          You must not reproduce, modify, distribute, publicly display, commercially exploit, sell, licence, publish or create derivative works from Website content without prior written permission from Magic Carpet Studios or the relevant rights holder, except where such use is expressly permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "creative-projects-and-ip",
    title: "7. Creative Projects and Intellectual Property",
    badge: "Original IPs",
    content: (
      <>
        <p>
          Magic Carpet Studios works with original creative properties, animation, films, series, games, characters, concepts, scripts, storyboards, visual development materials and other forms of intellectual property.
        </p>
        <p>
          The appearance of a project, character, concept or creative work on the Website does not grant visitors any licence or ownership interest in that material.
        </p>
        <p className="font-semibold text-[#0E121B]">
          You must not copy, adapt, reproduce, exploit or commercialise any Magic Carpet Studios creative property without appropriate authorisation.
        </p>
      </>
    ),
  },
  {
    id: "create-with-us-submissions",
    title: "8. \"Create with Us\" Submissions",
    badge: "Submissions",
    content: (
      <>
        <p>
          The Website provides a Create With Us channel through which prospective clients, creators, studios, brands and other parties may contact Magic Carpet Studios regarding potential projects, production, consultation, partnerships and other opportunities.
        </p>
        <p>Submission of an enquiry does not create a contractual relationship.</p>
        <p>Unless expressly agreed in writing, Magic Carpet Studios does not undertake to:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>accept a proposal;</li>
          <li>develop or produce a submitted idea;</li>
          <li>enter into negotiations;</li>
          <li>maintain confidentiality over unsolicited material;</li>
          <li>pay compensation for a submission;</li>
          <li>return submitted material; or</li>
          <li>acquire or licence rights in submitted material.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          If a project proceeds, the rights and obligations of the parties will be governed by a separate written agreement.
        </p>
      </>
    ),
  },
  {
    id: "confidential-information",
    title: "9. Confidential Information",
    badge: "NDAs & Trade Secrets",
    content: (
      <>
        <p>
          You should not submit confidential information, trade secrets, unpublished scripts, proprietary concepts or other commercially sensitive materials through a general Website form unless Magic Carpet Studios expressly requests or agrees to receive such information under appropriate confidentiality arrangements.
        </p>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800">
          Where confidentiality is required, the parties should enter into an appropriate confidentiality or non-disclosure agreement before disclosure.
        </div>
      </>
    ),
  },
  {
    id: "employment-applications",
    title: "10. Employment Applications",
    badge: "Join Our Team",
    content: (
      <>
        <p>
          The Join Our Team page permits prospective applicants to submit information including their name, email address, portfolio/website, CV, social-media information and additional information.
        </p>
        <p>
          Submission of an application does not guarantee an interview, employment, engagement or any other relationship with Magic Carpet Studios.
        </p>
        <p className="text-xs sm:text-sm text-slate-600">
          Recruitment decisions remain subject to Magic Carpet Studios&apos; recruitment procedures, applicable requirements and the terms of any subsequent written agreement.
        </p>
      </>
    ),
  },
  {
    id: "user-provided-information",
    title: "11. User-Provided Information",
    badge: "User Accuracy",
    content: (
      <>
        <p>
          Where you provide information through the Website, you are responsible for ensuring that the information is accurate and that you have the right to provide it.
        </p>
        <p className="font-semibold text-[#0E121B] mt-2">You must not submit information that:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>infringes another person&apos;s rights;</li>
          <li>is unlawful;</li>
          <li>contains malicious code;</li>
          <li>is fraudulent or misleading; or</li>
          <li>breaches an obligation of confidentiality owed to another person.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-websites-and-services",
    title: "12. Third-Party Websites and Services",
    badge: "Third Parties",
    content: (
      <>
        <p>The Website may link to or provide access to third-party platforms and services, including:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>Calendly;</li>
          <li>social-media platforms;</li>
          <li>the Magic Lab/Academy website;</li>
          <li>external websites of partners or clients; and</li>
          <li>other third-party websites or services.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Third-party services are operated independently of Magic Carpet Studios. We do not control and are not responsible for third-party websites, their content, availability, security, privacy practices or terms.
        </p>
      </>
    ),
  },
  {
    id: "calendly-and-appointment-bookings",
    title: "13. Calendly and Appointment Bookings",
    badge: "Scheduling",
    content: (
      <>
        <p>
          Where you use the meeting-booking facility made available through the Website, you may be redirected to or interact with Calendly or another third-party scheduling service.
        </p>
        <p className="text-xs sm:text-sm text-slate-600">
          Your use of that service is subject to the third party&apos;s applicable terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "accuracy-of-information",
    title: "14. Accuracy of Information",
    badge: "Disclaimers",
    content: (
      <>
        <p>We make reasonable efforts to ensure that information published on the Website is accurate and current.</p>
        <p>However, we do not warrant that all content will always be:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>complete;</li>
          <li>accurate;</li>
          <li>current;</li>
          <li>error-free; or</li>
          <li>suitable for a particular purpose.</li>
        </ul>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Magic Carpet Studios may amend, update or remove Website content without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "website-availability",
    title: "15. Website Availability",
    badge: "Uptime",
    content: (
      <>
        <p>We may modify, suspend or discontinue any part of the Website at any time.</p>
        <p>
          We do not guarantee that the Website will always be available, uninterrupted, secure or free from errors.
        </p>
        <p className="text-xs sm:text-sm text-slate-600">
          The Website may be temporarily unavailable because of maintenance, upgrades, technical issues, security incidents, network failures or circumstances beyond our reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "16. Disclaimer",
    badge: "Legal Disclaimer",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, the Website and its content are provided on an &quot;as available&quot; basis.
        </p>
        <p>
          Nothing on the Website constitutes legal, financial, investment, professional or other specialised advice. Users should obtain appropriate professional advice before relying on information where such advice is necessary.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Nothing in these Terms excludes a representation, warranty or liability that cannot lawfully be excluded under Nigerian law.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "17. Limitation of Liability",
    badge: "Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, Magic Carpet Studios shall not be liable for indirect, incidental, special, consequential or similar losses arising from or relating to your access to or use of the Website.
        </p>
        <p className="text-xs sm:text-sm text-slate-600">
          This limitation does not exclude or restrict liability that cannot lawfully be excluded or restricted under applicable Nigerian law.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "18. Indemnity",
    badge: "User Indemnity",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, you agree to indemnify and hold harmless Magic Carpet Studios, its directors, officers, employees, contractors and authorised representatives against claims, losses, liabilities, costs and reasonable expenses arising from:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
          <li>your breach of these Terms;</li>
          <li>your unlawful use of the Website;</li>
          <li>your infringement of a third party&apos;s rights; or</li>
          <li>information or materials unlawfully submitted by you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "suspension-and-termination",
    title: "19. Suspension and Termination",
    badge: "Access Rights",
    content: (
      <>
        <p>Magic Carpet Studios may suspend or restrict access to the Website where reasonably necessary, including where:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>these Terms have been breached;</li>
          <li>unlawful activity is suspected;</li>
          <li>Website security is threatened;</li>
          <li>maintenance is required; or</li>
          <li>suspension is required by law or a competent authority.</li>
        </ul>
      </>
    ),
  },
  {
    id: "privacy",
    title: "20. Privacy",
    badge: "Cross-Reference",
    content: (
      <>
        <p>
          Personal data collected through the Website is processed in accordance with our{" "}
          <a href="/privacy" className="text-amber-600 underline font-semibold">
            Website Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "21. Cookies",
    badge: "Cross-Reference",
    content: (
      <>
        <p>The Website may use cookies and similar technologies.</p>
        <p>
          Our use of cookies is explained in our{" "}
          <a href="/cookies" className="text-amber-600 underline font-semibold">
            Cookie Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    title: "22. Changes to these Terms",
    badge: "Revisions",
    content: (
      <>
        <p>Magic Carpet Studios may amend these Terms from time to time.</p>
        <p>The revised version will be published on the Website with a new &quot;Last Updated&quot; date.</p>
        <p className="text-xs sm:text-sm text-slate-600">
          Your continued use of the Website after revised Terms become effective constitutes acceptance of the revised Terms to the extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "severability",
    title: "23. Severability",
    badge: "Enforceability",
    content: (
      <>
        <p>
          If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision shall be modified or severed to the extent necessary, and the remaining provisions shall remain effective.
        </p>
      </>
    ),
  },
  {
    id: "no-waiver",
    title: "24. No Waiver",
    badge: "Remedies",
    content: (
      <>
        <p>
          A failure by Magic Carpet Studios to enforce any provision of these Terms does not constitute a waiver of its right to enforce that provision subsequently.
        </p>
      </>
    ),
  },
  {
    id: "governing-law-and-jurisdiction",
    title: "25. Governing Law and Jurisdiction",
    badge: "Lagos Courts",
    content: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>.
        </p>
        <p>
          Subject to applicable law, the courts of competent jurisdiction in <strong>Lagos State, Nigeria</strong> shall have jurisdiction over disputes arising from or relating to these Terms or your use of the Website.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Website Terms of Use"
      title="Website Terms"
      titleItalic="of Use."
      subtitle="These Website Terms of Use govern your access to and use of the Magic Carpet Studios website, portfolio showreels, original entertainment IP, and creative inquiries."
      effectiveDate="23 September 2026"
      currentPath="/terms"
      sections={termsSections}
      relatedPages={[
        {
          title: "Website Privacy Policy",
          href: "/privacy",
          desc: "Learn how we collect, store, and protect your personal data in accordance with the Nigeria Data Protection Act 2023.",
        },
        {
          title: "Cookies Policy",
          href: "/cookies",
          desc: "Understand what cookies are, why they are used, and how to manage your cookie preferences on the Website.",
        },
      ]}
    />
  );
}
