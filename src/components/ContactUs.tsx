import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello Shigari Mobile Shop!\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/923355551234?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    setFormData({ name: '', phone: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with us for inquiries, orders, or support</p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+923355551234">+92 335 555 1234</a>
                </p>
                <small>Call us anytime during business hours</small>
              </div>

              <div className="info-card">
                <div className="info-icon">💬</div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/923355551234" target="_blank" rel="noopener noreferrer">
                    +92 335 555 1234
                  </a>
                </p>
                <small>Fast response on WhatsApp messages</small>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@shigarimobile.com">info@shigarimobile.com</a>
                </p>
                <small>We'll respond within 24 hours</small>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h4>Physical Address</h4>
                <p>Mobile Market<br />Shigar / Skardu<br />Gilgit-Baltistan, Pakistan</p>
                <small>Visit our shop for direct assistance</small>
              </div>

              <div className="info-card">
                <div className="info-icon">🕐</div>
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 7:00 PM<br />Saturday: 10:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
              </div>

              <div className="info-card">
                <div className="info-icon">🎖️</div>
                <h4>Emergency Support</h4>
                <p>Available for urgent inquiries</p>
                <small>Contact via WhatsApp anytime</small>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="contact-form-section">
            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Your Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry or request..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message via WhatsApp
              </button>

              {submitted && (
                <p className="form-success">✓ Your message will be sent to WhatsApp. We'll reply soon!</p>
              )}
            </form>

            {/* Map */}
            <div className="map-container">
              <h3>Visit Our Shop</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.5644444444444!2d75.5833333333333!3d34.2833333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShigar%2C%20Skardu!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px', marginTop: '15px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
