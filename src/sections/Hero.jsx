import React from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../components/webgl/HeroCanvas';
import Badge from '../components/ui/Badge';

const Hero = ({ data, ui }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
            {/* WebGL Background */}
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >


                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {ui.greeting} <span className="text-white">{data.name}</span>
                        <br />
                        <span className=" text-emerald-400  bg-clip-text">
                            {data.title}
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                        {data.bio}
                    </p>
                    <div className="flex flex-wrap gap-3">

                        {data.interests.map((interest, index) => (
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


                    <div className="flex flex-wrap gap-4">
                    </div>
                </motion.div>

                {/* This side is purposefully empty to showcase the WebGL object */}
                <div className="hidden lg:block h-[500px]" />
            </div>
        </section>
    );
};

export default Hero;
