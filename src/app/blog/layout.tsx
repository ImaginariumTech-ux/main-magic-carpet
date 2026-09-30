import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial & Insights",
  description:
    "Stories, industry perspectives, festival awards, and behind-the-scenes insights from the frontlines of African animation at Magic Carpet Studios.",
  openGraph: {
    title: "Editorial & Insights — Magic Carpet Studios",
    description:
      "Stories, industry perspectives, festival awards, and behind-the-scenes insights from the frontlines of African animation at Magic Carpet Studios.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
