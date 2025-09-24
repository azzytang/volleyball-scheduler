import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: "🏐",
      title: "Easy Reservations",
      description:
        "Reserve your court in seconds with our intuitive reservation system",
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Reserve courts anytime, anywhere with instant confirmation",
    },

    {
      icon: "👥",
      title: "Group Bookings",
      description: "Perfect for teams, tournaments, and group events",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Book on the go with our responsive mobile app",
    },
  ];

  const testimonials = [
    {
      name: "Nishant Sinari",
      role: "Tournament Organizer",
      image: "⭐️⭐️⭐️⭐️⭐️",
      text: "We used CourtNext for our fundraising volleyball tournament and it helped keep everything smooth. Everything was extremely organized.",
    },
    {
      name: "Emily Mu",
      role: "Recreational Player",
      image: "⭐️⭐️⭐️⭐️⭐️",
      text: "CourtNext made organizing our weekly volleyball games so much easier. The booking process is seamless!",
    },

    {
      name: "Tara Alim",
      role: "Hometown Hero",
      image: "⭐️⭐️⭐️⭐️⭐️",
      text: "As someone who plays volleyball casually, I love how easy it is to hold my spot on court. The booking system is very user-friendly.",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">CourtNext</h1>
          <p className="hero-subtitle">Peace to the court, enjoy the sport!</p>
          <p className="hero-description">
            Book premium volleyball courts instantly. Whether you're a casual
            player or a competitive team, we have the perfect court waiting for
            you.
          </p>
          <div className="hero-buttons">
            <Link to="/reserve">
              <button className="btn-primary">Book a Court</button>
            </Link>
            <button className="btn-secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Community Courts</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Booking Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose CourtNext?</h2>
          <p>
            Experience the best volleyball booking platform with features
            designed for players like you
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About CourtNext</h2>
            <p>
              Founded in 2024, CourtNext has been revolutionizing the way
              volleyball enthusiasts organize and enjoy their favorite sport. We
              understand the passion for volleyball and strive to provide the
              best facilities and booking experience for public courts.
            </p>
            <p>
              Whether you're practicing serves, organizing a friendly match, or
              hosting a tournament, CourtNext is your perfect partner to avoid
              court confusion. At no additional cost, CourtNext works to keep
              peace on the court so everyone can enjoy the sport!
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">1+</span>
                <span className="highlight-text">Years of Excellence</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">150+</span>
                <span className="highlight-text">Games Played</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">100%</span>
                <span className="highlight-text">Satisfaction Rate</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>🏐</span>
              <p>Professional Volleyball Courts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Players Say</h2>
            <p>Don't just take our word for it - hear from our community</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-content">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial ${
                    activeTestimonial === index ? "active" : ""
                  }`}
                >
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    activeTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Play?</h2>
          <p>
            Join thousands of volleyball enthusiasts who trust CourtNext for
            their court bookings
          </p>
          <Link to="/reserve">
            <button className="btn-cta">Book Your Court Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
