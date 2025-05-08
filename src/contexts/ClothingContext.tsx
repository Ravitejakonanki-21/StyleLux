
import React, { createContext, useContext, useState } from 'react';
import { ClothingItem, mockClothingItems } from '@/types/clothing';
import { v4 as uuidv4 } from 'uuid';

interface ClothingContextType {
  clothingItems: ClothingItem[];
  addClothingItem: (item: Omit<ClothingItem, 'id' | 'dateAdded'>) => void;
  toggleFavorite: (id: string) => void;
}

const ClothingContext = createContext<ClothingContextType | undefined>(undefined);

export const ClothingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>(mockClothingItems);

  const addClothingItem = (item: Omit<ClothingItem, 'id' | 'dateAdded'>) => {
    const newItem: ClothingItem = {
      ...item,
      id: uuidv4(),
      dateAdded: new Date().toISOString(),
    };

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
