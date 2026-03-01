// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — Edit this file to add/remove/update portfolio items
// Drop images into src/assets/images/places/<location>/ and reference here
// ─────────────────────────────────────────────────────────────────────────────

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: 'places' | 'portraits' | 'street';
  subcategory?: string;
  image: string; // relative path from /public or Unsplash URL
  alt: string;
  year?: number;
  featured?: boolean;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface FeaturedDestination {
  id: string;
  name: string;
  country: string;
  image: string;
  imageCount: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// PLACES
// Replace Unsplash URLs with local paths like: /assets/images/places/morocco/image1.jpg
// ─────────────────────────────────────────────────────────────────────────────

export const placesPortfolio: PortfolioItem[] = [
  // Morocco
  {
    id: 'morocco-1',
    title: 'Golden Hour in Marrakech',
    location: 'Morocco',
    category: 'places',
    subcategory: 'morocco',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
    alt: 'Marrakech medina at golden hour',
    year: 2024,
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'morocco-2',
    title: 'Sahara Dusk',
    location: 'Morocco',
    category: 'places',
    subcategory: 'morocco',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    alt: 'Sahara desert dunes at dusk',
    year: 2024,
    aspectRatio: 'landscape',
  },
  {
    id: 'morocco-3',
    title: 'Blue City Silence',
    location: 'Morocco',
    category: 'places',
    subcategory: 'morocco',
    image: 'https://images.unsplash.com/photo-1553708881-112a574ef8ac?w=800&q=80',
    alt: 'Chefchaouen blue alleyways',
    year: 2024,
    aspectRatio: 'square',
  },
  // Turkey
  {
    id: 'turkey-1',
    title: 'Cappadocia at Dawn',
    location: 'Turkey',
    category: 'places',
    subcategory: 'turkey',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80',
    alt: 'Hot air balloons over Cappadocia at dawn',
    year: 2023,
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'turkey-2',
    title: 'Istanbul Minarets',
    location: 'Turkey',
    category: 'places',
    subcategory: 'turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    alt: 'Istanbul skyline with minarets',
    year: 2023,
    aspectRatio: 'portrait',
  },
  // Prague
  {
    id: 'prague-1',
    title: 'Bridge at Fog',
    location: 'Prague',
    category: 'places',
    subcategory: 'prague',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
    alt: 'Charles Bridge in morning fog',
    year: 2023,
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'prague-2',
    title: 'Old Town Square',
    location: 'Prague',
    category: 'places',
    subcategory: 'prague',
    image: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&q=80',
    alt: 'Prague Old Town Square at night',
    year: 2023,
    aspectRatio: 'portrait',
  },
  // Belgium
  {
    id: 'belgium-1',
    title: 'Bruges Canals',
    location: 'Belgium',
    category: 'places',
    subcategory: 'belgium',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
    alt: 'Bruges canals with medieval buildings',
    year: 2022,
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'belgium-2',
    title: 'Grand Place',
    location: 'Belgium',
    category: 'places',
    subcategory: 'belgium',
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80',
    alt: 'Brussels Grand Place at night',
    year: 2022,
    aspectRatio: 'landscape',
  },
  // Poland
  {
    id: 'poland-1',
    title: 'Krakow Winter',
    location: 'Poland',
    category: 'places',
    subcategory: 'poland',
    image: 'https://images.unsplash.com/photo-1607427293702-036707b62a5b?w=800&q=80',
    alt: 'Krakow old town in winter snow',
    year: 2023,
    featured: true,
    aspectRatio: 'landscape',
  },
  // Paris
  {
    id: 'paris-1',
    title: 'Eiffel at Blue Hour',
    location: 'Paris',
    category: 'places',
    subcategory: 'paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    alt: 'Eiffel Tower at blue hour',
    year: 2024,
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'paris-2',
    title: 'Montmartre Steps',
    location: 'Paris',
    category: 'places',
    subcategory: 'paris',
    image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=800&q=80',
    alt: 'Montmartre steps in Paris',
    year: 2024,
    aspectRatio: 'portrait',
  },
  // Greece
  {
    id: 'greece-1',
    title: 'Santorini Twilight',
    location: 'Greece',
    category: 'places',
    subcategory: 'greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    alt: 'Santorini at twilight with blue domes',
    year: 2023,
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'greece-2',
    title: 'Aegean Blue',
    location: 'Greece',
    category: 'places',
    subcategory: 'greece',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
    alt: 'Aegean sea with white buildings',
    year: 2023,
    aspectRatio: 'portrait',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTRAITS
// Replace Unsplash URLs with local paths like: /assets/images/portraits/image1.jpg
// ─────────────────────────────────────────────────────────────────────────────

export const portraitsPortfolio: PortfolioItem[] = [
  {
    id: 'portrait-1',
    title: 'Berber Elder',
    location: 'Morocco',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Portrait of a Berber elder man',
    year: 2024,
    aspectRatio: 'portrait',
  },
  {
    id: 'portrait-2',
    title: 'Woman of Istanbul',
    location: 'Turkey',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    alt: 'Portrait of a woman in Istanbul',
    year: 2023,
    aspectRatio: 'portrait',
  },
  {
    id: 'portrait-3',
    title: 'Market Vendor',
    location: 'Morocco',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    alt: 'Portrait of a market vendor',
    year: 2024,
    aspectRatio: 'portrait',
  },
  {
    id: 'portrait-4',
    title: 'Fisherman at Dawn',
    location: 'Greece',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    alt: 'Fisherman at dawn on the Aegean',
    year: 2023,
    aspectRatio: 'portrait',
  },
  {
    id: 'portrait-5',
    title: 'Parisian Reverie',
    location: 'France',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    alt: 'Woman looking out window in Paris',
    year: 2024,
    aspectRatio: 'portrait',
  },
  {
    id: 'portrait-6',
    title: 'Old Soul',
    location: 'Poland',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80',
    alt: 'Elderly man with expressive face',
    year: 2023,
    aspectRatio: 'portrait',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STREET
// Replace Unsplash URLs with local paths like: /assets/images/street/image1.jpg
// ─────────────────────────────────────────────────────────────────────────────

export const streetPortfolio: PortfolioItem[] = [
  {
    id: 'street-1',
    title: 'Medina Rush',
    location: 'Morocco',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    alt: 'Busy medina street in Morocco',
    year: 2024,
    aspectRatio: 'portrait',
  },
  {
    id: 'street-2',
    title: 'Rain on Cobblestones',
    location: 'Prague',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1519677584237-752f8853252e?w=800&q=80',
    alt: 'Rain falling on Prague cobblestones',
    year: 2023,
    aspectRatio: 'landscape',
  },
  {
    id: 'street-3',
    title: 'Istanbul Spice',
    location: 'Turkey',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    alt: 'Colorful spices in Istanbul market',
    year: 2023,
    aspectRatio: 'square',
  },
  {
    id: 'street-4',
    title: 'Under the Arc',
    location: 'Paris',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80',
    alt: 'Street scene under Paris arcade',
    year: 2024,
    aspectRatio: 'portrait',
  },
  {
    id: 'street-5',
    title: 'Evening Tram',
    location: 'Belgium',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
    alt: 'Evening tram in Belgian city',
    year: 2022,
    aspectRatio: 'landscape',
  },
  {
    id: 'street-6',
    title: 'Krakow Shadow',
    location: 'Poland',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=800&q=80',
    alt: 'Dramatic shadow on Krakow street',
    year: 2023,
    aspectRatio: 'portrait',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED DESTINATIONS (shown on home page)
// ─────────────────────────────────────────────────────────────────────────────

export const featuredDestinations: FeaturedDestination[] = [
  {
    id: 'morocco',
    name: 'Morocco',
    country: 'North Africa',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80',
    imageCount: 3,
  },
  {
    id: 'turkey',
    name: 'Cappadocia',
    country: 'Turkey',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80',
    imageCount: 2,
  },
  {
    id: 'greece',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
    imageCount: 2,
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    imageCount: 2,
  },
];

export const heroImage =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85';
