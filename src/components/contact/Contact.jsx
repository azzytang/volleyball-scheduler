import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: "123 Volleyball Court Drive, Sports City, SC 12345",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@courtnext.com",
    },
    {
      icon: "🕒",
      title: "Hours",
      content: "Mon-Sun: 6:00 AM - 11:00 PM",
    },
  ];

  const faqs = [
    {
      question: "How do I book a court?",
      answer:
        "You can book a court through our online reservation system. Simply visit the Reserve page, select your preferred court, date, and time, then complete your booking.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer free cancellation up to 24 hours before your scheduled time. Late cancellations may incur a fee.",
    },
    {
      question: "Do you provide equipment?",
      answer:
        "Yes, we provide basic volleyball equipment including nets, balls, and scoreboards. Premium equipment is available for an additional fee.",
    },
    {
      question: "Can I book for a tournament?",
      answer:
        "Absolutely! We support tournament bookings and can accommodate large groups. Please contact us directly for tournament arrangements.",
    },
  ];

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team. We're here to help with any questions
            about court bookings, facilities, or general inquiries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
