import React from "react";
import { motion } from "framer-motion";
import FloralIllustration from "../components/ui/FloralIllustration";

const SkillsMatrix = ({ skills, ui }) => {
  const entries = Object.entries(skills);

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 px-6 py-20 md:scroll-mt-28 md:px-8 lg:py-32"
    >
      <FloralIllustration className="pointer-events-none absolute -left-36 bottom-0 top-auto z-0 w-[16rem] rotate-[-10deg] text-[#5D4037] opacity-[0.045] mix-blend-multiply sm:-left-44 sm:w-[20rem] md:-left-40 md:bottom-auto md:top-20 md:w-[26rem] md:opacity-[0.11]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 border-y border-[#5D4037]/20 py-6 sm:mb-12 sm:gap-6 sm:py-8 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#5D4037] sm:text-xs sm:tracking-[0.28em]"></p>
            <h2 className="text-balance font-serif text-[2.75rem] font-medium leading-[0.95] tracking-[-0.04em] text-[#3E2723] sm:text-5xl md:text-7xl md:leading-none">
              {ui.heading}
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-8 text-[#5D4037] sm:text-base sm:leading-8 md:justify-self-end md:text-lg">
            {ui.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-[#5D4037]/20 sm:grid-cols-2 xl:grid-cols-3">
          {entries.map(([domain, items], index) => (
            <motion.article
              key={domain}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="min-h-0 border-b border-r border-[#5D4037]/20 bg-[#F9F8F6]/35 p-5 transition-colors hover:bg-[#F9F8F6]/70 sm:p-6 lg:min-h-80"
            >
              <div className="mb-5 flex items-start justify-between gap-4 sm:mb-8">
                <h3 className="font-serif text-2xl font-medium leading-7 tracking-[-0.03em] text-[#3E2723] sm:text-3xl sm:leading-8">
                  {domain}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8D6E63]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <ol className="space-y-0 border-t border-[#5D4037]/15">
                {items.map((skill, itemIndex) => (
                  <li
                    key={skill}
                    className="grid grid-cols-[2rem_1fr] border-b border-[#5D4037]/15 py-2.5 font-mono text-[11px] uppercase leading-5 tracking-[0.06em] text-[#5D4037] sm:grid-cols-[2.5rem_1fr] sm:py-3 sm:text-xs sm:tracking-[0.08em]"
                  >
                    <span className="text-[#8D6E63]">
                      {(itemIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
