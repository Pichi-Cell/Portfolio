import React from "react";

const Experience = ({ experience, ui }) => {
  return (
    <section
      id="experience"
      className="cv-auto scroll-mt-24 px-6 py-12 md:scroll-mt-28 md:px-8 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid gap-5 border-t border-[#5D4037]/20 pt-5 sm:mb-6 sm:gap-6 sm:pt-6 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <h2 className="text-balance font-serif text-[2.75rem] font-medium leading-[0.95] tracking-[-0.04em] text-[#3E2723] sm:text-5xl md:text-7xl md:leading-none">
              {ui.heading}
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-8 text-[#5D4037] sm:text-base sm:leading-8 md:justify-self-end md:text-lg">
            {ui.subtitle}
          </p>
        </div>

        <div className="relative ml-1 border-l border-[#5D4037]/20 lg:ml-0 lg:border-l-0 lg:border-y lg:border-[#5D4037]/25">
          {experience.map((exp, index) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="relative grid gap-5 border-b border-[#5D4037]/20 py-6 pl-7 last:border-b-0 sm:gap-6 sm:py-7 lg:grid-cols-[15rem_1fr] lg:pl-0"
            >
              <div className="flex items-start gap-4 lg:block">
                <div>
                  <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.16em] text-[#5D4037] sm:text-xs sm:leading-6 sm:tracking-[0.18em]">
                    {exp.period}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:gap-8 xl:grid-cols-[0.7fr_1fr]">
                <div>
                  <h3 className="font-serif text-2xl font-medium leading-8 tracking-[-0.025em] text-[#3E2723] sm:text-3xl sm:leading-9 md:text-4xl">
                    {exp.role}
                  </h3>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#5D4037] sm:text-sm sm:tracking-[0.16em]">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="grid grid-cols-[0.8rem_1fr] gap-2 text-[14px] leading-8 text-[#5D4037] sm:grid-cols-[1rem_1fr] sm:gap-3 md:text-base"
                    >
                      <span className="mt-3 block h-px w-3 bg-[#5D4037]/45" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
