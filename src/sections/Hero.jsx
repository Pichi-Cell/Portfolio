import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = ({ data, resumeUrl, ui }) => {
  return (
    <section className="relative isolate min-h-screen px-5 pb-24 pt-32 md:px-8 lg:pt-40">
      <img
        src="/flower.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1 z-0 hidden w-[32rem] rotate-[-40deg] scale-x-[-1] opacity-[0.18] mix-blend-multiply sepia saturate-[0.78] contrast-[1.04] md:block xl:right-24 xl:w-[38rem]"
      />
      <div className="absolute left-0 top-0 z-0 h-64 w-64 rounded-full bg-[#8D6E63]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-[#5D4037]">
            {data.title} | {data.email}
          </p>

          <h1 className="max-w-5xl font-serif text-[clamp(3.6rem,14vw,12rem)] font-medium leading-[0.78] tracking-[-0.055em] text-[#3E2723]">
            {ui.greeting} <br className="sm:hidden" />
            {data.name}
          </h1>

          <div className="mt-9 max-w-3xl border-l border-[#5D4037]/25 pl-6">
            <p className="font-sans text-xl font-medium tracking-[-0.02em] text-[#3E2723] md:text-2xl">
              {data.title}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5D4037] md:text-lg">
              {data.bio}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href={resumeUrl}
              download
              className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-[#3E2723] bg-[#3E2723] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#F4F1EA] transition hover:-translate-y-0.5 hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]/45"
            >
              {ui.cvButton}
              <Download size={16} strokeWidth={1.8} />
            </a>

            <div className="flex flex-wrap gap-2">
              {data.interests.slice(0, 4).map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-[#5D4037]/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#5D4037]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
