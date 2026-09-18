import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { personal } from '../../data/resume';

const BASE = import.meta.env.BASE_URL;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6" aria-label="About me">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
        >
          {/* Photo column */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Accent border frame */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-accent/40 translate-x-3 translate-y-3"
                aria-hidden="true"
              />
              <img
                src={`${BASE}${personal.photo}`}
                alt="Nazeer Syed"
                className="relative z-10 w-56 sm:w-64 md:w-72 h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <div className="md:col-span-3">
            <motion.p variants={itemVariants} className="section-subheading">
              About Me
            </motion.p>
            <motion.h2 variants={itemVariants} className="section-heading">
              Who I Am
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-slate-400 leading-relaxed mt-6"
            >
              <p>
                I'm a{' '}
                <span className="text-slate-200 font-medium">
                  Software Engineer & Data Analyst
                </span>{' '}
                based in Tenali, Andhra Pradesh. I specialize in transforming
                raw data into interactive, decision-ready dashboards using Power
                BI, DAX, and Excel — and building cloud-integrated applications
                with AWS and modern web frameworks.
              </p>
              <p>
                At{' '}
                <span className="text-accent font-medium">
                  Streamforce Solutions
                </span>
                , I work on Berlitz's applications across full-stack and
                integration layers — shipping features with Salesforce, Next.js,
                GraphQL, and AWS Lambda.
              </p>
              <p>
                I approach every project with a focus on{' '}
                <span className="text-slate-200">clarity</span>,{' '}
                <span className="text-slate-200">performance</span>, and{' '}
                <span className="text-slate-200">user value</span> — whether
                that's a pixel-perfect dashboard or a robust serverless
                integration.
              </p>
            </motion.div>

            {/* Contact info chips */}
            <motion.ul
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
              aria-label="Contact details"
            >
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <FiMapPin
                  className="text-accent shrink-0"
                  size={15}
                  aria-hidden="true"
                />
                {personal.location}
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-accent text-sm transition-colors"
                  aria-label={`Email ${personal.email}`}
                >
                  <FiMail
                    className="text-accent shrink-0"
                    size={15}
                    aria-hidden="true"
                  />
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <FiPhone
                  className="text-accent shrink-0"
                  size={15}
                  aria-hidden="true"
                />
                {personal.phone}
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
