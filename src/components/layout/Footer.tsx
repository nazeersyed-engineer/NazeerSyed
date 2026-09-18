import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { personal } from '../../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — Identity */}
        <div className="text-center sm:text-left">
          <p className="font-mono font-bold text-white text-lg">
            <span className="text-accent">N</span>azeer Syed
          </p>
          <p className="text-slate-400 text-sm mt-0.5">{personal.title}</p>
        </div>

        {/* Center — Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="GitHub profile"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Instagram profile"
          >
            <FiInstagram size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Send email"
          >
            <FiMail size={20} />
          </a>
        </div>

        {/* Right — Copyright */}
        <p className="text-slate-500 text-sm text-center sm:text-right">
          © {year} Nazeer Syed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
