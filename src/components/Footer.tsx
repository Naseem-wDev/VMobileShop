

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/gb-logo.svg" alt="Shigari Mobile Shop" />
                <h4>Shigari Mobile Shop</h4>
              </div>
              <p>GB's Trusted Mobile Store. Original phones at the best prices in Gilgit-Baltistan.</p>
              <p className="footer-tagline">Quality • Trust • Service</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#mobiles">Browse Mobiles</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h5>Services</h5>
              <ul>
                <li>✓ 100% Original Phones</li>
                <li>✓ PTA Approved</li>
                <li>✓ Best Prices</li>
                <li>✓ Warranty Support</li>
                <li>✓ Fast Delivery</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h5>Contact Info</h5>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+923355551234">+92 335 555 1234</a>
              </p>
              <p>
                <strong>WhatsApp:</strong><br />
                <a href="https://wa.me/923355551234" target="_blank" rel="noopener noreferrer">
                  Chat with us
                </a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@shigarimobile.com">info@shigarimobile.com</a>
              </p>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="https://wa.me/923355551234" target="_blank" rel="noopener noreferrer" className="social-link">
                  📱 WhatsApp
                </a>
                <a href="https://facebook.com/shigarimobile" target="_blank" rel="noopener noreferrer" className="social-link">
                  f Facebook
                </a>
                <a href="https://instagram.com/shigarimobile" target="_blank" rel="noopener noreferrer" className="social-link">
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>&copy; {currentYear} Shigari Mobile Shop. All rights reserved.</p>
            <p>🏔️ Proudly serving Gilgit-Baltistan | Mobile Market, Shigar/Skardu, GB</p>
            <p className="footer-disclaimer">
              Disclaimer: All products are 100% original and come with manufacturer warranty. 
              We are an authorized retailer with complete PTA approval documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-to-top"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
