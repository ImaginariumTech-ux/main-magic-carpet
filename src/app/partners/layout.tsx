import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Co-Productions",
  description:
    "Discover Magic Carpet Studios' strategic broadcast alliances and co-productions with Cartoon Network, UNDP, Sesame Street, and global entertainment leaders.",
  openGraph: {
    title: "Partners & Co-Productions — Magic Carpet Studios",
    description:
      "Discover Magic Carpet Studios' strategic broadcast alliances and co-productions with Cartoon Network, UNDP, Sesame Street, and global entertainment leaders.",
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
