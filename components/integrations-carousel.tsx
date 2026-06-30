"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Grid2X2Plus,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const integrations = [
  {
    name: "Qu",
    category: "POS & Payments",
    description:
      "Sync orders, tenders, and payments from Qu straight into one unified ledger, no manual exports.",
    logo: "/brands/qu-pos2.png",
    rating: 4.9,
    reviews: 1245,
    setupTime: "5 min",
    features: ["Order sync", "Tender mapping"],
    type: "Premium",
  },
  {
    name: "Toast",
    category: "POS & Payments",
    description:
      "Pull sales, items, and labor data from Toast in real time and line it up against every other register you run.",
    logo: "/brands/toast-pos.png",
    rating: 4.8,
    reviews: 987,
    setupTime: "2 min",
    features: ["Real-time sales", "Menu mapping", "Labor data"],
    type: "Essential",
  },
  {
    name: "Twilio",
    category: "Communication",
    description:
      "Send shift reminders, low-stock alerts, and customer notifications straight from your dashboard.",
    logo: "/brands/twilio.png",
    rating: 4.9,
    reviews: 2156,
    setupTime: "3 min",
    features: ["SMS alerts", "Shift reminders", "Customer notifications"],
    type: "Premium",
  },
  {
    name: "Par",
    category: "POS & Payments",
    description:
      "Bring Par Brink sales and inventory data into the same view as every other location on your account.",
    logo: "/brands/par-pos.png",
    rating: 4.7,
    reviews: 856,
    setupTime: "10 min",
    features: ["Multi-location sync", "Inventory feed", "Custom mapping"],
    type: "Enterprise",
  },
  {
    name: "Revel",
    category: "POS & Payments",
    description:
      "Connect Revel's sales and inventory data so every location reports through the same dashboard.",
    logo: "/brands/revel-pos.png",
    rating: 4.6,
    reviews: 743,
    setupTime: "7 min",
    features: ["Inventory sync", "Multi-register support"],
    type: "Premium",
  },
  {
    name: "n8n",
    category: "Automation",
    description:
      "Connect your apps and automate workflows around your sales data, no coding required.",
    logo: "/brands/n8n-icon.png",
    rating: 4.5,
    reviews: 654,
    setupTime: "5 min",
    features: ["5000+ app connections", "Multi-step workflows"],
    type: "Essential",
  },
];

const typeStyles: Record<string, string> = {
  Premium: "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  Enterprise:
    "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  Essential: "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export default function IntegrationsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateSelection();
    api.on("select", updateSelection);

    return () => {
      api.off("select", updateSelection);
    };
  }, [api]);

  return (
    <section id="integrations" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
            <Grid2X2Plus
              className="h-3.5 w-3.5 text-zinc-950 dark:text-zinc-400"
              // fill="currentColor"
              strokeWidth={2}
            />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Supported Systems
            </span>
          </div>
          <h2
            className="mb-4 text-3xl font-bold text-zinc-950 sm:text-4xl dark:text-white"
            style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
          >
            Connect every POS you operate
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
            One feed for every POS, payment processor, and tool in your stack.
            Build powerful workflows with our extensive integration library.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-6 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                Featured Integrations
              </h3>
              <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                {integrations.length} available
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Previous integration"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-950 disabled:opacity-30 disabled:hover:border-zinc-200 disabled:hover:text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white dark:disabled:hover:border-zinc-800 dark:disabled:hover:text-zinc-400"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Next integration"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-950 disabled:opacity-30 disabled:hover:border-zinc-200 disabled:hover:text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white dark:disabled:hover:border-zinc-800 dark:disabled:hover:text-zinc-400"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent>
              {integrations.map((integration) => (
                <CarouselItem
                  key={integration.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
                          <img
                            src={integration.logo}
                            alt={`${integration.name} logo`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-950 dark:text-white">
                            {integration.name}
                          </h4>
                          <p className="text-sm text-zinc-500">
                            {integration.category}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs ${
                          typeStyles[integration.type] ??
                          "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        }`}
                      >
                        {integration.type}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {integration.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {integration.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-medium text-zinc-950 dark:text-white">
                          {integration.rating}
                        </span>
                        <span className="text-zinc-500">
                          ({integration.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-500">
                        <Clock3 className="h-4 w-4" />
                        <span>{integration.setupTime} setup</span>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      >
                        <ShieldCheck className="mr-2 h-4 w-4" />
                        Connect securely
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-zinc-200 bg-transparent text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="shimmer-btn rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            asChild
          >
            <a href="/integrations">
              Browse all integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="mt-3 text-sm text-zinc-500">
            Can&apos;t find what you need?{" "}
            <a
              href="#"
              className="text-zinc-700 underline hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Request an integration
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
