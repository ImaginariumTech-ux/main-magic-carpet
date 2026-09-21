"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const CATEGORIES = ["All", "News", "Events", "Awards", "Behind The Scenes"] as const;

export default function BlogIndexPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return blogPosts.find((post) => post.featured) || blogPosts[0];
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-black">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-4 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                Editorial & Insights
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white">
                Stories from the <br />
                <span className="font-serif-accent italic font-normal text-yellow-400">Frontlines of Animation.</span>
              </h1>
            </div>

            <p className="text-white/70 max-w-md text-base leading-relaxed">
              Explore deep dives into original African IP development, real-time rendering, festival awards, and the future of global 3D storytelling.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-neutral-900/80 p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                        : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <svg
                className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Banner (Visible when no category filter applied and no search) */}
      {selectedCategory === "All" && !searchQuery && featuredPost && (
        <section className="py-12 border-b border-white/10 bg-neutral-950/60">
          <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-4">
              Featured Story
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900/60 rounded-3xl border border-white/10 p-6 sm:p-8 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
            >
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-800">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-semibold text-yellow-400 border border-yellow-400/30">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white group-hover:text-yellow-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-white/70 leading-relaxed line-clamp-4">
                    {featuredPost.subtitle || featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {featuredPost.author.avatar && (
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{featuredPost.author.name}</div>
                      <div className="text-xs text-white/50">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400 group-hover:translate-x-1.5 transition-transform">
                    Read Story <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main Blog Grid Section */}
      <section className="py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl sm:text-2xl font-light text-white">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              <span className="text-sm text-white/40 font-mono ml-3">({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/15 rounded-3xl p-8 bg-neutral-900/30">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-medium text-white mb-2">No articles found</h4>
              <p className="text-sm text-white/60 mb-6">
                No blog posts matched your search parameters. Try adjusting your query or category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-xs font-semibold uppercase tracking-wider text-white hover:text-black transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
                >
                  {/* Article Image Container */}
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Article Info Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs text-white/70 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Footer Link */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        {post.author.avatar && (
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover border border-white/20"
                          />
                        )}
                        <span className="text-white/80 font-medium">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-yellow-400 hover:underline font-semibold flex items-center gap-1"
                      >
                        Read <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer & Contact */}
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
