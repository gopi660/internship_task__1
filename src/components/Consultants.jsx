import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Star, CheckCircle2, UserCheck, ChevronRight } from 'lucide-react';
import consultant1 from '../assets/consultant-1.jpg';
import consultant2 from '../assets/consultant-2.jpg';
import consultant3 from '../assets/consultant-3.jpg';
import styles from './Consultants.module.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Miles S.',
    title: 'Full time Senior Physician',
    specialty: 'Cardiology',
    experience: '12+ Yrs Exp.',
    rating: '4.9',
    reviews: '240+ reviews',
    image: consultant1,
    available: 'Today at 4:00 PM',
    bio: 'Specialist in preventative cardiovascular care, ECG interpretation, and digital telehealth monitoring.',
  },
  {
    id: 2,
    name: 'Dr. Sagara K.',
    title: 'Sr. Neurological Surgeon',
    specialty: 'Neurology',
    experience: '15+ Yrs Exp.',
    rating: '5.0',
    reviews: '310+ reviews',
    image: consultant2,
    available: 'Tomorrow at 10:30 AM',
    bio: 'Leading expert in neuro-diagnostics, migraine prevention, and post-recovery rehabilitation.',
  },
  {
    id: 3,
    name: 'Dr. Picko V.',
    title: 'Pediatric Health Specialist',
    specialty: 'Pediatrics',
    experience: '9+ Yrs Exp.',
    rating: '4.8',
    reviews: '180+ reviews',
    image: consultant3,
    available: 'Today at 6:15 PM',
    bio: 'Dedicated family pediatrician focused on child immunization, growth tracking, and adolescent health.',
  },
];

const categories = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Dermatology'];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const Consultants = ({ onOpenBooking, onCallClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDoctors =
    activeCategory === 'All'
      ? doctors
      : doctors.filter((d) => d.specialty === activeCategory);

  return (
    <section id="consultants" className={styles.section} aria-labelledby="consultants-heading">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            <UserCheck size={15} aria-hidden="true" />
            <span>TOP CONSULTANTS</span>
          </div>
          <h2 id="consultants-heading">Collaborate with our best consultant by online</h2>
          <p>
            Connect with board-certified healthcare professionals available for instant video consultation and personal care planning.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className={styles.categoryTabs} role="tablist" aria-label="Filter doctors by specialty">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls="doctors-grid"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className={styles.grid} id="doctors-grid" role="tabpanel">
          {filteredDoctors.map((doc, index) => (
            <motion.article
              key={doc.id}
              className={styles.doctorCard}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              aria-label={`${doc.name} — ${doc.specialty}`}
            >
              <div className={styles.imageBox}>
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.title}`}
                  className={styles.docImg}
                  loading="lazy"
                  width="400"
                  height="220"
                />
                <div className={styles.ratingTag}>
                  <Star size={12} fill="#FFB800" stroke="none" aria-hidden="true" />
                  <span>{doc.rating} ({doc.reviews})</span>
                </div>
                <div className={styles.availablePill}>
                  <CheckCircle2 size={12} color="#10B981" aria-hidden="true" />
                  <span>{doc.available}</span>
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.specialtyBadge}>{doc.specialty}</div>
                <h3 className={styles.docName}>{doc.name}</h3>
                <p className={styles.docTitle}>
                  {doc.title} • <strong>{doc.experience}</strong>
                </p>
                <p className={styles.docBio}>{doc.bio}</p>

                <div className={styles.actionRow}>
                  <button
                    className={styles.bookBtn}
                    onClick={() => onOpenBooking(doc.name)}
                    aria-label={`Book consultation with ${doc.name}`}
                  >
                    <Calendar size={15} aria-hidden="true" />
                    <span>Book Consult</span>
                  </button>
                  <button
                    className={styles.callBtn}
                    onClick={() => onCallClick(doc.name)}
                    aria-label={`Call ${doc.name}`}
                    title={`Call ${doc.name}`}
                  >
                    <Phone size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.bannerContent}>
            <h3>Patients can consult with healthcare providers from the comfort of their homes</h3>
            <p>Eliminating travel time and costs with reduced waiting times and 24/7 emergency support.</p>
          </div>
          <button className="btn-primary" onClick={() => onOpenBooking()}>
            <span>Book an Appointment</span>
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultants;
