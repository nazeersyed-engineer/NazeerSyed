import { motion } from 'framer-motion';
import { FiBook, FiCalendar } from 'react-icons/fi';
import { education } from '../../data/resume';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6"
      aria-label="Education"
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
          <p className="section-subheading">Academic Background</p>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        {/* Column grid — same pattern as Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {education.map((edu, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="card group hover:shadow-lg hover:shadow-accent/5 flex flex-col"
              aria-labelledby={`edu-${idx}`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                aria-hidden="true"
              >
                <FiBook className="text-accent" size={18} />
              </div>

              {/* Institution */}
              <h3
                id={`edu-${idx}`}
                className="text-white font-bold text-base group-hover:text-accent transition-colors leading-snug"
              >
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="text-slate-400 text-sm mt-1.5 leading-snug">
                {edu.degree}
              </p>

              {/* Period */}
              {edu.period && (
                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mt-3">
                  <FiCalendar size={11} aria-hidden="true" />
                  {edu.period}
                </div>
              )}

              {/* Grade */}
              {edu.grade && (
                <div className="mt-auto pt-4">
                  <span className="tag text-xs">{edu.grade}</span>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
