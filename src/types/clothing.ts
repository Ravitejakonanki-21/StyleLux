
export type ClothingCategory = 
  | 'tops' 
  | 'bottoms' 
  | 'dresses' 
  | 'outerwear' 
  | 'shoes' 
  | 'accessories';

export type ClothingSeason = 
  | 'spring' 
  | 'summer' 
  | 'fall' 
  | 'winter' 
  | 'all-season';

export type ClothingOccasion = 
  | 'casual' 
  | 'formal' 
  | 'business' 
  | 'athletic' 
  | 'special';

export type ClothingColor = 
  | 'black' 
  | 'white' 
  | 'gray' 
  | 'brown' 
  | 'beige' 
  | 'red' 
  | 'orange' 
  | 'yellow' 
  | 'green' 
  | 'blue' 
  | 'purple' 
  | 'pink' 
  | 'multicolor';

export interface ClothingItem {
  id: string;
  imageUrl: string;
  name: string;
  category: ClothingCategory;
  seasons: ClothingSeason[];
  occasions: ClothingOccasion[];
  colors: ClothingColor[];
  dateAdded: string;
  favorite: boolean;
}

export interface Outfit {
  id: string;
  name: string;
  items: ClothingItem[];
  occasion: ClothingOccasion;
  season: ClothingSeason;
  favorite: boolean;
}

// Mock data for initial display
export const mockClothingItems: ClothingItem[] = [
  {
    id: '1',
    imageUrl: '/placeholder.svg',
    name: 'White T-Shirt',
    category: 'tops',
    seasons: ['spring', 'summer', 'fall', 'all-season'],
    occasions: ['casual'],
    colors: ['white'],
    dateAdded: '2023-05-15',
    favorite: true
  },
  {
    id: '2',
    imageUrl: '/placeholder.svg',
    name: 'Blue Jeans',
    category: 'bottoms',
    seasons: ['fall', 'winter', 'spring', 'all-season'],
    occasions: ['casual'],
    colors: ['blue'],
    dateAdded: '2023-05-15',
    favorite: false
  },
  {
    id: '3',
    imageUrl: '/placeholder.svg',
    name: 'Black Dress',
    category: 'dresses',
    seasons: ['all-season'],
    occasions: ['formal', 'special'],
    colors: ['black'],
    dateAdded: '2023-05-16',
    favorite: true
  },
  {
    id: '4',
    imageUrl: '/placeholder.svg',
    name: 'Brown Leather Jacket',
    category: 'outerwear',
    seasons: ['fall', 'winter'],
    occasions: ['casual'],
    colors: ['brown'],
    dateAdded: '2023-05-17',
    favorite: true
  },
  {
    id: '5',
    imageUrl: '/placeholder.svg',
    name: 'Athletic Shoes',
    category: 'shoes',
    seasons: ['all-season'],
    occasions: ['casual', 'athletic'],
    colors: ['white', 'gray'],
    dateAdded: '2023-05-17',
    favorite: false
  },
  {
    id: '6',
    imageUrl: '/placeholder.svg',
    name: 'Gold Necklace',
    category: 'accessories',
    seasons: ['all-season'],
    occasions: ['formal', 'special', 'casual'],
    colors: ['yellow'],
    dateAdded: '2023-05-18',
    favorite: true
  },
];

export const mockOutfits: Outfit[] = [
  {
    id: '1',
    name: 'Casual Day Out',
    items: [mockClothingItems[0], mockClothingItems[1], mockClothingItems[4]],
    occasion: 'casual',
    season: 'spring',
    favorite: true
  },
  {
    id: '2',
    name: 'Evening Event',
    items: [mockClothingItems[2], mockClothingItems[5]],
    occasion: 'formal',
    season: 'all-season',
    favorite: false
  }
];
