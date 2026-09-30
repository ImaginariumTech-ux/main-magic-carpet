import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/data/blogPosts";

interface LayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Magic Carpet Studios`,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function SingleBlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
