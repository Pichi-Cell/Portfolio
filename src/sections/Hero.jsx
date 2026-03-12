import React from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../components/webgl/HeroCanvas';
import Button from '../components/ui/Button';
import { ChevronRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
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
                        I'm <span className="text-white">{data.name}</span>
                        <br />
                        <span className=" text-emerald-400  bg-clip-text">
                            {data.title}
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                        {data.bio}
                    </p>

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
