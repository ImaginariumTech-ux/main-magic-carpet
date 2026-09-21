"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blogPosts";

export default function SingleBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
  
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedBlogPosts(slug, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post) {
    return (
      <main className="relative min-h-screen bg-black text-white flex flex-col justify-between">
        <Navbar onOpenContact={() => setContactOpen(true)} />
        <div className="px-4 py-40 max-w-xl mx-auto text-center space-y-6">
          <div className="text-6xl">📜</div>
          <h1 className="text-3xl sm:text-4xl font-light">Article Not Found</h1>
          <p className="text-sm text-white/60">
            The article you are looking for does not exist or may have been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-xl"
          >
            ← Back to Blog Index
          </Link>
        </div>
        <Footer onOpenContact={() => setContactOpen(true)} />
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Post Header Hero */}
      <article className="pt-32 md:pt-40 pb-20">
        <div className="px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb Navigation */}
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-yellow-400 transition-colors py-1"
            >
              <span>←</span> Back to all articles
            </Link>
          </div>

          {/* Article Category & Date Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">{post.date}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">{post.readTime}</span>
          </div>

          {/* Article Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                {post.subtitle}
              </p>
            )}
          </div>

          {/* Author Card & Share Actions Bar */}
          <div className="py-6 border-y border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-md"
                />
              )}
              <div>
                <div className="text-base font-medium text-white">{post.author.name}</div>
                <div className="text-xs text-white/50">{post.author.role}</div>
              </div>
            </div>

            {/* Share Toolbar */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Share:</span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/80 hover:text-white transition-all border border-white/10 flex items-center gap-1.5"
                title="Copy Link"
              >
                {copied ? "✓ Copied" : "🔗 Copy Link"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/80 hover:text-white transition-all border border-white/10"
              >
                𝕏 Share
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-white/80 hover:text-white transition-all border border-white/10"
              >
                in Share
              </a>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 bg-neutral-900 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {post.imageCaption && (
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-xs text-white/70 italic text-center">
                {post.imageCaption}
              </div>
            )}
          </div>

          {/* Article Body Content */}
          <div className="pt-6 space-y-10 text-white/80 leading-relaxed text-base sm:text-lg">
            {/* Intro Lead Paragraph */}
            <p className="text-xl sm:text-2xl font-light text-white leading-relaxed border-l-2 border-yellow-400 pl-6 py-1">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-6 pt-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight pt-4">
                    {section.heading}
                  </h2>
                )}

                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-white/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Quote Block */}
                {section.quote && (
                  <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border-l-4 border-yellow-400 space-y-3">
                    <p className="text-lg sm:text-xl font-serif-accent italic text-white leading-snug">
                      “{section.quote.text}”
                    </p>
                    {section.quote.author && (
                      <cite className="block text-xs font-semibold text-yellow-400 not-italic uppercase tracking-widest">
                        — {section.quote.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                {/* Callout Box */}
                {section.callout && (
                  <div className="my-8 p-6 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 space-y-2">
                    <div className="text-xs uppercase tracking-widest text-yellow-400 font-bold">
                      💡 {section.callout.title}
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Tags Footer */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-10 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-white/40 font-semibold mr-2">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-neutral-950 border-t border-white/10">
          <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-1">
                  Continue Reading
                </div>
                <h3 className="text-2xl sm:text-4xl font-light text-white">Related Articles</h3>
              </div>
              <Link
                href="/blog"
                className="text-sm text-white/60 hover:text-yellow-400 transition-colors flex items-center gap-1"
              >
                All Stories <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost) => (
                <article
                  key={relPost.id}
                  className="group bg-black rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-yellow-400/40 transition-all duration-300 shadow-xl"
                >
                  <Link href={`/blog/${relPost.slug}`} className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                        {relPost.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-white/50">{relPost.date}</div>
                      <h4 className="text-base font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                        <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                      </h4>
                    </div>

                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="text-xs text-yellow-400 font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      Read Article <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer & Contact Modal */}
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
