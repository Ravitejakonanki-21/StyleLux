
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClothingItem } from '@/types/clothing';
import { v4 as uuidv4 } from 'uuid';

interface ClothingContextType {
  clothingItems: ClothingItem[];
  addClothingItem: (item: Omit<ClothingItem, 'id' | 'dateAdded'>) => void;
  toggleFavorite: (id: string) => void;
}

const STORAGE_KEY = 'closet_clothing_items';

const ClothingContext = createContext<ClothingContextType | undefined>(undefined);

export const ClothingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>(() => {
    // Try to load items from localStorage on initial render
    const savedItems = localStorage.getItem(STORAGE_KEY);
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save to localStorage whenever clothingItems changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clothingItems));
    console.log('Saved items to storage:', clothingItems);
  }, [clothingItems]);

  const addClothingItem = (item: Omit<ClothingItem, 'id' | 'dateAdded'>) => {
    const newItem: ClothingItem = {
      ...item,
      id: uuidv4(),
      dateAdded: new Date().toISOString(),
    };

    console.log('Adding new item:', newItem);
    setClothingItems(prev => [newItem, ...prev]);
  };

  const toggleFavorite = (id: string) => {
    setClothingItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <ClothingContext.Provider value={{ clothingItems, addClothingItem, toggleFavorite }}>
      {children}
    </ClothingContext.Provider>
  );
};

export const useClothing = (): ClothingContextType => {
  const context = useContext(ClothingContext);
  if (context === undefined) {
    throw new Error('useClothing must be used within a ClothingProvider');
  }
  return context;
};
