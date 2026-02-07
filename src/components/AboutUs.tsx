import { useState } from 'react';

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2 className="section-title">About Shigari Mobile Shop</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Welcome to Shigari Mobile Shop, your trusted mobile phone destination in Gilgit-Baltistan. 
              We believe in serving our community with <strong>honesty, quality, and unwavering commitment</strong> to customer satisfaction.
            </p>
            
            <p>
              Founded with a vision to bring authentic, original mobile phones to the people of Shigar, Skardu, and all of Gilgit-Baltistan, 
              we have become a household name for reliability and trust. Every phone we sell is 100% original and PTA-approved, 
              ensuring you get the genuine product with full warranty support.
            </p>

            {expanded && (
              <>
                <p>
                  Our commitment extends beyond just selling phones. We understand that choosing the right mobile device is an important decision. 
                  That's why we provide personalized guidance, honest recommendations, and lifetime customer support to ensure you get exactly what you need.
                </p>

                <p>
                  With a team of dedicated professionals and deep knowledge of the mobile industry, we pride ourselves on offering:
                </p>

                <ul className="about-list">
                  <li>✓ Authentic products directly from authorized suppliers</li>
                  <li>✓ Competitive pricing across all budget ranges</li>
                  <li>✓ Expert advice for choosing the perfect phone</li>
                  <li>✓ Complete warranty and after-sale support</li>
                  <li>✓ Fast delivery across Gilgit-Baltistan</li>
                  <li>✓ Customer-first approach in every interaction</li>
                </ul>

                <p>
                  We're not just a shop; we're your technology partner in Gilgit-Baltistan. 
                  Whether you're looking for a flagship phone, a mid-range device, or a budget-friendly option, 
                  we have something perfect for everyone in your family.
                </p>

                <p className="vision-text">
                  <strong>Our Vision:</strong> To be the most trusted and customer-centric mobile phone retailer in Gilgit-Baltistan, 
                  known for authenticity, quality, and exceptional service.
                </p>
              </>
            )}

            <button 
              onClick={() => setExpanded(!expanded)} 
              className="btn-expand"
            >
              {expanded ? '▼ Show Less' : '▶ Read More About Our Story'}
            </button>
          </div>

          <div className="about-image">
            <div className="gb-badge">
              <h4>🏔️ GB Pride</h4>
              <p>Serving Gilgit-Baltistan since 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
