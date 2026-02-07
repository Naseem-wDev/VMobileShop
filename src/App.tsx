import { useState, useEffect } from 'react';
import type { Mobile } from './data/mobiles';
import { mobiles } from './data/mobiles';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedBrands from './components/FeaturedBrands';
import MobilesSection from './components/MobilesSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600000]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredMobiles, setFilteredMobiles] = useState<Mobile[]>(mobiles);

  useEffect(() => {
    let filtered = mobiles;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(m => m.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(m => m.brand === selectedBrand);
    }

    // Price filter
    filtered = filtered.filter(m => m.price >= priceRange[0] && m.price <= priceRange[1]);

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(m =>
        m.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredMobiles(filtered);
  }, [selectedCategory, selectedBrand, priceRange, searchQuery]);

  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <FeaturedBrands />
      <MobilesSection
        mobiles={filteredMobiles}
        allMobiles={mobiles}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <WhyChooseUs />
      <AboutUs />
      <ContactUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
