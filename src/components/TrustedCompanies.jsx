import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, HeartPulse, Building2, Globe2, Stethoscope, Dna, Cross } from 'lucide-react';
import styles from './TrustedCompanies.module.css';

const companies = [
  { name: 'Pfizer Tech', icon: Cross, metric: '10k+ Clinics' },
  { name: 'HealthCare Inc', icon: HeartPulse, metric: 'Enterprise' },
  { name: 'MedLife Global', icon: Building2, metric: 'Global Partner' },
  { name: 'CarePlus Network', icon: ShieldCheck, metric: 'HIPAA Verified' },
  { name: 'Apex Health Systems', icon: Activity, metric: 'Tier 1 Hospital' },
  { name: 'BioCare Labs', icon: Dna, metric: 'Genomics' },
  { name: 'NovaMed Global', icon: Globe2, metric: 'International' },
  { name: 'Stethoscope Plus', icon: Stethoscope, metric: '500+ Doctors' },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.06, ease: 'easeOut' },
  }),
};

const TrustedCompanies = () => {
  return (
    <section className={styles.section} aria-labelledby="trusted-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="trusted-heading">Trusted by 100+ Global top company connect with us</h2>
          <p>
            Seamlessly integrating with global medical leaders, hospital networks, and health tech innovators.
          </p>
        </motion.div>

        <div className={styles.grid} role="list" aria-label="Trusted partner companies">
          {companies.map((c, index) => {
            const IconComponent = c.icon;
            return (
              <motion.div
                key={index}
                className={styles.pill}
                role="listitem"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={pillVariants}
              >
                <div className={styles.iconBox}>
                  <IconComponent size={18} color="#6E44FF" aria-hidden="true" />
                </div>
                <div>
                  <strong className={styles.name}>{c.name}</strong>
                  <span className={styles.metric}>{c.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
