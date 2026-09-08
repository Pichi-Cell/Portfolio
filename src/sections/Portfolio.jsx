import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import FloralIllustration from '../components/ui/FloralIllustration';

const Portfolio = ({ projects, ui }) => {
    return (
        <section id="portfolio" className="relative isolate scroll-mt-28 px-5 py-24 md:px-8 lg:py-32">
            <FloralIllustration className="pointer-events-none absolute right-[-7rem] top-1/3 z-0 hidden w-[24rem] rotate-6 text-[#5D4037] opacity-[0.12] mix-blend-multiply md:block" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-14 grid gap-6 border-y border-[#5D4037]/20 py-8 md:grid-cols-[0.9fr_1fr] md:items-end">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#5D4037]">The Specimens</p>
                        <h2 className="font-serif text-5xl font-medium leading-none tracking-[-0.04em] text-[#3E2723] md:text-7xl">
                            {ui.heading}
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[#5D4037] md:justify-self-end md:text-lg">
                        {ui.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative border border-[#5D4037]/25 bg-[#F9F8F6]/50 p-4 shadow-[0_24px_90px_rgba(62,39,35,0.07)] transition hover:-translate-y-1 hover:bg-[#F9F8F6]/80"
                        >
                            <div className="mb-4 flex items-center justify-between border-b border-[#5D4037]/20 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#8D6E63]">
                                <span>Specimen {(index + 1).toString().padStart(2, '0')}</span>
                                <span>{project.tags[0]}</span>
                            </div>

                            <div className="relative aspect-video overflow-hidden border border-[#5D4037]/20 bg-[#EDE7DC]">
                                <video
                                    src={project.video}
                                    className="h-full w-full object-cover opacity-90 mix-blend-multiply saturate-[0.82] transition duration-500 group-hover:scale-[1.025]"
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    preload="metadata"
                                />
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#3E2723]/10 opacity-100 transition group-hover:opacity-0">
                                    <div className="rounded-full border border-[#F4F1EA]/70 bg-[#3E2723]/70 p-4 text-[#F4F1EA] shadow-[0_12px_30px_rgba(62,39,35,0.18)]">
                                        <Play size={28} fill="currentColor" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:p-6">
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="border border-[#5D4037]/25 bg-[#F4F1EA]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5D4037]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-serif text-4xl font-medium leading-10 tracking-[-0.035em] text-[#3E2723]">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-base leading-8 text-[#5D4037]">
                                    {project.description}
                                </p>

                                {(project.links.github || project.links.live) && (
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center gap-2 border border-[#5D4037]/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#3E2723] transition hover:border-[#3E2723] hover:bg-[#E9E0D2]"
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
                                                className="inline-flex items-center justify-center gap-2 border border-[#3E2723] bg-[#3E2723] px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#F4F1EA] transition hover:bg-[#5D4037]"
                                            >
                                                <ExternalLink size={16} />
                                                {ui.demoButton}
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
