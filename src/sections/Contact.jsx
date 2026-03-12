import React from 'react';
import Button from '../components/ui/Button';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Contact = ({ email, ui }) => {
    return (
        <section id="contact" className="py-24 px-4 bg-emerald-500/5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">{ui.heading}</h2>
                <p className="text-slate-400 mb-10 text-lg">
                    {ui.subtitle}
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a href={`mailto:${email}`}>
                        <Button className="text-lg px-10 py-4 flex items-center gap-3">
                            <Mail size={20} />
                            {email}
                        </Button>
                    </a>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="p-3 glass glass-hover">
                            <Linkedin className="text-slate-300" />
                        </a>
                        <a href="#" className="p-3 glass glass-hover">
                            <Twitter className="text-slate-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
