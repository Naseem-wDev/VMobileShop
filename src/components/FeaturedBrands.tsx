

const FeaturedBrands = () => {
  const brands = [
    { name: 'Apple', icon: '🍎' },
    { name: 'Samsung', icon: '📱' },
    { name: 'Xiaomi', icon: '🔴' },
    { name: 'Vivo', icon: '🎯' },
    { name: 'Oppo', icon: '🌟' },
    { name: 'Infinix', icon: '⚡' },
    { name: 'Realme', icon: '🚀' },
  ];

  return (
    <section className="featured-brands">
      <div className="container">
        <h2 className="section-title">Featured Brands</h2>
        <p className="section-subtitle">We carry authentic phones from the world's leading manufacturers</p>
        
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-icon">{brand.icon}</div>
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
