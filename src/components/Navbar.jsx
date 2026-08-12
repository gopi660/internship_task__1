import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ArrowRight, Bell, Sun, Moon, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.svg';
import styles from './Navbar.module.css';

const searchableItems = [
  { name: 'Dr. Miles S.', type: 'Cardiology Senior Physician', sectionId: 'consultants', isDoctor: true },
  { name: 'Dr. Sagara K.', type: 'Sr. Neurological Surgeon', sectionId: 'consultants', isDoctor: true },
  { name: 'Dr. Picko V.', type: 'Pediatric Health Specialist', sectionId: 'consultants', isDoctor: true },
  { name: 'Cardiology Consultations', type: 'Specialty Care', sectionId: 'consultants' },
  { name: 'Neurology Specialist Care', type: 'Specialty Care', sectionId: 'consultants' },
  { name: 'Pediatric Health Care', type: 'Specialty Care', sectionId: 'consultants' },
  { name: 'Primary Healthcare Assessment', type: 'Medical Service', sectionId: 'location' },
  { name: 'Preventive Dental Triage', type: 'Medical Service', sectionId: 'location' },
  { name: 'Mental Healthcare Therapy', type: 'Medical Service', sectionId: 'location' },
  { name: 'Mobile Health Apps', type: 'Patient Tool', sectionId: 'features' },
  { name: 'Secure Messaging (HIPAA)', type: 'Encrypted Chat', sectionId: 'features' },
  { name: 'Online Prescription Refill', type: 'Pharmacy Service', sectionId: 'features' },
  { name: 'Global Medicine Delivery', type: 'Pharmacy Service', sectionId: 'features' },
];

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSearchResult = (item) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    scrollToSection(null, item.sectionId);
    if (item.isDoctor) {
      onOpenBooking(item.name);
    }
  };

  const filteredResults = searchQuery.trim()
    ? searchableItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'features' },
    { label: 'Services', id: 'features' },
    { label: 'Doctors', id: 'consultants' },
    { label: 'Location', id: 'location' },
    { label: 'FAQs', id: 'footer' },
  ];

  return (
    <header
      className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.navContainer}`}>
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className={styles.brand}
          aria-label="MediCare — Go to homepage"
        >
          <img src={logo} alt="MediCare Logo" className={styles.brandLogo} />
        </a>

        {/* Navigation */}
        <nav className={styles.navLinks} role="navigation" aria-label="Main navigation">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`${styles.navLink} ${i === 0 ? styles.active : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Interactive Search */}
          <div className={styles.searchWrapper} ref={searchRef}>
            <div className={styles.search} role="search">
              <Search className={styles.searchIcon} size={16} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search doctor or service..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className={styles.searchInput}
                aria-label="Search doctors or services"
              />
              {searchQuery && (
                <button
                  className={styles.clearSearch}
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchOpen(false);
                  }}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Floating Autocomplete Dropdown */}
            <AnimatePresence>
              {isSearchOpen && searchQuery.trim() && (
                <motion.div
                  className={styles.searchResults}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                >
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <div
                        key={idx}
                        className={styles.searchResultItem}
                        onClick={() => handleSelectSearchResult(item)}
                      >
                        <div className={styles.resultMain}>
                          <span className={styles.resultTitle}>{item.name}</span>
                          <span className={styles.resultType}>{item.type}</span>
                        </div>
                        <ChevronRight size={14} className={styles.resultArrow} />
                      </div>
                    ))
                  ) : (
                    <div className={styles.noResults}>
                      No doctors or services found for "{searchQuery}"
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Notifications */}
          <button
            className={styles.iconBtn}
            title="Health Updates"
            onClick={() => onOpenBooking()}
            aria-label="View health update notifications"
          >
            <Bell size={16} />
            <span className={styles.badgeDot} aria-hidden="true" />
          </button>

          {/* Book CTA */}
          <button
            className={`btn-primary ${styles.navCta}`}
            onClick={() => onOpenBooking()}
          >
            <span>Book Now</span>
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Mobile Search */}
            <div className={styles.mobileSearchBox}>
              <div className={styles.search}>
                <Search className={styles.searchIcon} size={16} aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search doctor or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search doctors or services"
                />
                {searchQuery && (
                  <button
                    className={styles.clearSearch}
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
              {searchQuery.trim() && (
                <div className={styles.mobileSearchResults}>
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <div
                        key={idx}
                        className={styles.searchResultItem}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleSelectSearchResult(item);
                        }}
                      >
                        <div className={styles.resultMain}>
                          <span className={styles.resultTitle}>{item.name}</span>
                          <span className={styles.resultType}>{item.type}</span>
                        </div>
                        <ChevronRight size={14} className={styles.resultArrow} />
                      </div>
                    ))
                  ) : (
                    <div className={styles.noResults}>
                      No doctors or services found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            <nav className={styles.mobileNavLinks} aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
              <div className={styles.mobileDrawerCta}>
                <button
                  className="btn-primary w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <span>Book Consultation</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
