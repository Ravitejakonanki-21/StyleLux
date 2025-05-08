
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClothingItem } from '@/types/clothing';
import { Heart, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClothingCardProps {
  item: ClothingItem;
  onClick?: () => void;
  className?: string;
}

const ClothingCard: React.FC<ClothingCardProps> = ({ item, onClick, className }) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer bg-white group", 
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {item.favorite && (
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-wrap gap-1">
            {item.colors && item.colors.map((color, index) => (
              <span key={index} className="inline-flex items-center text-xs bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                <Tag className="h-3 w-3 mr-1" />{color}
              </span>
            ))}
          </div>
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm truncate">{item.name}</h3>
        <div className="flex mt-1 gap-1">
          {item.colors && item.colors.map((color, index) => (
            <div 
              key={index} 
              className="h-3 w-3 rounded-full border border-gray-200" 
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
