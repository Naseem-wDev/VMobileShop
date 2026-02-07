

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/gb-logo.svg" alt="GB Logo" className="logo-img" />
          <div className="logo-text">
            <h3>Shigari Mobile</h3>
            <p>GB's Trusted Store</p>
          </div>
        </div>
        
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('mobiles')} className="nav-link">Mobiles</button></li>
          <li><button onClick={() => scrollToSection('why-us')} className="nav-link">Why Us</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
        
        <a href="https://wa.me/923355551234" target="_blank" rel="noopener noreferrer" className="nav-whatsapp">
          <span>📱 WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
