import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from 'react-icons/fi';
import { personal } from '../../data/resume';
import { useActiveSection } from '../../hooks/useActiveSection';

interface NavbarProps {
  sections: string[];
}

const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar({ sections }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sections);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [activeSection]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-surface-border shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="font-mono font-bold text-lg text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
            aria-label="Go to top"
          >
            <span className="text-accent">N</span>S
            <span className="text-accent animate-blink">_</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                    activeSection === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-slate-400 hover:text-white hover:bg-surface-hover'
                  }`}
                  aria-current={
                    activeSection === link.href ? 'page' : undefined
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="GitHub profile"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Instagram profile"
            >
              <FiInstagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-accent transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={`absolute top-16 right-0 bottom-0 w-72 bg-surface border-l border-surface-border flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col p-6 gap-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                    activeSection === link.href
                      ? 'bg-accent/15 text-accent border border-accent/30'
                      : 'text-slate-300 hover:bg-surface-hover hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-6 border-t border-surface-border flex gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors text-sm"
              aria-label="GitHub profile"
            >
              <FiGithub size={18} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors text-sm"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={18} /> LinkedIn
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors text-sm"
              aria-label="Instagram profile"
            >
              <FiInstagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
