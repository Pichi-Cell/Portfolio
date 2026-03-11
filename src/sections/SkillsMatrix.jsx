import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

const SkillsMatrix = ({ skills }) => {
    return (
        <section id="skills" className="py-24 px-4 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Core Competencies</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Domain-specific expertise acquired through over a decade of hands-on engineering and leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(skills).map(([domain, items], index) => (
                        <GlassCard key={domain} delay={index * 0.1}>
                            <h3 className="text-emerald-400 font-bold mb-6 tracking-wide uppercase text-sm border-b border-white/10 pb-2">
                                {domain}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
