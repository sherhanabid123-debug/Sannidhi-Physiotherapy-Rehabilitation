"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Bone, 
  Activity, 
  Baby, 
  HeartPulse, 
  Flower2, 
  Home as HomeIcon, 
  Phone, 
  MapPin, 
  Mail, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const services = [
    {
      title: "Neuro Rehabilitation",
      icon: <Brain size={32} />,
      items: ["Stroke Rehabilitation", "Parkinson's Disease", "Spinal Cord Injury", "Balance & Gait Training", "Functional Mobility"]
    },
    {
      title: "Orthopedic Rehabilitation",
      icon: <Bone size={32} />,
      items: ["Back & Neck Pain", "Joint Replacement", "Post-Fracture", "Post-Operative Rehab"]
    },
    {
      title: "Sports Physiotherapy",
      icon: <Activity size={32} />,
      items: ["Sports Injury Rehab", "Return-to-Sport", "Injury Prevention", "Strength & Conditioning"]
    },
    {
      title: "Pediatric Physiotherapy",
      icon: <Baby size={32} />,
      items: ["Developmental Delay", "Pediatric Neurological", "Functional Therapy"]
    },
    {
      title: "Cardiorespiratory",
      icon: <HeartPulse size={32} />,
      items: ["Pulmonary Rehab", "ICU Rehabilitation", "Post-COVID Recovery", "Breathing Training"]
    },
    {
      title: "Women's Health",
      icon: <Flower2 size={32} />,
      items: ["Antenatal Physiotherapy", "Postnatal Rehabilitation", "Pelvic Floor Rehab"]
    },
    {
      title: "Community-Based Rehab",
      icon: <HomeIcon size={32} />,
      items: ["Elderly Care", "Fall Prevention", "Functional Independence"]
    }
  ];

  const whyChooseUs = [
    "Home-Based Physiotherapy Services",
    "Personalized Rehabilitation Programs",
    "Compassionate & Patient-Centered Care",
    "Evidence-Based Treatment Approaches",
    "Multidisciplinary Rehabilitation",
    "Functional & Goal-Oriented Recovery",
    "Convenient & Accessible Services",
    "Professional Guidance & Caregiver Education"
  ];

  const steps = [
    { title: "Contact Us", desc: "Reach out via call or WhatsApp" },
    { title: "Schedule Assessment", desc: "We'll set a convenient time" },
    { title: "Personalized Plan", desc: "Tailored to your needs" },
    { title: "Therapy Sessions", desc: "Expert care at home" },
    { title: "Progress Tracking", desc: "Continuous monitoring" }
  ];

  const values = [
    "Compassion", "Accessibility", "Professionalism", 
    "Evidence-Based Practice", "Functional Recovery", "Patient-Centered Care"
  ];

  const testimonials = [
    {
      quote: "The home-based therapy sessions were extremely convenient and professional. The treatment approach was personalized and supportive.",
      author: "Sherhan"
    },
    {
      quote: "Sannidhi Rehab helped improve mobility and confidence after stroke rehabilitation. The care and guidance provided were excellent.",
      author: "Arun"
    },
    {
      quote: "The therapists were compassionate, punctual, and highly knowledgeable. Receiving physiotherapy at home made recovery much easier.",
      author: "Namita"
    }
  ];

  const areas = ["Hulimavu", "BTM layout", "Jayanagar", "JP nagar", "Arekere", "Begur", "Bommanahalli", "Nearby areas"];

  return (
    <main style={{ overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <Image 
              src="/images/logo.jpg" 
              alt="Sannidhi Rehab" 
              width={160} 
              height={50} 
              style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
            />
          </Link>
          
          <div className="nav-links">
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#why-us" className="nav-link">Why Us</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#booking" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
                Book Visit
              </Link>
            </motion.div>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass" 
            style={{ position: 'fixed', top: '70px', left: 0, width: '100%', padding: '2rem', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
          >
            <Link href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#why-us" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
            <Link href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="#booking" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Book Visit</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-bg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        ></motion.div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} style={{ lineHeight: 1.1 }}>
              Expert Physiotherapy & <span style={{ display: 'block' }}>Rehabilitation </span> <span>At Your Doorstep</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.3rem', opacity: 0.9 }}>
              Compassionate multidisciplinary services designed to support recovery and restore independence — from the comfort of your home.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#booking" className="btn btn-primary">
                  Book a Home Visit <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/918086838046" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  WhatsApp Us <Phone size={18} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Image 
                src="/images/hero.png" 
                alt="Physiotherapy at home" 
                width={600} 
                height={500} 
                style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: 'var(--border-radius-lg)' }}
                priority
              />
            </motion.div>
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="hero-badge-icon">
                <Stethoscope size={24} />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary-dark)' }}>Expert Care</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Tailored for you</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div className="about-grid" style={{ gap: '6rem' }}>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div style={{ position: 'relative', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden' }}>
                <Image 
                  src="/images/about.png" 
                  alt="About Sannidhi Rehab" 
                  width={600} 
                  height={600} 
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Our Story</motion.span>
              <motion.h2 variants={fadeInUp} style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Sannidhi Physiotherapy & Rehabilitation</motion.h2>
              <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                Sannidhi Physiotherapy & Rehabilitation is a multidisciplinary home-based rehabilitation service committed to delivering compassionate, evidence-based, and patient-centered physiotherapy care across Bangalore.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We believe that rehabilitation is most effective when delivered in a familiar and comfortable environment. Our approach focuses on restoring functional independence and supporting long-term recovery through personalized rehabilitation programs.
              </motion.p>
              
              <motion.div className="flex gap-2 mt-4" variants={fadeInUp}>
                <motion.div className="card" style={{ flex: 1, padding: '2rem', borderLeft: '4px solid var(--color-primary)' }} whileHover={{ scale: 1.02 }}>
                  <h4 style={{ marginBottom: '0.8rem', color: 'var(--color-primary)', fontSize: '1.2rem' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.95rem' }}>To become a trusted multidisciplinary physiotherapy and rehabilitation service that delivers accessible, compassionate care by bringing quality rehabilitation closer to families.</p>
                </motion.div>
                <motion.div className="card" style={{ flex: 1, padding: '2rem', borderLeft: '4px solid var(--color-sage)' }} whileHover={{ scale: 1.02 }}>
                  <h4 style={{ marginBottom: '0.8rem', color: 'var(--color-primary)', fontSize: '1.2rem' }}>Our Mission</h4>
                  <p style={{ fontSize: '0.95rem' }}>To provide patient-centered, goal-oriented rehabilitation services through home-based care while improving functional independence and quality of life.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Our Expert Specialists</h2>
            <p className="section-subtitle" style={{ fontSize: '1.2rem' }}>Meet our highly qualified and experienced professionals dedicated to your recovery.</p>
          </motion.div>

          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="card"
              style={{ width: '400px', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-md)', backgroundColor: 'white' }}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-primary)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-sage-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                  <Stethoscope size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>Dr Shebin Sanu</h3>
                <p style={{ fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.1rem', letterSpacing: '1px' }}>(MPT) NEURO</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>Expert in neurological rehabilitation and functional recovery.</p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              style={{ width: '400px', border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-md)', backgroundColor: 'white' }}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-primary)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-sage-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                  <Stethoscope size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>Dr Sonali Christopher</h3>
                <p style={{ fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.1rem', letterSpacing: '1px' }}>(MPT) NEURO</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>Specialized in advanced neurological therapies and patient care.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ backgroundColor: 'var(--color-sage-light)', borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Our Services</h2>
            <p className="section-subtitle" style={{ fontSize: '1.2rem' }}>Comprehensive programs tailored to your specific needs, delivered right at your doorstep.</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="card service-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>{service.title}</h3>
                <ul className="service-list" style={{ marginTop: 'auto' }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us & Core Values */}
      <section id="why-us" className="section" style={{ backgroundColor: 'var(--color-sage-light)', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'start' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} style={{ fontSize: '3rem', marginBottom: '3rem' }}>Why Choose Sannidhi Rehab?</motion.h2>
              <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {whyChooseUs.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="feature-item" 
                    variants={fadeInUp}
                    style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}
                    whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-md)' }}
                  >
                    <CheckCircle2 className="feature-icon" style={{ color: 'var(--color-primary-light)' }} />
                    <div className="feature-content">
                      <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{feature}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="card"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem', position: 'sticky', top: '100px' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ color: 'white', marginBottom: '2.5rem', fontSize: '2.2rem' }}>Our Core Values</h2>
              <ul className="service-list" style={{ gap: '2rem' }}>
                {values.map((value, index) => (
                  <motion.li 
                    key={index} 
                    style={{ color: 'var(--color-sage-light)', fontSize: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}
                    whileHover={{ x: 10, color: 'white' }}
                  >
                    {value}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ marginTop: '-4rem', borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0', backgroundColor: 'var(--color-background)', position: 'relative', zIndex: 5 }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">A simple, structured approach to starting your recovery journey.</p>
          </motion.div>

          <div className="steps-container" style={{ marginTop: '4rem' }}>
            <div className="steps-line" style={{ background: 'linear-gradient(to right, transparent, var(--color-sage), transparent)' }}></div>
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="step-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
              >
                <motion.div 
                  className="step-number"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real experiences from those who chose Sannidhi Rehab.</p>
          </motion.div>

          <motion.div 
            className="testimonials-slider" 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="card testimonial-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                style={{ padding: '3rem' }}
              >
                <div className="quote-icon" style={{ fontSize: '4rem', marginBottom: '0' }}>"</div>
                <p className="testimonial-text" style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>{testimonial.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{testimonial.author}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Verified Patient</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form & Service Area */}
      <section id="booking" className="section">
        <div className="container">
          <motion.div 
            className="booking-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="booking-grid" style={{ gap: '6rem' }}>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1 }}>Book a Home Visit</motion.h2>
                <motion.p variants={fadeInUp} style={{ color: 'var(--color-sage)', marginBottom: '3rem', fontSize: '1.1rem' }}>Fill out the form below and our team will get in touch with you shortly to confirm your appointment.</motion.p>
                
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <motion.div className="form-group" variants={fadeInUp}>
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Your full name" required />
                    </motion.div>
                    <motion.div className="form-group" variants={fadeInUp}>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" placeholder="Your contact number" required />
                    </motion.div>
                  </div>
                  <motion.div className="form-group" variants={fadeInUp}>
                    <label className="form-label">Area/Location</label>
                    <input type="text" className="form-control" placeholder="Your residential area in Bangalore" required />
                  </motion.div>
                  <motion.div className="form-group" variants={fadeInUp}>
                    <label className="form-label">Condition/Concern</label>
                    <input type="text" className="form-control" placeholder="Briefly describe your concern" required />
                  </motion.div>
                  <motion.div className="form-group" variants={fadeInUp}>
                    <label className="form-label">Preferred Time</label>
                    <input type="text" className="form-control" placeholder="E.g., Morning, Afternoon, Evening" required />
                  </motion.div>
                  <motion.button 
                    variants={fadeInUp} 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)', padding: '1.2rem', marginTop: '1rem', fontSize: '1.1rem' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Appointment
                  </motion.button>
                </form>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--border-radius-md)', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <h3 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.8rem' }}>
                  <MapPin color="var(--color-accent)" size={32} /> Areas We Serve
                </h3>
                <p style={{ color: 'var(--color-sage-light)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Providing expert home-based physiotherapy across Bangalore.</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: 'auto' }}>
                  {areas.map((area, index) => (
                    <motion.span 
                      key={index} 
                      style={{ padding: '0.6rem 1.2rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-full)', color: 'white', fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.1)' }}
                      whileHover={{ backgroundColor: 'var(--color-primary-light)', borderColor: 'var(--color-accent)' }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--border-radius-md)' }}>
                  <h3 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>Quick Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <motion.a href="tel:8086838046" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'white' }} whileHover={{ x: 10 }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Phone size={24} color="var(--color-accent)" />
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-sage)', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us</span>
                        <strong style={{ fontSize: '1.3rem' }}>80868 38046</strong>
                      </div>
                    </motion.a>
                    <motion.a href="mailto:Move.with.sannidhi@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'white' }} whileHover={{ x: 10 }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={24} color="var(--color-accent)" />
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-sage)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</span>
                        <strong style={{ fontSize: '1.1rem', wordBreak: 'break-all' }}>Move.with.sannidhi@gmail.com</strong>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer" style={{ borderTop: 'none', background: '#0a2219' }}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="footer-logo" style={{ display: 'block', marginBottom: '2rem', background: 'white', padding: '1rem', borderRadius: 'var(--border-radius-sm)', width: 'fit-content' }}>
                <Image 
                  src="/images/logo.jpg" 
                  alt="Sannidhi Rehab" 
                  width={200} 
                  height={75} 
                  style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} 
                />
              </Link>
              <p className="footer-tagline" style={{ fontSize: '1.3rem', fontWeight: 600 }}>“Care That Comes Closer”</p>
              <p style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '2rem', maxWidth: '350px', lineHeight: 1.6 }}>
                Expert multidisciplinary home-based physiotherapy & rehabilitation services across Bangalore.
              </p>
              <div className="social-links" style={{ gap: '1.5rem' }}>
                <motion.a href="#" className="social-icon" whileHover={{ y: -5, backgroundColor: 'var(--color-primary)' }}><FaInstagram size={22} /></motion.a>
                <motion.a href="#" className="social-icon" whileHover={{ y: -5, backgroundColor: 'var(--color-primary)' }}><FaFacebook size={22} /></motion.a>
                <motion.a href="https://wa.me/918086838046" className="social-icon" whileHover={{ y: -5, backgroundColor: 'var(--color-primary)' }}><Phone size={22} /></motion.a>
              </div>
            </div>

            <div style={{ paddingLeft: '2rem' }}>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link href="#about">About Us</Link>
                <Link href="#services">Our Services</Link>
                <Link href="#why-us">Why Choose Us</Link>
                <Link href="#booking">Book Appointment</Link>
              </div>
            </div>

            <div>
              <h4>Our Services</h4>
              <div className="footer-links">
                <a href="#services">Neuro Rehabilitation</a>
                <a href="#services">Orthopedic Care</a>
                <a href="#services">Sports Physiotherapy</a>
                <a href="#services">Pediatric Therapy</a>
              </div>
            </div>

            <div>
              <h4>Get In Touch</h4>
              <ul className="contact-info" style={{ gap: '1.5rem' }}>
                <li style={{ alignItems: 'start' }}>
                  <Phone size={20} color="var(--color-accent)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Phone</span>
                    <span style={{ fontSize: '1.1rem' }}>80868 38046</span>
                  </div>
                </li>
                <li style={{ alignItems: 'start' }}>
                  <Mail size={20} color="var(--color-accent)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Email</span>
                    <span style={{ fontSize: '1rem', wordBreak: 'break-all' }}>Move.with.sannidhi@gmail.com</span>
                  </div>
                </li>
                <li style={{ alignItems: 'start' }}>
                  <MapPin size={20} color="var(--color-accent)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5 }}>Location</span>
                    <span style={{ fontSize: '1rem' }}>Bangalore, Karnataka</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ marginTop: '5rem', opacity: 0.5 }}>
            <p>&copy; {new Date().getFullYear()} Sannidhi Physiotherapy & Rehabilitation. Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
