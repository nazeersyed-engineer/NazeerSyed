import { motion } from 'framer-motion';
import { skills } from '../../data/resume';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 bg-surface-card/30 border-y border-surface-border"
      aria-label="Skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subheading">What I Work With</p>
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm">
            Technologies and tools I use daily — organized by domain.
          </p>
        </motion.div>

        {/* Skill category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill) => (
            <motion.article
              key={skill.category}
              variants={cardVariants}
              className="card group hover:shadow-lg hover:shadow-accent/5"
              aria-labelledby={`skill-${skill.category.replace(/\s+/g, '-')}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-2xl"
                  role="img"
                  aria-label={skill.category}
                >
                  {skill.icon}
                </span>
                <h3
                  id={`skill-${skill.category.replace(/\s+/g, '-')}`}
                  className="text-sm font-semibold text-slate-200 group-hover:text-accent transition-colors"
                >
                  {skill.category}
                </h3>
              </div>

              {/* Tech chips */}
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={`${skill.category} technologies`}
              >
                {skill.items.map((item) => (
                  <span key={item} className="tag" role="listitem">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
