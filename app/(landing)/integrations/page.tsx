"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

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

function IntegrationsHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-150 bg-zinc-300/30 dark:bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Integrations
          </span>
        </motion.div>

        {/* Headline with text mask animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6"
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
              Fully normalized.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-zinc-400 dark:text-zinc-500"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Completely automated.
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Each integration is purpose-built for that POS system&apos;s data
          model — not a generic connector. You get the right fields, the right
          labels, the right structure.
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
              className="shimmer-btn bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-zinc-950/10 dark:shadow-white/10"
            >
              See all integrations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <IntegrationsHero />
    </main>
  );
}
