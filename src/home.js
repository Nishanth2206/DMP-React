import React from 'react';
import './home.css'; // Global styles for the app

const Home = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="containers">
          <h1 className="logo">Digital-Marketing </h1>
          <nav className="nav">
          <a href="/" class="button">Login</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Transform Your Business with Expert Digital Marketing</h1>
          <p>Our tailored strategies help you increase online visibility and drive growth.</p>
          <a href="GetStarted" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>SEO Optimization</h3>
              <p>Boost your website’s ranking on search engines.</p>
            </div>
            <div className="service-item">
              <h3>Social Media Management</h3>
              <p>Manage and grow your social media presence.</p>
            </div>
            <div className="service-item">
              <h3>Content Creation</h3>
              <p>Engage your audience with high-quality content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"Incredible results and excellent service!"</p>
              <cite>- Alice Johnson</cite>
            </div>
            <div className="testimonial-item">
              <p>"Our online presence has skyrocketed since working with them."</p>
              <cite>- Bob Smith</cite>
            </div>
            <div className="testimonial-item">
              <p>"Highly professional and results-driven team."</p>
              <cite>- Catherine Lee</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <p>&copy; 2024 DigitalMarketingPro. All rights reserved.</p>
          <p><a href="#">Contact Us</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;