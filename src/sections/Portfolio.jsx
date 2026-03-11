import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Github, ExternalLink, Play } from 'lucide-react';

const Portfolio = ({ projects }) => {
    return (
        <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A selection of recent work focusing on production ready applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="group overflow-hidden p-0">
                        <div className="relative aspect-video overflow-hidden">
                            <video
                                src={project.video}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                muted
                                loop
                                onMouseEnter={(e) => e.target.play()}
                                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                            />
                            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                                <Play className="text-white fill-white opacity-50" size={48} />
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-slate-400 mb-6">{project.description}</p>

                            <div className="flex gap-4">
                                <a href={project.links.github} className="flex-1">
                                    <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                                        <Github size={18} /> GitHub
                                    </Button>
                                </a>
                                <a href={project.links.live} className="flex-1">
                                    <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                                        <ExternalLink size={18} /> Demo
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
