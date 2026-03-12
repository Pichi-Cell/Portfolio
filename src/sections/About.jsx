import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Download, FileText } from 'lucide-react';

const About = ({ data, resumeUrl }) => {
    if (!data) return null;

    const { description, stats, interests } = data;

    return (
        <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        About <span className="text-emerald-500">Me</span>
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Badge variant="outline" className="text-sm py-1.5 px-4 border-emerald-500/30 text-emerald-400">
                                    {interest}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats & Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 grid grid-cols-1 gap-6"
                >
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <GlassCard key={index} className="p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/50 transition-colors">
                                <motion.span
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    className="text-3xl font-bold text-emerald-500 mb-1"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                                    {stat.label}
                                </span>
                            </GlassCard>
                        ))}
                    </div>

                    <GlassCard className="p-8 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col items-start gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
                                    <p className="text-slate-400 text-sm">Download my full professional history</p>
                                </div>
                            </div>

                            <a
                                href={resumeUrl}
                                download
                                className="w-full"
                            >
                                <Button className="w-full flex items-center justify-center gap-2 group/btn">
                                    Download Resume
                                    <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                                </Button>
                            </a>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
