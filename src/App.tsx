import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

const NAV_SECTIONS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-200">
      <Navbar sections={NAV_SECTIONS} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
