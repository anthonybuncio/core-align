"use client";

import DashboardCard from "@/components/dashboard-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function DashboardShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Subtle radial glow behind the mockup, matches Hero's treatment */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
          >
            One dashboard, every brand
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Revenue, transactions, and store status from every POS — synced live
            and laid out so your whole team reads from the same numbers.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <DashboardCard large />
        </motion.div>
      </div>
    </section>
  );
}
