export interface Mobile {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  processor: string;
  category: 'Flagship' | 'Mid-Range' | 'Budget';
}

export const mobiles: Mobile[] = [
  // Flagship Phones
  {
    id: '1',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 529999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '256GB',
    camera: '48MP Main + 12MP Ultra Wide',
    battery: '4323mAh',
    display: '6.7" Super Retina XDR',
    processor: 'A17 Pro',
    category: 'Flagship'
  },
  {
    id: '2',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 449999,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf7ce3350?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '256GB',
    camera: '200MP Main + 50MP Ultra Wide',
    battery: '5000mAh',
    display: '6.8" Dynamic AMOLED 2X',
    processor: 'Snapdragon 8 Gen 3',
    category: 'Flagship'
  },
  {
    id: '3',
    brand: 'Xiaomi',
    model: '14 Ultra',
    price: 349999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '512GB',
    camera: '50MP Main + 50MP Macro',
    battery: '5300mAh',
    display: '6.73" AMOLED',
    processor: 'Snapdragon 8 Gen 3',
    category: 'Flagship'
  },
  {
    id: '4',
    brand: 'Samsung',
    model: 'Galaxy S24',
    price: 299999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '256GB',
    camera: '50MP Main + 12MP Ultra Wide',
    battery: '4000mAh',
    display: '6.1" Dynamic AMOLED 2X',
    processor: 'Snapdragon 8 Gen 3',
    category: 'Flagship'
  },
  {
    id: '5',
    brand: 'Apple',
    model: 'iPhone 15',
    price: 329999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=600&fit=crop',
    ram: '6GB',
    storage: '128GB',
    camera: '48MP Main + 12MP Ultra Wide',
    battery: '3349mAh',
    display: '6.1" Super Retina XDR',
    processor: 'A16 Bionic',
    category: 'Flagship'
  },

  // Mid-Range Phones
  {
    id: '6',
    brand: 'Xiaomi',
    model: '13 Pro',
    price: 219999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '256GB',
    camera: '50MP Main + 50MP Ultra Wide',
    battery: '4820mAh',
    display: '6.73" AMOLED',
    processor: 'Snapdragon 8 Gen 1',
    category: 'Mid-Range'
  },
  {
    id: '7',
    brand: 'Vivo',
    model: 'X100 Pro',
    price: 249999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '512GB',
    camera: '50MP Main + 50MP Ultra Wide',
    battery: '5000mAh',
    display: '6.78" AMOLED',
    processor: 'MediaTek Dimensity 9300',
    category: 'Mid-Range'
  },
  {
    id: '8',
    brand: 'Oppo',
    model: 'Find X7',
    price: 259999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '512GB',
    camera: '50MP Main + 50MP Ultra Wide',
    battery: '5910mAh',
    display: '6.78" AMOLED',
    processor: 'Snapdragon 8 Gen 3 Leading',
    category: 'Mid-Range'
  },
  {
    id: '9',
    brand: 'Samsung',
    model: 'Galaxy A55',
    price: 189999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '256GB',
    camera: '50MP Main + 12MP Ultra Wide',
    battery: '5000mAh',
    display: '6.4" Super AMOLED',
    processor: 'Exynos 1380',
    category: 'Mid-Range'
  },
  {
    id: '10',
    brand: 'Xiaomi',
    model: '13T Pro',
    price: 199999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '256GB',
    camera: '50MP Main + 50MP Ultra Wide',
    battery: '5000mAh',
    display: '6.82" AMOLED',
    processor: 'MediaTek Dimensity 9200 Ultra',
    category: 'Mid-Range'
  },
  {
    id: '11',
    brand: 'Realme',
    model: '12 Pro Plus',
    price: 159999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '256GB',
    camera: '50MP Main + 50MP Ultra Wide',
    battery: '5000mAh',
    display: '6.7" AMOLED',
    processor: 'Snapdragon 8 Gen 2 Leading',
    category: 'Mid-Range'
  },
  {
    id: '12',
    brand: 'Infinix',
    model: 'Note 30 Pro',
    price: 149999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '12GB',
    storage: '256GB',
    camera: '108MP Main + 50MP Ultra Wide',
    battery: '5000mAh',
    display: '6.78" AMOLED',
    processor: 'MediaTek Helio G99',
    category: 'Mid-Range'
  },

  // Budget Phones
  {
    id: '13',
    brand: 'Xiaomi',
    model: 'Redmi Note 13',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '128GB',
    camera: '108MP Main + 8MP Ultra Wide',
    battery: '5000mAh',
    display: '6.67" IPS LCD',
    processor: 'MediaTek Helio G99',
    category: 'Budget'
  },
  {
    id: '14',
    brand: 'Samsung',
    model: 'Galaxy A15',
    price: 79999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '6GB',
    storage: '128GB',
    camera: '50MP Main + 5MP Ultra Wide',
    battery: '5000mAh',
    display: '6.5" IPS LCD',
    processor: 'Exynos 1280',
    category: 'Budget'
  },
  {
    id: '15',
    brand: 'Realme',
    model: 'C67',
    price: 74999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '128GB',
    camera: '50MP Main + auxiliary',
    battery: '5000mAh',
    display: '6.5" IPS LCD',
    processor: 'MediaTek Helio G85',
    category: 'Budget'
  },
  {
    id: '16',
    brand: 'Vivo',
    model: 'Y100',
    price: 84999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '8GB',
    storage: '256GB',
    camera: '50MP Main + 8MP Ultra Wide',
    battery: '5000mAh',
    display: '6.67" IPS LCD',
    processor: 'MediaTek Helio G99',
    category: 'Budget'
  },
  {
    id: '17',
    brand: 'Oppo',
    model: 'A18',
    price: 79999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '6GB',
    storage: '128GB',
    camera: '50MP Main + 2MP Macro',
    battery: '5000mAh',
    display: '6.56" IPS LCD',
    processor: 'MediaTek Helio G85',
    category: 'Budget'
  },
  {
    id: '18',
    brand: 'Infinix',
    model: 'Smart 8 HD',
    price: 59999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '4GB',
    storage: '64GB',
    camera: '13MP Main + 5MP Ultra Wide',
    battery: '5000mAh',
    display: '6.6" IPS LCD',
    processor: 'MediaTek Helio G37',
    category: 'Budget'
  },
  {
    id: '19',
    brand: 'Xiaomi',
    model: 'Redmi 13',
    price: 69999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '6GB',
    storage: '128GB',
    camera: '50MP Main + 5MP Ultra Wide',
    battery: '5000mAh',
    display: '6.79" IPS LCD',
    processor: 'MediaTek Helio G88',
    category: 'Budget'
  },
  {
    id: '20',
    brand: 'Realme',
    model: 'C53',
    price: 64999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '4GB',
    storage: '64GB',
    camera: '50MP Main + auxiliary',
    battery: '5000mAh',
    display: '6.5" IPS LCD',
    processor: 'Unisoc T612',
    category: 'Budget'
  },
  {
    id: '21',
    brand: 'Samsung',
    model: 'Galaxy A05',
    price: 54999,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop',
    ram: '4GB',
    storage: '64GB',
    camera: '50MP Main + 5MP Ultra Wide',
    battery: '5000mAh',
    display: '6.5" IPS LCD',
    processor: 'MediaTek Helio G85',
    category: 'Budget'
  },
];

export const brands = ['Apple', 'Samsung', 'Xiaomi', 'Vivo', 'Oppo', 'Infinix', 'Realme'];
export const categories = ['Flagship', 'Mid-Range', 'Budget'];
