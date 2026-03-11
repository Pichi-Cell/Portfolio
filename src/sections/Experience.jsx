import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Professional Timeline</h2>
                <p className="text-slate-400">Milestones of growth, leadership, and technical impact.</p>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/50 before:to-transparent">
                {experience.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/50 bg-slate-900 text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-1 mt-1">
                            <GlassCard className="p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-emerald-400 font-medium">{exp.company}</p>
                                    </div>
                                    <Badge className="w-fit">{exp.period}</Badge>
                                </div>
                                <ul className="space-y-3">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="text-slate-400 text-sm flex gap-3">
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
