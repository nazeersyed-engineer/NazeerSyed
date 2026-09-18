import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import { certifications } from '../../data/resume';

export default function Certifications() {
  return (
    <section
      className="py-16 px-4 sm:px-6 bg-surface-card/20 border-t border-surface-border"
      aria-label="Certifications"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-subheading">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card group hover:shadow-lg hover:shadow-accent/5"
              aria-labelledby={`cert-${idx}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
                  aria-hidden="true"
                >
                  <FiAward className="text-accent" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    id={`cert-${idx}`}
                    className="text-white font-semibold text-sm leading-snug group-hover:text-accent transition-colors"
                  >
                    {cert.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-slate-500 text-xs font-mono">
                    <FiCalendar size={11} aria-hidden="true" />
                    {cert.date}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-accent hover:text-accent-light transition-colors font-medium"
                    aria-label={`Verify ${cert.name} certificate`}
                  >
                    Verify Certificate
                    <FiExternalLink size={11} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
