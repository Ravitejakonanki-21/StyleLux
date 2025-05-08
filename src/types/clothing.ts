
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

// Empty arrays for initial state
export const mockClothingItems: ClothingItem[] = [];
export const mockOutfits: Outfit[] = [];
