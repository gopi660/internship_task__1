import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.svg';
import styles from './Footer.module.css';

const Footer = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className={styles.wrapper} role="contentinfo">
      {/* Connect Banner */}
      <div className="container">
        <motion.div
          className={styles.connectBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2>Let's Connect with us</h2>
            <p>Have questions or need immediate consultation support? Our triage team is available 24/7.</p>
          </div>
          <div className={styles.btnGroup}>
            <button className="btn-primary" onClick={() => onOpenBooking()}>
              <span>Get Started</span>
            </button>
            <a href="mailto:support@medicare.com" className={styles.darkBtn}>
              <span>Contact Us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Dark Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand & Newsletter */}
            <div className={styles.brandCol}>
              <div>
                <img src={logo} alt="MediCare" className={styles.brandLogo} />
              </div>
              <p className={styles.brandBio}>
                Empowering individuals with instant, secure, and world-class digital medical care and telehealth solutions.
              </p>

              <div className={styles.newsletter}>
                <label htmlFor="newsletter-email" className={styles.newsletterLabel}>
                  Subscribe for health updates
                </label>
                {subscribed ? (
                  <div className={styles.subscribeSuccess} role="status">
                    <CheckCircle2 size={16} color="#10B981" aria-hidden="true" />
                    <span>Thanks for subscribing! Check your inbox.</span>
                  </div>
                ) : (
                  <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                    <div className={styles.inputGroup}>
                      <Mail size={16} className={styles.mailIcon} aria-hidden="true" />
                      <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.emailInput}
                        aria-label="Email address for newsletter"
                      />
                    </div>
                    <button type="submit" className={styles.subscribeBtn}>
                      <span>Subscribe</span>
                      <Send size={13} aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Products */}
            <nav className={styles.linksCol} aria-label="Products">
              <h4>Products</h4>
              <ul>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Telehealth Apps</a></li>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>E-Prescription</a></li>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Lab Telemetry</a></li>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Patient Dashboard</a></li>
                <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>HIPAA Encryption</a></li>
              </ul>
            </nav>

            {/* Company */}
            <nav className={styles.linksCol} aria-label="Company">
              <h4>Company</h4>
              <ul>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>About MediCare</a></li>
                <li><a href="#consultants" onClick={(e) => scrollToSection(e, 'consultants')}>Doctor Network</a></li>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Careers</a></li>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Press & Media</a></li>
                <li><a href="#location" onClick={(e) => scrollToSection(e, 'location')}>Clinic Locations</a></li>
              </ul>
            </nav>

            {/* Services */}
            <nav className={styles.linksCol} aria-label="Services">
              <h4>Services</h4>
              <ul>
                <li><a href="#location" onClick={(e) => scrollToSection(e, 'location')}>Primary Healthcare</a></li>
                <li><a href="#consultants" onClick={(e) => scrollToSection(e, 'consultants')}>Cardiology Consult</a></li>
                <li><a href="#consultants" onClick={(e) => scrollToSection(e, 'consultants')}>Neurology Specialist</a></li>
                <li><a href="#location" onClick={(e) => scrollToSection(e, 'location')}>Mental Wellness</a></li>
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Emergency 24/7 Triage</a></li>
              </ul>
            </nav>

            {/* Resources */}
            <nav className={styles.linksCol} aria-label="Resources">
              <h4>Resources</h4>
              <ul>
                <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>Help Center</a></li>
                <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>Privacy Policy</a></li>
                <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>Terms of Service</a></li>
                <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>Security Audit</a></li>
                <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>API Documentation</a></li>
              </ul>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} MediCare Healthcare Systems Inc. All rights reserved.
            </p>

            <div className={styles.appBadges}>
              <div className={styles.appPill}>
                <span>🍏 App Store</span>
              </div>
              <div className={styles.appPill}>
                <span>▶ Google Play</span>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="Follow MediCare on Twitter">Twitter / X</a>
              <a href="#" aria-label="Follow MediCare on LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Follow MediCare on Instagram">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
