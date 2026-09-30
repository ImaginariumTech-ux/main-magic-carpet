import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Original IPs",
  description:
    "Explore our slate of original entertainment intellectual properties including The Passport of Mallam Ilia, Garbage Boy and Trash Can, and Legends of Bulan.",
  openGraph: {
    title: "Projects & Original IPs — Magic Carpet Studios",
    description:
      "Explore original animated entertainment properties produced by Magic Carpet Studios.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
