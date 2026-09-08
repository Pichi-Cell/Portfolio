import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ experience, ui }) => {
    return (
        <section id="experience" className="scroll-mt-28 px-5 py-24 md:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-end">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#5D4037]">The Liner Notes</p>
                        <h2 className="font-serif text-5xl font-medium leading-none tracking-[-0.04em] text-[#3E2723] md:text-7xl">
                            {ui.heading}
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[#5D4037] md:justify-self-end md:text-lg">
                        {ui.subtitle}
                    </p>
                </div>

                <div className="border-y border-[#5D4037]/25">
                    {experience.map((exp, index) => (
                        <motion.article
                            key={`${exp.company}-${exp.period}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-70px' }}
                            transition={{ duration: 0.48, delay: index * 0.04 }}
                            className="grid gap-6 border-b border-[#5D4037]/20 py-9 last:border-b-0 lg:grid-cols-[15rem_1fr]"
                        >
                            <div className="flex items-start gap-4 lg:block">
                                <span className="mt-1 block h-3 w-3 shrink-0 rounded-full border border-[#5D4037]/50 bg-[#A1887F]/25 shadow-[0_0_0_6px_rgba(93,64,55,0.06)]" />
                                <div>
                                    <p className="font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#5D4037]">
                                        {exp.period}
                                    </p>
                                    <p className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-[#8D6E63] lg:block">
                                        Ledger {(index + 1).toString().padStart(2, '0')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-8 xl:grid-cols-[0.7fr_1fr]">
                                <div>
                                    <h3 className="font-serif text-3xl font-medium leading-9 tracking-[-0.025em] text-[#3E2723] md:text-4xl">
                                        {exp.role}
                                    </h3>
                                    <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#5D4037]">
                                        {exp.company}
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet) => (
                                        <li key={bullet} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-[#5D4037] md:text-base">
                                            <span className="mt-3 block h-px w-3 bg-[#5D4037]/45" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
