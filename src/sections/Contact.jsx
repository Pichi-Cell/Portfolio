import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ email, ui }) => {
    return (
        <footer id="contact" className="scroll-mt-28 px-5 py-24 md:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl border-t border-[#5D4037]/25 pt-12">
                <div className="grid gap-10 md:grid-cols-[0.78fr_1fr] md:items-end">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#5D4037]">Contact</p>
                        <h2 className="font-serif text-5xl font-medium leading-none tracking-[-0.04em] text-[#3E2723] md:text-7xl">
                            {ui.heading}
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-8 text-[#5D4037]">
                            {ui.subtitle}
                        </p>
                    </div>

                    <a
                        href={`mailto:${email}`}
                        className="group inline-flex items-center gap-4 justify-self-start font-serif text-4xl font-medium tracking-[-0.04em] text-[#3E2723] decoration-[#5D4037]/30 decoration-1 underline-offset-8 hover:underline md:justify-self-end md:text-6xl"
                    >
                        <Mail className="h-8 w-8 shrink-0 text-[#5D4037] transition group-hover:-translate-y-1" strokeWidth={1.5} />
                        {email}
                    </a>
                </div>

                <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#5D4037]/20 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8D6E63] sm:flex-row">
                    <span>Lucas Picchi</span>
                    <span>{email}</span>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
