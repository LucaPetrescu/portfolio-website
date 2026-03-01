// ─────────────────────────────────────────────────────────────────────────────
// GEAR DATA — Edit this file to add/remove/update gear items
// Drop images into src/assets/images/gear/ and update the image paths
// ─────────────────────────────────────────────────────────────────────────────

export interface GearItem {
  id: string;
  name: string;
  type: string;
  description: string;
  specs: string[];
  image: string; // Replace Unsplash URL with: /assets/images/gear/nikon-d750.jpg
  alt: string;
}

export const gearItems: GearItem[] = [
  {
    id: 'nikon-d750',
    name: 'Nikon D750',
    type: 'Camera Body',
    description:
      'My workhorse. The full-frame sensor handles low light with grace, and the dual-card slot gives peace of mind in remote locations.',
    specs: [
      '24.3MP Full-Frame CMOS',
      'ISO 100–12,800 (expandable to 51,200)',
      '6.5 fps continuous shooting',
      'Tilting 3.2" LCD',
      'Dual SD card slots',
    ],
    image:
      'https://images.unsplash.com/photo-1606986628253-cc5d13c9e5d6?w=800&q=80',
    alt: 'Nikon D750 camera body',
  },
  {
    id: 'nikkor-50mm',
    name: 'Nikkor 50mm f/1.8G',
    type: 'Prime Lens',
    description:
      'The lens that never leaves my bag. Fast, sharp, and light enough to carry all day. Perfect for street, portraits, and low-light scenes.',
    specs: [
      '50mm focal length',
      'f/1.8 maximum aperture',
      'Ultra-quiet AF-S motor',
      '9-blade diaphragm',
      '58mm filter thread',
    ],
    image:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=800&q=80',
    alt: 'Nikkor 50mm prime lens',
  },
  {
    id: 'tamron-24-70',
    name: 'Tamron SP 24-70mm f/2.8',
    type: 'Zoom Lens',
    description:
      'The versatile companion for landscapes and architecture. When I need to capture the grandeur of a place, this lens delivers.',
    specs: [
      '24-70mm zoom range',
      'f/2.8 constant aperture',
      'Vibration Compensation (VC)',
      'USD (Ultrasonic Silent Drive)',
      'Weather-resistant construction',
    ],
    image:
      'https://images.unsplash.com/photo-1617882395721-c4e8a6e5a7e0?w=800&q=80',
    alt: 'Tamron 24-70mm zoom lens',
  },
  {
    id: 'tamron-70-200',
    name: 'Tamron SP 70-200mm f/2.8',
    type: 'Telephoto Lens',
    description:
      'Compression, reach, and bokeh. This lens lets me observe without intrusion — capturing candid moments from a respectful distance.',
    specs: [
      '70-200mm focal length',
      'f/2.8 maximum aperture',
      'eVibration Compensation',
      'Fluorine-coated front element',
      'Internal zoom design',
    ],
    image:
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80',
    alt: 'Tamron 70-200mm telephoto lens',
  },
];
