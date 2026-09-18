import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiPhone,
  FiSend,
} from 'react-icons/fi';
import { personal } from '../../data/resume';

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    ariaLabel: `Send email to ${personal.email}`,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'nazeersyed-engineer',
    href: personal.github,
    ariaLabel: 'Visit GitHub profile',
    external: true,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'nazeersyed-engineer',
    href: personal.linkedin,
    ariaLabel: 'Visit LinkedIn profile',
    external: true,
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: 'iam_nazeersyed',
    href: personal.instagram,
    ariaLabel: 'Visit Instagram profile',
    external: true,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    ariaLabel: `Call ${personal.phone}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6" aria-label="Contact">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subheading">Let's Connect</p>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              I'm open to new opportunities, collaborations, and interesting
              projects. Reach out and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Primary Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary text-base px-8 py-3"
              aria-label={`Send email to ${personal.email}`}
            >
              <FiSend size={18} aria-hidden="true" />
              Say Hello
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 gap-4 text-left"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-surface-border bg-surface-card hover:border-accent/40 hover:bg-surface-hover transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={item.ariaLabel}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
                    aria-hidden="true"
                  >
                    <Icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-accent transition-colors mt-0.5 truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
