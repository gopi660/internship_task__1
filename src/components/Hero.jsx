import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Video, PhoneCall, CheckCircle2, Calendar } from 'lucide-react';
import doctorImg from '../assets/doctor.webp';
import styles from './Hero.module.css';

const floatAnimation = {
  y: [0, -8, 0],
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
};

const Hero = ({ onOpenBooking, onCallClick }) => {
  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-heading">
      <div className="container">
        {/* Top Tag */}
        <motion.div
          className={styles.topTag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>24/7 Medical Services</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 id="hero-heading" className={styles.title}>
            Get Premium medical care for your best health
          </h1>
          <p className={styles.subtitle}>
            Find certified doctors and book video or clinic consultations online with ease. Effortless health scheduling tailored to you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Left Card */}
          <motion.div
            className={styles.leftCard}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className={styles.cardBadge}>
                <Calendar size={16} aria-hidden="true" />
                <span>Easy Booking</span>
              </div>

              <h2 className={styles.cardHeading}>Instant Video & In-Person Appointments</h2>
              <p className={styles.cardDesc}>
                Connect with leading specialists within minutes. Zero wait time and 100% HIPAA compliant data security.
              </p>
            </div>

            <div>
              <div className={styles.ctaWrap}>
                <button
                  className={`btn-primary ${styles.heroBtn}`}
                  onClick={() => onOpenBooking()}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Happy Customers */}
              <div className={styles.customersWidget}>
                <div className={styles.avatarGroup}>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Patient testimonial"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Patient testimonial"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Patient testimonial"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <div className={styles.avatarMore}>+12k</div>
                </div>
                <div>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FFB800" stroke="none" aria-hidden="true" />
                    ))}
                    <span className={styles.ratingScore}>4.9/5</span>
                  </div>
                  <p className={styles.customerText}>Happy Customers worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className={styles.rightCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.doctorWrapper}>
              <img
                src={doctorImg}
                alt="MediCare specialist doctor ready for consultation"
                className={styles.doctorImg}
                width="380"
                height="420"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />

              {/* Floating Badges */}
              <motion.div className={styles.doctorStatus} animate={floatAnimation}>
                <div className={styles.statusDot} aria-hidden="true" />
                <div className={styles.statusText}>
                  <strong>150+ Doctors</strong>
                  <span>Online Now</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.callWidget}
                animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
              >
                <div className={styles.callAvatar}>
                  <Video size={16} color="#6E44FF" aria-hidden="true" />
                </div>
                <div className={styles.callDetails}>
                  <strong>Dr. Miles S.</strong>
                  <span>Video Consult</span>
                </div>
                <button
                  className={styles.callActionBtn}
                  onClick={() => onCallClick('Dr. Miles S.')}
                  aria-label="Start video call with Dr. Miles S."
                >
                  <PhoneCall size={12} aria-hidden="true" />
                  <span>Call Doctor</span>
                </button>
              </motion.div>

              <motion.div
                className={styles.verifiedBadge}
                animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
              >
                <CheckCircle2 size={16} color="#059669" aria-hidden="true" />
                <span>Verified Doctor</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
