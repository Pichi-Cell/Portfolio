import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

const Experience = ({ experience, ui }) => {
    return (
        <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">{ui.heading}</h2>
                <p className="text-slate-400">{ui.subtitle}</p>
            </div>

            <div className="relative flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
                {experience.map((exp, index) => (
                    <div key={index} className="relative flex flex-col items-center min-w-[350px] snap-center group">
                        {/* Dot */}
                        {(index === 0) && <div className='before:absolute before:top-5 before:left-40 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-emerald-500 before:to-transparent'></div>}
                        {(index !== 0 && index !== experience.length - 1) && <div className='before:absolute before:top-5 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r from-transparent before:via-emerald-500/50 before:to-transparent'></div>}
                        {(index === experience.length - 1) && <div className='before:absolute before:top-5 before:left-0 before:right-40 before:h-0.5 before:bg-gradient-to-l before:from-emerald-500 before:to-transparent'></div>}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-slate-900 text-emerald-400 shadow shrink-0 z-10 mb-6 ">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        </div>

                        {/* Content */}
                        <div className="w-full">
                            <GlassCard className="p-6 h-full !bg-slate-900 !opacity-70">
                                <div className="flex flex-col gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-emerald-400 font-medium">{exp.company}</p>
                                    </div>
                                    <Badge className="w-fit">{exp.period}</Badge>
                                </div>
                                <ul className="space-y-3">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="text-slate-300 text-m flex gap-3">
                                            <span className="text-emerald-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
