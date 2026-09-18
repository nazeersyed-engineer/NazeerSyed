import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/resume';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 bg-surface-card/20 border-y border-surface-border"
      aria-label="Projects"
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
          <p className="section-subheading">What I've Built</p>
          <h2 className="section-heading">Projects</h2>
          <p className="text-slate-400 max-w-xl mt-3 text-sm">
            Data analytics dashboards and full-stack applications built with
            real-world datasets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Featured Project */}
          {featured && (
            <motion.article
              variants={cardVariants}
              className="mb-6 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 via-surface-card to-surface-card p-8 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 group"
              aria-labelledby="featured-project-title"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2 block">
                    ★ Featured Project
                  </span>
                  <h3
                    id="featured-project-title"
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors"
                  >
                    {featured.name}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label={`Live demo of ${featured.name}`}
                    >
                      <FiExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-accent transition-colors p-2 rounded-md hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={`GitHub repository for ${featured.name}`}
                  >
                    <FiGithub size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>

              <ul className="space-y-1.5 mb-6" aria-label="Project highlights">
                {featured.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                    <span
                      className="text-accent mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div
                className="flex flex-wrap gap-2 mb-6"
                aria-label="Technologies used"
              >
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light font-medium transition-colors group/link"
                aria-label={`View ${featured.name} on GitHub`}
              >
                <FiGithub size={15} aria-hidden="true" />
                View on GitHub
                <FiExternalLink
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </motion.article>
          )}

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((project) => (
              <motion.article
                key={project.name}
                variants={cardVariants}
                className="card group hover:shadow-lg hover:shadow-accent/5 flex flex-col"
                aria-labelledby={`project-${project.name.replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    id={`project-${project.name.replace(/\s+/g, '-')}`}
                    className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug pr-4"
                  >
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-accent transition-colors p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label={`Live demo of ${project.name}`}
                      >
                        <FiExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-accent transition-colors p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label={`GitHub repository for ${project.name}`}
                    >
                      <FiGithub size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <ul
                  className="space-y-1.5 mb-5"
                  aria-label="Project highlights"
                >
                  {project.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-slate-500 text-xs"
                    >
                      <span
                        className="text-accent mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex flex-wrap gap-1.5 mt-auto"
                  aria-label="Technologies used"
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/nazeersyed-engineer/PowerBI-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline text-sm"
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={16} aria-hidden="true" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
