import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import SkillsMatrix from './sections/SkillsMatrix';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import ScrollNavbar from './components/layout/ScrollNavbar';
import content from './data/content.json';

const App = () => {
    return (
        <div className="relative min-h-screen">
            {/* Aurora Background */}
            <div className="aurora-bg">
                <div className="aurora-blob blob-1"></div>
                <div className="aurora-blob blob-2"></div>
                <div className="aurora-blob blob-3"></div>
            </div>

            <ScrollNavbar />

            <main>
                <Hero data={content.profile} />
                <About data={content.about} resumeUrl={content.profile.resumeUrl} />
                <Portfolio projects={content.projects} />
                <SkillsMatrix skills={content.skills} />
                <Experience experience={content.experience} />
                <Contact />
            </main>

        </div>
    );
};

export default App;
