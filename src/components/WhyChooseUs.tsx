

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '✓',
      title: '100% Original & PTA-Approved',
      description: 'Every phone is certified original with complete PTA documentation ensuring legal use in Pakistan.',
    },
    {
      icon: '💰',
      title: 'Best Prices in Gilgit-Baltistan',
      description: 'Competitive pricing with transparent deals. No hidden charges, no surprises.',
    },
    {
      icon: '🏪',
      title: 'Trusted Local GB Business',
      description: 'We are a local Gilgit-Baltistan business with years of customer trust and satisfaction.',
    },
    {
      icon: '👥',
      title: 'Friendly Customer Support',
      description: '24/7 support via WhatsApp and phone. Our team is always ready to help you.',
    },
    {
      icon: '🛠️',
      title: 'After-Sale Service',
      description: 'Complete after-sale support including warranty handling and technical assistance.',
    },
    {
      icon: '🚚',
      title: 'Safe Delivery',
      description: 'Secure packaging and reliable delivery to your doorstep across Gilgit-Baltistan.',
    },
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Shigari Mobile Shop?</h2>
        <p className="section-subtitle">Your trusted partner for authentic mobile phones in Gilgit-Baltistan</p>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="trust-banner">
          <h3>🎖️ Your Trust is Our Priority</h3>
          <p>Since serving the Gilgit-Baltistan community, we have maintained the highest standards of quality, authenticity, and customer service. Every purchase is a promise of quality and trust.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
