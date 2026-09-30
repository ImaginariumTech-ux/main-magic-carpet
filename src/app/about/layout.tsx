import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Magic Carpet Studios, our story, creative leadership, and mission to tell authentic African stories with world-class 2D and 3D animation.",
  openGraph: {
    title: "About Us — Magic Carpet Studios",
    description:
      "Learn about Magic Carpet Studios, our story, creative leadership, and mission to tell authentic African stories with world-class 2D and 3D animation.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
