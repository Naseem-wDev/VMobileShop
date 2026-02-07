

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923355551234', '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Shigari Mobile Shop</h1>
          <h2 className="hero-subtitle">GB's Trusted Mobile Store</h2>
          <p className="hero-slogan">
            <span className="slogan-highlight">Original Mobiles • Best Prices • GB Trusted Shop</span>
          </p>
          
          <p className="hero-description">
            Welcome to Shigari Mobile Shop - your one-stop destination for 100% original, PTA-approved mobile phones at the best prices in Gilgit-Baltistan. 
            From flagship smartphones to budget-friendly options, we have everything you need.
          </p>
          
          <div className="hero-buttons">
            <a href="#mobiles" className="btn btn-primary">
              <span>📱 Browse Mobiles</span>
            </a>
            <button onClick={handleWhatsAppClick} className="btn btn-secondary">
              <span>💬 WhatsApp Contact</span>
            </button>
            <a href="#contact" className="btn btn-outline">
              <span>📍 Visit Shop</span>
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature-badge">
              <span className="badge-icon">✓</span>
              <span>100% Original</span>
            </div>
            <div className="feature-badge">
              <span className="badge-icon">✓</span>
              <span>PTA Approved</span>
            </div>
            <div className="feature-badge">
              <span className="badge-icon">✓</span>
              <span>Best Prices GB</span>
            </div>
            <div className="feature-badge">
              <span className="badge-icon">✓</span>
              <span>Fast Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-frame">
              <img src="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=600&fit=crop" alt="Featured Mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
