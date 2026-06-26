"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowRightIcon,
  CalendarIcon,
  Clock3Icon,
} from "lucide-react";

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: Author;
}

const featuredPost: BlogPost = {
  id: 1,
  title:
    "Why Your Sales Data Lives in Five Different Logins (and How to Fix It)",
  excerpt:
    "Every POS speaks a different language. Here's how multi-location operators are building one real-time view across Square, Toast, Clover, and a dozen other systems.",
  category: "Multi-Location Ops",
  date: "June 18, 2026",
  readTime: "9 min read",
  imageUrl:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  author: {
    name: "Jordan Pierce",
    role: "Head of Operations Insights",
    avatar: "/professional-headshot-1.png",
  },
};

const editorsPicks: BlogPost[] = [
  {
    id: 2,
    title:
      "Square vs. Toast vs. Clover: What Actually Changes When You Switch POS Systems",
    excerpt:
      "A practical breakdown of menu migrations, reporting gaps, and the real cost of switching, and how to keep your data in sync no matter which one you pick.",
    category: "Integrations",
    date: "June 10, 2026",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    author: {
      name: "Marcus Johnson",
      role: "Solutions Engineer",
      avatar: "/professional-headshot-2.png",
    },
  },
  {
    id: 3,
    title:
      "The 90-Second Rule: Why Real-Time Visibility Changes How Managers Decide",
    excerpt:
      "Daily reports are a postmortem. Here's what changes for multi-location teams once sales data updates in real time instead of overnight.",
    category: "Real-Time Data",
    date: "June 3, 2026",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    author: {
      name: "Sophia Lee",
      role: "Customer Success Lead",
      avatar: "/professional-headshot-3.png",
    },
  },
];

const trendingPosts: BlogPost[] = [
  {
    id: 4,
    title: "What 500+ Restaurant Locations Taught Us About Slow Tuesdays",
    excerpt:
      "We aggregated anonymized sales data across hundreds of locations to find out which days actually underperform, and why.",
    category: "Benchmarks",
    date: "May 27, 2026",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: {
      name: "Daniel Rivera",
      role: "Data Analyst",
      avatar: "/professional-headshot-4.png",
    },
  },
  {
    id: 5,
    title: "A Multi-Location Manager's Guide to Closing the Books Faster",
    excerpt:
      "Reconciling sales across ten different POS exports used to take a full day. Here's the workflow that gets it down to twenty minutes.",
    category: "Playbooks",
    date: "May 19, 2026",
    readTime: "10 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    author: {
      name: "Olivia Taylor",
      role: "Ops Strategist",
      avatar: "/professional-headshot-5.png",
    },
  },
  {
    id: 6,
    title:
      "Inside CoreAlign: Building a Single Source of Truth for 10+ POS Systems",
    excerpt:
      "A look at the architecture decisions behind aggregating sales, inventory, and labor data across every major point-of-sale platform.",
    category: "Product",
    date: "May 12, 2026",
    readTime: "12 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: {
      name: "James Wilson",
      role: "Engineering Lead",
      avatar: "/professional-headshot-1.png",
    },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

function BlogHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-150 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
          <span className="text-sm text-zinc-400">Trusted By 100+ Brands</span>
        </motion.div>

        {/* Headline with text mask animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Expert insights.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-zinc-500"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              One destination.
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The modern platform for small businesses who grow fast. Built for
          scale, designed for speed. Your whole operation, visible in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#articles">
            <Button
              size="lg"
              className="shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-white/10"
            >
              View Blog
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Header */}
      {/* <section className="relative overflow-hidden px-4 pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2"
          >
            <span className="pulse-glow h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-zinc-400">
              Trusted By 100+ Brands
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
          >
            The CoreAlign Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed text-zinc-400"
          >
            Field notes on POS data, multi-location operations, and building one
            source of truth for every register you run.
          </motion.p>
        </div>
      </section> */}

      <BlogHero />

      {/* Content */}
      <section id="articles" className="py-24 px-4">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* Featured Article */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-950">
                  Featured
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="mb-3 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {featuredPost.title}
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-zinc-400">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="h-11 w-11 rounded-full border border-zinc-800 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <CalendarIcon className="h-3 w-3" />
                  <span>{featuredPost.date}</span>
                  <span>&middot;</span>
                  <Clock3Icon className="h-3 w-3" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <Button
                size="lg"
                className="shimmer-btn rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200"
                asChild
              >
                <a href="#">
                  Read full article
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Editor's Picks Section */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <h3 className="text-xl font-semibold text-white">
                Editor&apos;s Picks
              </h3>
              <div className="h-px grow bg-zinc-800" />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {editorsPicks.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors duration-300 hover:border-zinc-600"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 p-6">
                    <h4 className="line-clamp-2 text-lg font-semibold text-white">
                      {post.title}
                    </h4>
                    <p className="line-clamp-2 text-sm text-zinc-400">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-7 w-7 rounded-full border border-zinc-800 object-cover"
                        />
                        <span className="text-xs font-medium text-zinc-300">
                          {post.author.name}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        Read
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Trending Section */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <h3 className="text-xl font-semibold text-white">Trending Now</h3>
              <div className="h-px grow bg-zinc-800" />
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trendingPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors duration-300 hover:border-zinc-600"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex grow flex-col p-5">
                    <span className="mb-3 inline-block w-fit rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
                      {post.category}
                    </span>
                    <h4 className="mb-2 line-clamp-2 font-semibold text-white">
                      {post.title}
                    </h4>
                    <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-xs text-zinc-500">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <Clock3Icon className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-zinc-800 bg-transparent text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
            asChild
          >
            <a href="#">
              View all articles
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
