import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Have an animation project in mind? Partner with Magic Carpet Studios. Submit a production brief, book a consultation, or start your next 2D/3D project.",
  openGraph: {
    title: "Work With Us — Magic Carpet Studios",
    description:
      "Partner with Magic Carpet Studios for 2D/3D animation, TV series, commercials, and original storytelling.",
  },
};

export default function WorkWithUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
