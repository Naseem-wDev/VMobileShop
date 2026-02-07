import type { Mobile } from '../data/mobiles';

interface MobileCardProps {
  mobile: Mobile;
}

const MobileCard = ({ mobile }: MobileCardProps) => {
  const handleWhatsAppBuy = () => {
    const message = `Hi Shigari Mobile Shop! I'm interested in buying the ${mobile.brand} ${mobile.model} for PKR ${mobile.price.toLocaleString()}. Please send me more details.`;
    window.open(`https://wa.me/923355551234?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="mobile-card">
      <div className="card-image-container">
        <img src={mobile.image} alt={`${mobile.brand} ${mobile.model}`} className="card-image" />
        <span className={`category-badge ${mobile.category.toLowerCase().replace('-', ' ')}`}>
          {mobile.category}
        </span>
      </div>

      <div className="card-content">
        <h3 className="card-brand">{mobile.brand}</h3>
        <h4 className="card-model">{mobile.model}</h4>
        
        <div className="card-price">
          <span className="price">PKR {mobile.price.toLocaleString()}</span>
        </div>

        <div className="card-specs">
          <div className="spec-item">
            <span className="spec-label">RAM</span>
            <span className="spec-value">{mobile.ram}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Storage</span>
            <span className="spec-value">{mobile.storage}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Camera</span>
            <span className="spec-value">{mobile.camera}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Battery</span>
            <span className="spec-value">{mobile.battery}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Display</span>
            <span className="spec-value">{mobile.display}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Processor</span>
            <span className="spec-value">{mobile.processor}</span>
          </div>
        </div>

        <button onClick={handleWhatsAppBuy} className="btn-buy-whatsapp">
          <span>💬 Buy Now on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCard;
