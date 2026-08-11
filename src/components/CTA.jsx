import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

const CTA = ({ onOpenBooking }) => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Glassmorphism Spheres */}
          <div className={styles.sphere1} aria-hidden="true" />
          <div className={styles.sphere2} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.tag}>
              <Sparkles size={15} aria-hidden="true" />
              <span>TRANSFORM YOUR HEALTHCARE</span>
            </div>

            <h2 id="cta-heading" className={styles.headline}>
              Bring your customer services the next level of excellence.
            </h2>

            <p className={styles.subtext}>
              Join thousands of satisfied patients and healthcare providers enjoying seamless digital consultations, automated symptom triage, and immediate care access.
            </p>

            <div className={styles.actions}>
              <button className={styles.ctaBtn} onClick={() => onOpenBooking()}>
                <span>Get Started Now</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
