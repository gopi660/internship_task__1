import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, LayoutDashboard, FileText, Truck, ArrowRight, Check, Sparkles } from 'lucide-react';
import feature1Img from '../assets/feature-1.png';
import feature2Img from '../assets/feature-2.png';
import styles from './Features.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Features = ({ onOpenBooking }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'doctor', text: 'Hello Sarah! Your latest health assessment looks great.', time: '10:14 AM' },
    { id: 2, sender: 'user', text: 'Thank you Dr. Thomas! Can I get my prescription refilled?', time: '10:16 AM' },
    { id: 3, sender: 'doctor', text: 'Approved! I have sent the e-prescription to your pharmacy.', time: '10:17 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'user', text: chatMessage, time: 'Just now' }]);
    setChatMessage('');
  };

  return (
    <section id="features" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            <Sparkles size={15} aria-hidden="true" />
            <span>FEATURES</span>
          </div>
          <h2 id="features-heading">Discover Our Benefits & Features</h2>
          <p>
            Experience next-generation digital healthcare powered by expert medical networks, real-time patient monitoring, and smart clinical tools.
          </p>
        </motion.div>

        {/* Top Feature Grid */}
        <div className={styles.topGrid}>
          {/* Card 1: Mobile Health Apps */}
          <motion.div
            className={styles.card}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div>
              <div className={styles.iconPink}>
                <Smartphone size={20} color="#E63956" aria-hidden="true" />
              </div>
              <h3 className={styles.featureTitle}>
                Mobile Health Apps: Tools for patients to track symptoms, medications
              </h3>
              <p className={styles.featureDesc}>
                Log daily health metrics, set automated pill alerts, and track symptom trends with intuitive mobile dashboards.
              </p>
            </div>
            <div className={styles.imgBox}>
              <img
                src={feature1Img}
                alt="Mobile Health App interface showing patient health tracking dashboard"
                className={styles.featureImg}
                loading="lazy"
                width="500"
                height="220"
              />
            </div>
          </motion.div>

          {/* Card 2: Secure Messaging */}
          <motion.div
            className={styles.card}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div>
              <div className={styles.iconBlue}>
                <Shield size={20} color="#2563EB" aria-hidden="true" />
              </div>
              <h3 className={styles.featureTitle}>
                Secure Messaging Systems: HIPAA-compliant platforms
              </h3>
              <p className={styles.featureDesc}>
                Direct end-to-end encrypted chat with your personal healthcare team, lab specialists, and prescription advisors.
              </p>
            </div>

            {/* Chat Preview */}
            <div className={styles.chatBox} role="region" aria-label="Chat preview demo">
              <div className={styles.chatHeader}>
                <div className={styles.chatDocInfo}>
                  <div className={styles.docAvatar} aria-hidden="true">DT</div>
                  <div>
                    <span className={styles.docName}>Dr. Thomas H.</span>
                    <span className={styles.docStatus}>● Online</span>
                  </div>
                </div>
                <div className={styles.hipaaBadge}>
                  <Check size={12} aria-hidden="true" /> HIPAA Secure
                </div>
              </div>

              <div className={styles.chatBody} aria-live="polite">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={m.sender === 'doctor' ? styles.bubbleDoctor : styles.bubbleUser}
                  >
                    <p>{m.text}</p>
                    <span className={styles.chatTime}>{m.time}</span>
                  </div>
                ))}
              </div>

              <form className={styles.chatInputRow} onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Type a secure message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className={styles.chatInput}
                  aria-label="Type a message"
                />
                <button type="submit" className={styles.sendBtn}>
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Wide Dashboard Card */}
        <motion.div
          className={styles.wideCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.wideCardGrid}>
            <div>
              <div className={styles.iconGreen}>
                <LayoutDashboard size={20} color="#059669" aria-hidden="true" />
              </div>
              <h3 className={styles.featureTitle}>
                Personalized Team Dashboard & Appointment Booking System
              </h3>
              <p className={styles.featureDesc}>
                Manage your family's healthcare journey in one place. Schedule specialist appointments, access electronic health records, and review telemetry analytics.
              </p>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <Check size={15} color="#059669" aria-hidden="true" /> Real-time Lab Telemetry
                </div>
                <div className={styles.checkItem}>
                  <Check size={15} color="#059669" aria-hidden="true" /> Automated Appointment Sync
                </div>
                <div className={styles.checkItem}>
                  <Check size={15} color="#059669" aria-hidden="true" /> Multi-member Family Profiles
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={() => onOpenBooking()}
                style={{ marginTop: '22px' }}
              >
                <span>Try Dashboard Demo</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>

            <div>
              <img
                src={feature2Img}
                alt="Healthcare dashboard showing appointment scheduling and analytics"
                className={styles.dashboardImg}
                loading="lazy"
                width="560"
                height="280"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Grid */}
        <div className={styles.bottomGrid}>
          <motion.div
            className={styles.miniCard}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className={styles.miniIconBox}>
              <FileText size={20} color="#6E44FF" aria-hidden="true" />
            </div>
            <h4>Online prescription services</h4>
            <p className={styles.featureDesc}>Fast, accurate digital ordering with instant insurance validation.</p>
            <div className={styles.rxPill}>
              <span>Rx #84920-A</span>
              <strong className={styles.activeStatus}>Refilled</strong>
            </div>
          </motion.div>

          <motion.div
            className={styles.miniCard}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className={styles.miniIconBox}>
              <Truck size={20} color="#2563EB" aria-hidden="true" />
            </div>
            <h4>Online global medicine delivery</h4>
            <p className={styles.featureDesc}>Temperature-controlled delivery to your doorstep from top certified labs worldwide.</p>
            <div className={styles.flagsRow}>
              <span className={styles.flagChip}>🇺🇸 USA</span>
              <span className={styles.flagChip}>🇬🇧 UK</span>
              <span className={styles.flagChip}>🇨🇦 CAN</span>
              <span className={styles.flagChip}>🇩🇪 GER</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaPurple}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            onClick={() => onOpenBooking()}
            role="button"
            tabIndex={0}
            aria-label="Explore more amazing services"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenBooking(); }}
          >
            <div>
              <span className={styles.purpleTag}>EXCLUSIVES</span>
              <h3>Explore our more amazing services</h3>
              <p>Discover personalized wellness plans, genetic health reports, and 24/7 triage.</p>
            </div>
            <div className={styles.purpleBtn}>
              <span>Discover More</span>
              <div className={styles.arrowCircle}>
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
