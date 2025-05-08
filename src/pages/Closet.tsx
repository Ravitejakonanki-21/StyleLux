
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { mockClothingItems, ClothingItem, ClothingCategory } from '@/types/clothing';
import ClothingCard from '@/components/ClothingCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Closet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState<ClothingItem[]>(mockClothingItems);
  
  const categories: ClothingCategory[] = ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
  
  const filteredItems = (category?: ClothingCategory) => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category ? item.category === category : true;
      return matchesSearch && matchesCategory;
    });
  };

  const getCategoryCount = (category: ClothingCategory) => {
    return items.filter(item => item.category === category).length;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-closet-800">My Closet</h1>
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-3 h-4 w-4 text-closet-500" />
            <Input
              placeholder="Search your clothes..."
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-fashion-light">
            <TabsTrigger value="all">All ({items.length})</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)} ({getCategoryCount(category)})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredItems().map(item => (
                <ClothingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredItems(category).map(item => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Closet;
