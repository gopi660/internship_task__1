import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import styles from './LocationSection.module.css';

const services = [
  { title: 'Primary Healthcare Assessment', desc: 'Routine checkups & vitals tracking' },
  { title: 'Consultation with Top Doctors', desc: 'Board-certified specialists on call' },
  { title: 'Preventive Dental Triage', desc: 'Teeth cleaning & oral health' },
  { title: 'Mental Healthcare', desc: 'Licensed therapy & wellness counseling' },
  { title: '24/7 Live Doctor Support', desc: 'Immediate video response unit' },
  { title: 'Health Insurance Support', desc: 'Instant claim validation' },
];

const checkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const LocationSection = ({ onOpenBooking, onCallClick }) => {
  return (
    <section id="location" className={styles.section} aria-labelledby="location-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Map Column */}
          <motion.div
            className={styles.mapCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.mapHeader}>
              <div className={styles.mapBadge}>
                <MapPin size={14} color="#6E44FF" aria-hidden="true" />
                <span>CLINIC FINDER</span>
              </div>
              <span className={styles.liveStatus} aria-live="polite">● Live Wait Time: 4 mins</span>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                title="MediCare Central Clinic Map Location"
                src="https://maps.google.com/maps?q=40.748817,-73.985428&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <div className={styles.clinicOverlay}>
                <div className={styles.clinicHeader}>
                  <strong className={styles.clinicTitle}>MediCare Central Clinic</strong>
                  <span className={styles.openTag}>Open 24/7</span>
                </div>
                <p className={styles.clinicAddress}>123 Health Ave, Medical District, NY</p>
                <div className={styles.clinicActions}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Health+Ave,+Medical+District,+NY+10001"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.directionsBtn}
                    aria-label="Get directions to MediCare Central Clinic"
                  >
                    <Navigation size={13} aria-hidden="true" />
                    <span>Get Directions</span>
                  </a>
                  <button
                    className={styles.callClinicBtn}
                    onClick={() => onCallClick('MediCare Central Clinic')}
                    aria-label="Call MediCare Central Clinic"
                  >
                    <Phone size={13} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="tag-badge" style={{ marginBottom: '14px' }}>
              <Sparkles size={14} aria-hidden="true" />
              <span>SERVICES NETWORK</span>
            </div>

            <h2 id="location-heading" className={styles.servicesTitle}>Additional Medical Services</h2>
            <p className={styles.servicesSubtitle}>
              We offer comprehensive specialized care, wellness monitoring, and remote health consultations tailored for your lifestyle.
            </p>

            <div className={styles.checklist} role="list" aria-label="Available medical services">
              {services.map((s, index) => (
                <motion.div
                  key={index}
                  className={styles.checkItem}
                  role="listitem"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={checkVariants}
                >
                  <div className={styles.checkIcon}>
                    <CheckCircle2 size={16} color="#6E44FF" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className={styles.itemTitle}>{s.title}</strong>
                    <span className={styles.itemDesc}>{s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => onOpenBooking()}>
              <span>Explore All Services</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
