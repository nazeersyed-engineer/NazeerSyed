import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { personal } from '../../data/resume';

const BASE = import.meta.env.BASE_URL;

// Dot-grid SVG background pattern
function DotGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#38bdf8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      aria-label="Hero section"
    >
      <DotGrid />

      {/* Accent gradient blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-8"
        >
          <span
            className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
            aria-hidden="true"
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4"
        >
          Nazeer <span className="text-accent">Syed</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="font-mono text-slate-400 text-base sm:text-lg mb-6 tracking-wide"
        >
          <span className="text-accent">&gt;</span> Software Engineer &amp; Data
          Analyst
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building data-driven dashboards and cloud-integrated applications.
          Turning complex datasets into clear, actionable insights with{' '}
          <span className="text-slate-200">Power BI</span>,{' '}
          <span className="text-slate-200">AWS</span>, and{' '}
          <span className="text-slate-200">modern web tech</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="btn-primary text-sm"
            aria-label="View my projects"
          >
            View Projects
            <FiArrowDown size={16} aria-hidden="true" />
          </button>

          <a
            href={`${BASE}${personal.resumePdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
            aria-label="Download resume PDF"
          >
            <FiDownload size={16} aria-hidden="true" />
            Download Resume
          </a>

          <button
            onClick={scrollToContact}
            className="btn-outline text-sm"
            aria-label="Go to contact section"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors group text-sm"
            aria-label="Visit GitHub profile"
          >
            <FiGithub
              size={20}
              className="group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <div className="w-px h-5 bg-surface-border" aria-hidden="true" />
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors group text-sm"
            aria-label="Visit LinkedIn profile"
          >
            <FiLinkedin
              size={20}
              className="group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
