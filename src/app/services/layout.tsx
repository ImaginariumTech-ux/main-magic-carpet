import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animation & Storytelling Services",
  description:
    "Full-service 2D and 3D animation, commercial brand storytelling, explainer & educational video production, and end-to-end creative development.",
  openGraph: {
    title: "Animation & Storytelling Services — Magic Carpet Studios",
    description:
      "Full-service 2D and 3D animation, commercial brand storytelling, explainer & educational video production, and end-to-end creative development.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
