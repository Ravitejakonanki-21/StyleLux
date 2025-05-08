
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockClothingItems, ClothingCategory, ClothingItem } from '@/types/clothing';
import ClothingCard from '@/components/ClothingCard';
import { Camera, Download, Image, Upload } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TryOn: React.FC = () => {
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Record<ClothingCategory, ClothingItem | null>>({
    tops: null,
    bottoms: null,
    dresses: null,
    outerwear: null,
    shoes: null,
    accessories: null
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const filteredItems = (category: ClothingCategory) => {
    return mockClothingItems.filter(item => item.category === category);
  };
  
  const handleSelectItem = (item: ClothingItem) => {
    setSelectedItems({
      ...selectedItems,
      [item.category]: item
    });
  };
  
  const handleModelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setModelImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleGeneratePreview = () => {
    setIsGenerating(true);
    // Simulate generating a preview
    setTimeout(() => {
      setPreviewImage(modelImage);
      setIsGenerating(false);
    }, 2000);
  };
  
  const categories: ClothingCategory[] = ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories'];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-closet-800 mb-8">Virtual Try-On</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-white mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upload Your Photo</h2>
                {modelImage ? (
                  <div className="relative">
                    <img 
                      src={modelImage} 
                      alt="Model" 
                      className="w-full rounded-lg mb-4 max-h-80 object-cover"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setModelImage(null)}
                      className="absolute top-2 right-2"
                    >
                      Change
                    </Button>
                  </div>
                ) : (
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-closet-700 transition-colors mb-4"
                    onClick={() => document.getElementById('model-upload')?.click()}
                  >
                    <Camera className="h-12 w-12 text-closet-500 mb-4" />
                    <p className="text-closet-600 mb-2">Upload a photo of yourself</p>
                    <p className="text-closet-500 text-sm">For best results, use a full-body photo with a plain background</p>
                    <input 
                      type="file" 
                      id="model-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleModelUpload}
                    />
                  </div>
                )}
                
                <p className="text-sm text-closet-500 mb-6">
                  Your photo will only be used locally for the virtual try-on and won't be uploaded to any server.
                </p>
                
                <Button 
                  className="w-full" 
                  disabled={!modelImage || !Object.values(selectedItems).some(item => item !== null)}
                  onClick={handleGeneratePreview}
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>Generate Preview</>
                  )}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Selected Items</h2>
                <div className="space-y-3">
                  {Object.entries(selectedItems).map(([category, item]) => (
                    item && (
                      <div key={category} className="flex items-center gap-3 p-2 bg-fashion-light rounded-md">
                        <div className="h-12 w-12 bg-white rounded-md overflow-hidden">
                          <img src={item.imageUrl} alt={item.name} className="object-cover h-full w-full" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-closet-600 capitalize">{category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedItems({...selectedItems, [category]: null})}
                        >
                          ×
                        </Button>
                      </div>
                    )
                  ))}
                  
                  {!Object.values(selectedItems).some(item => item !== null) && (
                    <p className="text-center text-closet-500 py-4">No items selected yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-white mb-6">
              <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
                {previewImage ? (
                  <div className="text-center">
                    <img 
                      src={previewImage} 
                      alt="Virtual try-on preview" 
                      className="max-h-96 rounded-lg mb-4"
                    />
                    <p className="text-closet-600 mb-4">Here's your virtual try-on preview!</p>
                    <div className="flex gap-3 justify-center">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Save Image
                      </Button>
                      <Button onClick={() => setPreviewImage(null)}>
                        Try Different Items
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Image className="h-16 w-16 text-closet-500 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">Virtual Try-On Preview</h3>
                    <p className="text-closet-600 mb-4">
                      Upload your photo and select clothing items to see them virtually on you!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Select Clothes to Try On</h2>
                
                <Tabs defaultValue="tops">
                  <TabsList className="bg-fashion-light mb-4">
                    {categories.map(category => (
                      <TabsTrigger key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {categories.map(category => (
                    <TabsContent key={category} value={category}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {filteredItems(category).map(item => (
                          <ClothingCard 
                            key={item.id} 
                            item={item}
                            onClick={() => handleSelectItem(item)}
                            className={selectedItems[category]?.id === item.id ? 'ring-2 ring-closet-700' : ''}
                          />
                        ))}
                        
                        {filteredItems(category).length === 0 && (
                          <div className="col-span-full text-center py-8 text-closet-500">
                            No {category} found in your closet
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TryOn;
