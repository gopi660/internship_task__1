import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustedCompanies from './components/TrustedCompanies';
import Consultants from './components/Consultants';
import LocationSection from './components/LocationSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { X, Calendar, Clock, User, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDocName, setSelectedDocName] = useState('Dr. Miles S.');
  const [bookingDate, setBookingDate] = useState('2026-08-12');
  const [bookingTime, setBookingTime] = useState('10:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleOpenBooking = (doctorName) => {
    if (typeof doctorName === 'string') {
      setSelectedDocName(doctorName);
    }
    setBookingSuccess(false);
    setBookingOpen(true);
  };

  const handleCallClick = (doctorName = 'the doctor') => {
    alert(`Calling functionality for ${doctorName} is not implemented in this demo.`);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="app-root">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        <Hero onOpenBooking={handleOpenBooking} onCallClick={handleCallClick} />
        <Features onOpenBooking={handleOpenBooking} />
        <TrustedCompanies />
        <Consultants onOpenBooking={handleOpenBooking} onCallClick={handleCallClick} />
        <LocationSection onOpenBooking={handleOpenBooking} onCallClick={handleCallClick} />
        <CTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Appointment Booking Modal */}
      {bookingOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setBookingOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>

            {bookingSuccess ? (
              <div className="booking-success-view">
                <div className="success-icon-wrapper">
                  <CheckCircle size={42} color="#10B981" />
                </div>
                <h2>Appointment Requested</h2>
                <p>
                  Your booking request for <strong>{selectedDocName}</strong> has been submitted:
                </p>
                <div className="success-details-pill">
                  <Calendar size={15} /> {bookingDate} &nbsp;•&nbsp; <Clock size={15} /> {bookingTime}
                </div>
                <p className="success-subtext">
                  Contact phone: <strong>{patientPhone || 'N/A'}</strong>.
                </p>
                <button className="btn-primary w-full" onClick={() => setBookingOpen(false)}>
                  Close Window
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleConfirmBooking}>
                <div className="modal-header">
                  <h2 id="booking-title">Schedule Consultation</h2>
                  <p>Pick your preferred specialist doctor and time slot.</p>
                </div>

                <div className="form-group">
                  <label htmlFor="booking-doctor">Selected Doctor</label>
                  <select
                    id="booking-doctor"
                    value={selectedDocName}
                    onChange={(e) => setSelectedDocName(e.target.value)}
                    className="form-select"
                  >
                    <option value="Dr. Miles S.">Dr. Miles S. (Cardiology)</option>
                    <option value="Dr. Sagara K.">Dr. Sagara K. (Neurology)</option>
                    <option value="Dr. Picko V.">Dr. Picko V. (Pediatrics)</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group flex-1">
                    <label htmlFor="booking-date">Preferred Date</label>
                    <input
                      id="booking-date"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="booking-time">Time Slot</label>
                    <select
                      id="booking-time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="form-select"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:15 PM">04:15 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="patient-name">Patient Full Name</label>
                  <div className="input-with-icon">
                    <User size={15} className="input-icon" />
                    <input
                      id="patient-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="patient-phone">Phone Number</label>
                  <div className="input-with-icon">
                    <Phone size={15} className="input-icon" />
                    <input
                      id="patient-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="hipaa-assurance">
                  <ShieldCheck size={14} />
                  <span>100% Confidential & HIPAA Compliant Data Encryption</span>
                </div>

                <button type="submit" className="btn-primary w-full" style={{ padding: '12px' }}>
                  <span>Submit Booking</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .app-root {
          width: 100%;
          min-height: 100vh;
          position: relative;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: var(--overlay-bg);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: modalFadeIn 0.3s ease;
        }

        .modal-card {
          position: relative;
          background: var(--card-bg);
          border-radius: var(--radius-lg);
          max-width: 460px;
          width: 100%;
          padding: 32px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--card-bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .modal-header {
          margin-bottom: 20px;
        }

        .modal-header h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .modal-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 5px;
        }

        .form-row {
          display: flex;
          gap: 12px;
        }

        .flex-1 {
          flex: 1;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 9px 12px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.85rem;
          color: var(--text-main);
          outline: none;
          background: var(--input-bg);
          transition: border-color 0.2s ease;
        }

        .form-input:focus, .form-select:focus {
          border-color: var(--primary);
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 10px;
          color: var(--text-light);
        }

        .input-with-icon input {
          padding-left: 34px;
        }

        .hipaa-assurance {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-bottom: 18px;
          font-weight: 500;
        }

        .booking-success-view {
          text-align: center;
          padding: 8px 0;
        }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }

        .booking-success-view h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .success-details-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-tint);
          color: var(--primary);
          padding: 6px 16px;
          border-radius: var(--radius-pill);
          font-weight: 700;
          font-size: 0.85rem;
          margin: 14px 0;
        }

        .success-subtext {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 480px) {
          .modal-backdrop {
            padding: 12px;
          }
          .modal-card {
            padding: 24px 18px;
            max-height: 92vh;
            overflow-y: auto;
          }
          .form-row {
            flex-direction: column;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
