import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = ({ data, resumeUrl, ui }) => {
  return (
    <section className="relative isolate min-h-[92svh] px-6 pb-24 pt-28 sm:pt-32 md:min-h-screen md:px-8 md:pb-24 lg:pt-40">
      <img
        src="/flower.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-2 top-auto z-0 block w-[21rem] rotate-[-40deg] scale-x-[-1] opacity-[0.18] mix-blend-multiply sepia saturate-[0.78] contrast-[1.04] sm:-right-28 sm:w-[24rem] sm:opacity-[0.14] md:bottom-auto md:right-4 md:top-1 md:w-[32rem] md:opacity-[0.18] xl:right-24 xl:w-[38rem]"
      />
      <div className="absolute left-0 top-0 z-0 h-64 w-64 rounded-full bg-[#8D6E63]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="mb-5 max-w-[18rem] font-mono text-[10px] uppercase leading-5 tracking-[0.2em] text-[#5D4037] sm:max-w-none sm:text-xs sm:tracking-[0.34em]">
            <span>{data.title}</span>
            <span className="mx-2 opacity-60">|</span>
            <span>{data.email}</span>
          </p>

          <h1 className="max-w-5xl text-balance font-serif text-[3.25rem] font-medium leading-[0.88] tracking-[-0.055em] text-[#3E2723] sm:text-7xl sm:leading-[0.82] md:text-8xl lg:text-[10rem] lg:leading-[0.78] xl:text-[12rem]">
            {ui.greeting} <br className="sm:hidden" />
            {data.name}
          </h1>

          <div className="mt-8 max-w-3xl border-l border-[#5D4037]/25 pl-4 sm:mt-9 sm:pl-6">
            <p className="font-sans text-lg font-semibold tracking-[-0.02em] text-[#3E2723] sm:text-xl md:text-2xl">
              {data.title}
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#5D4037] sm:text-base sm:leading-8 md:text-lg">
              {data.bio}
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={resumeUrl}
              download
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-3 rounded-full border border-[#3E2723] bg-[#3E2723] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F4F1EA] transition hover:-translate-y-0.5 hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-[#8D6E63]/45 sm:w-fit sm:px-7 sm:text-xs sm:tracking-[0.22em]"
            >
              {ui.cvButton}
              <Download size={16} strokeWidth={1.8} />
            </a>

            <div className="flex flex-wrap gap-2">
              {data.interests.slice(0, 4).map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-[#5D4037]/20 bg-[#dac9ac]/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#5D4037] sm:text-[11px] sm:tracking-[0.12em]"
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
