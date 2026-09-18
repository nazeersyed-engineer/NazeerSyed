import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { experience } from '../../data/resume';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6"
      aria-label="Work experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-subheading">Where I've Worked</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-surface-border hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative sm:pl-16"
                aria-labelledby={`exp-${idx}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full bg-accent border-4 border-surface hidden sm:block"
                  aria-hidden="true"
                />

                <div className="card hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Company */}
                      <div className="flex items-center gap-2 mb-1">
                        <FiBriefcase
                          className="text-accent"
                          size={15}
                          aria-hidden="true"
                        />
                        <h3
                          id={`exp-${idx}`}
                          className="text-lg font-bold text-white"
                        >
                          {job.company}
                        </h3>
                      </div>
                      {/* Role */}
                      <p className="text-accent font-semibold text-sm">
                        {job.role}
                      </p>
                      {/* Client */}
                      {job.client && (
                        <p className="text-slate-500 text-xs mt-0.5 font-mono">
                          Client:{' '}
                          <span className="text-slate-400">{job.client}</span>
                        </p>
                      )}
                    </div>
                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono bg-surface px-3 py-1.5 rounded-full border border-surface-border">
                      <FiCalendar size={12} aria-hidden="true" />
                      {job.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5" aria-label="Responsibilities">
                    {job.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span
                          className="text-accent mt-1 shrink-0"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div
                    className="flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.linkedin.com/in/nazeersyed-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-accent text-sm transition-colors"
            aria-label="View full profile on LinkedIn"
          >
            View full profile on LinkedIn{' '}
            <FiExternalLink size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
