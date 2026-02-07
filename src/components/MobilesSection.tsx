import type { Mobile } from '../data/mobiles';
import MobileCard from './MobileCard';

interface MobilesSectionProps {
  mobiles: Mobile[];
  allMobiles: Mobile[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MobilesSection = ({
  mobiles,
  allMobiles,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
}: MobilesSectionProps) => {
  const brands: string[] = ['all', ...Array.from(new Set(allMobiles.map((m: Mobile) => m.brand)))];
  const categories = ['all', 'Flagship', 'Mid-Range', 'Budget'] as const;
  const maxPrice = Math.max(...allMobiles.map((m: Mobile) => m.price));

  return (
    <section id="mobiles" className="mobiles-section">
      <div className="container">
        <h2 className="section-title">Our Mobile Collection</h2>
        <p className="section-subtitle">Handpicked selection of the latest and best mobile phones</p>

        {/* Filters Section */}
        <div className="filters-container">
          {/* Search Bar */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* Filter Row */}
          <div className="filters-row">
            {/* Category Filter */}
            <div className="filter-group">
              <label>Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div className="filter-group">
              <label>Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="filter-select"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'all' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <label>Max Price: PKR {priceRange[1].toLocaleString()}</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="price-slider"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setPriceRange([0, maxPrice]);
                setSearchQuery('');
              }}
              className="btn-reset"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing <strong>{mobiles.length}</strong> of <strong>{allMobiles.length}</strong> phones</p>
        </div>

        {/* Mobile Cards Grid */}
        {mobiles.length > 0 ? (
          <div className="mobiles-grid">
            {mobiles.map(mobile => (
              <MobileCard key={mobile.id} mobile={mobile} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>😔 No phones found matching your filters</p>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobilesSection;
