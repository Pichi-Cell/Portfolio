import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import FloralIllustration from "../components/ui/FloralIllustration";
import LazyVideo from "../components/ui/LazyVideo";

const Portfolio = ({ projects, ui }) => {
  return (
    <section
      id="portfolio"
      className="relative isolate scroll-mt-24 px-6 py-12 md:scroll-mt-28 md:px-8 md:py-16 lg:py-20"
    >
      <FloralIllustration className="pointer-events-none absolute right-[-8rem] bottom-0 top-auto z-0 w-[15rem] rotate-6 text-[#5D4037] opacity-[0.045] mix-blend-multiply sm:right-[-9rem] sm:w-[19rem] md:right-[-7rem] md:bottom-auto md:top-1/3 md:w-[24rem] md:opacity-[0.12]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 grid gap-5 border-y border-[#5D4037]/20 py-5 sm:mb-8 sm:gap-6 sm:py-6 md:grid-cols-[0.9fr_1fr] md:items-end">
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative border border-[#5D4037]/25 bg-[#F9F8F6]/50 p-3 shadow-[0_24px_90px_rgba(62,39,35,0.07)] transition hover:-translate-y-1 hover:bg-[#F9F8F6]/80 sm:p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#5D4037]/20 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8D6E63] sm:mb-4 sm:text-[10px] sm:tracking-[0.22em]">
                <span>Specimen {(index + 1).toString().padStart(2, "0")}</span>
                <span>{project.tags[0]}</span>
              </div>

              {project.video ? (
                <div className="relative aspect-video overflow-hidden border border-[#5D4037]/20 bg-[#EDE7DC]">
                  <LazyVideo
                    src={project.video}
                    className="h-full w-full object-cover opacity-90 mix-blend-multiply saturate-[0.82] transition duration-500 group-hover:scale-[1.025]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#3E2723]/10 opacity-100 transition group-hover:opacity-0">
                    <div className="rounded-full border border-[#F4F1EA]/70 bg-[#3E2723]/70 p-4 text-[#F4F1EA] shadow-[0_12px_30px_rgba(62,39,35,0.18)]">
                      <Play size={28} fill="currentColor" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ) : project.image ? (
                <div className="relative aspect-video overflow-hidden border border-[#5D4037]/20 bg-[#EDE7DC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 mix-blend-multiply saturate-[0.82] transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center border border-[#5D4037]/20 bg-[#EDE7DC] p-6 text-center font-mono text-[10px] uppercase leading-5 tracking-[0.18em] text-[#5D4037]/75">
                  DMD Compresores / Lanús, PBA
                </div>
              )}

              <div className="p-3 sm:p-4 md:p-6">
                <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#5D4037]/25 bg-[#F4F1EA]/70 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#5D4037] sm:px-3 sm:text-[10px] sm:tracking-[0.16em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-3xl font-medium leading-9 tracking-[-0.035em] text-[#3E2723] sm:text-4xl sm:leading-10">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-8 text-[#5D4037] sm:mt-4 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                {(project.links.github || project.links.live) && (
                  <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-[#5D4037]/25 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#3E2723] transition hover:border-[#3E2723] hover:bg-[#E9E0D2] sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.18em]"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-[#3E2723] bg-[#3E2723] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F1EA] transition hover:bg-[#5D4037] sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.18em]"
                      >
                        <ExternalLink size={16} />
                        {ui.demoButton}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
