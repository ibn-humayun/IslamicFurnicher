export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  videoId?: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'sofa-mc-3801',
    name: 'Corner Sofa MC-3801',
    price: 38500,
    category: 'sofa',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/C-3801.jpg',
    videoId: '1jWAqCpmwRs'
  },
  {
    id: '2',
    slug: 'sofa-c-3802',
    name: 'Corner Sofa C-3802',
    price: 38500,
    category: 'sofa',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/C-3802.jpg',
    videoId: '1jWAqCpmwRs'
  },
  {
    id: '3',
    slug: 'sofa-c-3803',
    name: 'Corner Sofa C-3803',
    price: 38500,
    category: 'sofa',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/C-3803.jpg',
    videoId: '1jWAqCpmwRs'
  },
  {
    id: '4',
    slug: 'wooden-bed-d-6701',
    name: 'Wooden Bed D-6701',
    price: 25000,
    category: 'bedroom',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/D-6701.jpg',
    videoId: '1jWAqCpmwRs'
  },
  {
    id: '5',
    slug: 'segun-sofa-c-7501',
    name: 'Segun Sofa C-7501',
    price: 45500,
    category: 'sofa',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/C-7501.jpg',
    videoId: '1jWAqCpmwRs'
  },
  {
    id: '6',
    slug: 'dining-table-d-6701',
    name: 'Dining Table D-6701',
    price: 25000,
    category: 'dining',
    image: 'https://offer.islamicbazar.com.bd/wp-content/uploads/2024/01/D-01.jpg',
    videoId: '1jWAqCpmwRs'
  }
];
