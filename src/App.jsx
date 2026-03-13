import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
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
        <div className="relative min-h-screen">
            {/* Aurora Background */}
            <div className="aurora-bg">
                <div className="aurora-blob blob-1"></div>
                <div className="aurora-blob blob-2"></div>
                <div className="aurora-blob blob-3"></div>
            </div>

            <ScrollNavbar ui={t.ui} />

            <main>
                <Hero data={t.profile} ui={t.ui.hero} />
                <About data={t.about} resumeUrl={t.profile.resumeUrl} ui={t.ui.about} />
                <Portfolio projects={t.projects} ui={t.ui.portfolio} />
                <SkillsMatrix skills={t.skills} ui={t.ui.skills} />
                <Experience experience={t.experience} ui={t.ui.experience} />
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
