"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "./ui/marquee";

type BrandList = {
  image: string;
  lightimg: string;
  name: string;
};

export default function MarqueeBrands() {
  const brandList: BrandList[] = [
    {
      image: "brands-svg/jamba-logo.svg",
      lightimg: "brands-svg/jamba-logo-dark.svg",
      name: "Brand 1",
    },
    {
      image: "brands-svg/auntieannes-logo.svg",
      lightimg: "brands-svg/auntieannes-logo-dark.svg",
      name: "Brand 2",
    },
    {
      image: "brands-svg/cinnabon-logo.svg",
      lightimg: "brands-svg/cinnabon-logo.svg",
      name: "Brand 3",
    },
    {
      image: "brands-svg/carvel-logo.svg",
      lightimg: "brands-svg/carvel-logo.svg",
      name: "Brand 4",
    },
    {
      image: "brands-svg/mcalisters-logo.svg",
      lightimg: "brands-svg/mcalisters-logo.svg",
      name: "Brand 5",
    },
    {
      image: "brands-svg/moesgrill-logo.svg",
      lightimg: "brands-svg/moesgrill-logo-dark.svg",
      name: "Brand 6",
    },
    {
      image: "brands-svg/schlotzskys-logo.svg",
      lightimg: "brands-svg/schlotzskys-logo.svg",
      name: "Brand 7",
    },
    {
      image: "brands-svg/mod-logo.svg",
      lightimg: "brands-svg/mod-logo.svg",
      name: "Brand 8",
    },
    {
      image: "brands-svg/tacojohns-logo.svg",
      lightimg: "brands-svg/tacojohns-logo.svg",
      name: "Brand 9",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
          Trusted by industry leaders
        </p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <Marquee className="[--duration:20s] p-0" pauseOnHover>
          {brandList.map((brand, index) => (
            <div key={index}>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
              />
              <img
                src={brand.lightimg}
                alt={brand.name}
                className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
