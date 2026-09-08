import React from 'react';
import { motion } from 'framer-motion';
import FloralIllustration from '../components/ui/FloralIllustration';

const SkillsMatrix = ({ skills, ui }) => {
    const entries = Object.entries(skills);

    return (
        <section id="skills" className="relative isolate scroll-mt-28 px-5 py-24 md:px-8 lg:py-32">
            <FloralIllustration className="pointer-events-none absolute -left-36 top-24 z-0 w-[26rem] rotate-[-10deg] text-[#5D4037] opacity-[0.11] mix-blend-multiply" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-14 grid gap-6 border-y border-[#5D4037]/20 py-8 md:grid-cols-[0.7fr_1fr] md:items-end">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#5D4037]">The Index</p>
                        <h2 className="font-serif text-5xl font-medium leading-none tracking-[-0.04em] text-[#3E2723] md:text-7xl">
                            {ui.heading}
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[#5D4037] md:justify-self-end md:text-lg">
                        {ui.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 border-l border-t border-[#5D4037]/20 md:grid-cols-2 xl:grid-cols-3">
                    {entries.map(([domain, items], index) => (
                        <motion.article
                            key={domain}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.45, delay: index * 0.04 }}
                            className="min-h-80 border-b border-r border-[#5D4037]/20 bg-[#F9F8F6]/35 p-6 transition-colors hover:bg-[#F9F8F6]/70"
                        >
                            <div className="mb-8 flex items-start justify-between gap-4">
                                <h3 className="font-serif text-3xl font-medium leading-8 tracking-[-0.03em] text-[#3E2723]">
                                    {domain}
                                </h3>
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8D6E63]">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            <ol className="space-y-0 border-t border-[#5D4037]/15">
                                {items.map((skill, itemIndex) => (
                                    <li key={skill} className="grid grid-cols-[2.5rem_1fr] border-b border-[#5D4037]/15 py-3 font-mono text-xs uppercase leading-5 tracking-[0.08em] text-[#5D4037]">
                                        <span className="text-[#8D6E63]">{(itemIndex + 1).toString().padStart(2, '0')}</span>
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
