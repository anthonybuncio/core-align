"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Roadmap", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licenses", href: "#" },
  ],
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-zinc-200 dark:border-transparent">
                <Image src="/logo.png" alt="Logo" width={28} height={28} />
              </div>
              <span className="font-semibold text-zinc-950 dark:text-white">
                Core Align
              </span>
            </a>
            <p className="text-sm text-zinc-500 mb-4">
              The modern platform for teams who grow fast.
            </p>
            {/* System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className="text-xs text-zinc-600 dark:text-zinc-400">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Core Align, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
