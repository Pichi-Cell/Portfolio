import React from 'react';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import SkillsMatrix from './sections/SkillsMatrix';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import ScrollNavbar from './components/layout/ScrollNavbar';
import content from './data/content.json';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent text-[#3E2723]">
            <ScrollNavbar ui={t.ui} />

            <main>
                <Hero
                    data={t.profile}
                    resumeUrl={t.profile.resumeUrl}
                    ui={{ ...t.ui.hero, cvButton: t.ui.about.cvButton }}
                />
                <SkillsMatrix skills={t.skills} ui={t.ui.skills} />
                <Experience experience={t.experience} ui={t.ui.experience} />
                <Portfolio projects={t.projects} ui={t.ui.portfolio} />
                <Contact email={t.profile.email} ui={t.ui.contact} />
            </main>
        </div>
    );
};

const App = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};

export default App;
