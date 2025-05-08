import React from 'react';
import Layout from '@/components/Layout';
import { mockOutfits } from '@/types/clothing';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart } from 'lucide-react';

const Outfits: React.FC = () => {
  const occasions = ["casual", "formal", "business", "athletic", "special"];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-closet-800 mb-8">Outfit Suggestions</h1>
        
        <div className="bg-fashion-primary rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Today's Recommendations</h2>
          <p className="text-closet-700 mb-4">Based on the current weather and your calendar</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-4">
                <div className="text-sm text-closet-600 mb-2">Morning Meeting</div>
                <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <div className="border-r border-white">
                      <img src="/placeholder.svg" alt="Top" className="object-cover h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-2/3 border-b border-white">
                        <img src="/placeholder.svg" alt="Bottom" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-1/3">
                        <img src="/placeholder.svg" alt="Shoes" className="object-cover h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium">Business Casual</h3>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline" className="bg-fashion-light">Business</Badge>
                  <span className="text-xs text-closet-600">58°F Cloudy</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-4">
                <div className="text-sm text-closet-600 mb-2">Lunch Date</div>
                <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <div className="border-r border-white">
                      <img src="/placeholder.svg" alt="Top" className="object-cover h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-2/3 border-b border-white">
                        <img src="/placeholder.svg" alt="Bottom" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-1/3">
                        <img src="/placeholder.svg" alt="Shoes" className="object-cover h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium">Smart Casual</h3>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline" className="bg-fashion-light">Casual</Badge>
                  <span className="text-xs text-closet-600">61°F Sunny</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-4">
                <div className="text-sm text-closet-600 mb-2">Evening Event</div>
                <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    <div className="border-r border-white">
                      <img src="/placeholder.svg" alt="Dress" className="object-cover h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-2/3 border-b border-white">
                        <img src="/placeholder.svg" alt="Accessory" className="object-cover h-full w-full" />
                      </div>
                      <div className="h-1/3">
                        <img src="/placeholder.svg" alt="Shoes" className="object-cover h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium">Evening Elegance</h3>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline" className="bg-fashion-light">Formal</Badge>
                  <span className="text-xs text-closet-600">55°F Clear</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="bg-fashion-light mb-6">
            <TabsTrigger value="all">All Outfits</TabsTrigger>
            {occasions.map(occasion => (
              <TabsTrigger key={occasion} value={occasion}>
                {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </TabsTrigger>
            ))}
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockOutfits.map(outfit => (
                <Card key={outfit.id} className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                      <div className="grid grid-cols-2 h-full">
                        {outfit.items.length > 0 && (
                          <div className={outfit.items.length === 1 ? "col-span-2" : "border-r border-white"}>
                            <img 
                              src={outfit.items[0].imageUrl} 
                              alt={outfit.items[0].name} 
                              className="object-cover h-full w-full" 
                            />
                          </div>
                        )}
                        {outfit.items.length > 1 && (
                          <div className="flex flex-col">
                            <div className={outfit.items.length === 2 ? "h-full" : "h-2/3 border-b border-white"}>
                              <img 
                                src={outfit.items[1].imageUrl} 
                                alt={outfit.items[1].name} 
                                className="object-cover h-full w-full" 
                              />
                            </div>
                            {outfit.items.length > 2 && (
                              <div className="h-1/3">
                                <img 
                                  src={outfit.items[2].imageUrl} 
                                  alt={outfit.items[2].name} 
                                  className="object-cover h-full w-full" 
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {outfit.favorite && (
                        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium">{outfit.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <Badge variant="outline" className="bg-fashion-light">
                        {outfit.occasion.charAt(0).toUpperCase() + outfit.occasion.slice(1)}
                      </Badge>
                      <span className="text-xs text-closet-600">
                        {outfit.season === 'all-season' ? 'All Season' : outfit.season.charAt(0).toUpperCase() + outfit.season.slice(1)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {occasions.map(occasion => (
            <TabsContent key={occasion} value={occasion}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockOutfits.filter(outfit => outfit.occasion === occasion).map(outfit => (
                  <Card key={outfit.id} className="bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                        <div className="grid grid-cols-2 h-full">
                          {outfit.items.length > 0 && (
                            <div className={outfit.items.length === 1 ? "col-span-2" : "border-r border-white"}>
                              <img 
                                src={outfit.items[0].imageUrl} 
                                alt={outfit.items[0].name} 
                                className="object-cover h-full w-full" 
                              />
                            </div>
                          )}
                          {outfit.items.length > 1 && (
                            <div className="flex flex-col">
                              <div className={outfit.items.length === 2 ? "h-full" : "h-2/3 border-b border-white"}>
                                <img 
                                  src={outfit.items[1].imageUrl} 
                                  alt={outfit.items[1].name} 
                                  className="object-cover h-full w-full" 
                                />
                              </div>
                              {outfit.items.length > 2 && (
                                <div className="h-1/3">
                                  <img 
                                    src={outfit.items[2].imageUrl} 
                                    alt={outfit.items[2].name} 
                                    className="object-cover h-full w-full" 
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        {outfit.favorite && (
                          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium">{outfit.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <Badge variant="outline" className="bg-fashion-light">
                          {outfit.occasion.charAt(0).toUpperCase() + outfit.occasion.slice(1)}
                        </Badge>
                        <span className="text-xs text-closet-600">
                          {outfit.season === 'all-season' ? 'All Season' : outfit.season.charAt(0).toUpperCase() + outfit.season.slice(1)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="favorites">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockOutfits.filter(outfit => outfit.favorite).map(outfit => (
                <Card key={outfit.id} className="bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                      <div className="grid grid-cols-2 h-full">
                        {outfit.items.length > 0 && (
                          <div className={outfit.items.length === 1 ? "col-span-2" : "border-r border-white"}>
                            <img 
                              src={outfit.items[0].imageUrl} 
                              alt={outfit.items[0].name} 
                              className="object-cover h-full w-full" 
                            />
                          </div>
                        )}
                        {outfit.items.length > 1 && (
                          <div className="flex flex-col">
                            <div className={outfit.items.length === 2 ? "h-full" : "h-2/3 border-b border-white"}>
                              <img 
                                src={outfit.items[1].imageUrl} 
                                alt={outfit.items[1].name} 
                                className="object-cover h-full w-full" 
                              />
                            </div>
                            {outfit.items.length > 2 && (
                              <div className="h-1/3">
                                <img 
                                  src={outfit.items[2].imageUrl} 
                                  alt={outfit.items[2].name} 
                                  className="object-cover h-full w-full" 
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {outfit.favorite && (
                        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium">{outfit.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <Badge variant="outline" className="bg-fashion-light">
                        {outfit.occasion.charAt(0).toUpperCase() + outfit.occasion.slice(1)}
                      </Badge>
                      <span className="text-xs text-closet-600">
                        {outfit.season === 'all-season' ? 'All Season' : outfit.season.charAt(0).toUpperCase() + outfit.season.slice(1)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Outfits;
