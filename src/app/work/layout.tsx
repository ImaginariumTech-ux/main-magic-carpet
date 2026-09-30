import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Magic Carpet Studios' portfolio of 2D/3D animation, TV series, commercial campaigns, and original feature films.",
  openGraph: {
    title: "Our Work — Magic Carpet Studios",
    description:
      "Explore Magic Carpet Studios' portfolio of 2D/3D animation, TV series, commercial campaigns, and original feature films.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
