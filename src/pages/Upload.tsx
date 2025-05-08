
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Image, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ClothingCategory, ClothingColor, ClothingOccasion, ClothingSeason } from '@/types/clothing';

const UploadPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '' as ClothingCategory,
    colors: [] as ClothingColor[],
    seasons: [] as ClothingSeason[],
    occasions: [] as ClothingOccasion[],
    notes: ''
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsUploading(true);
    
    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setIsUploading(false);
      
      // Simulate AI categorization
      setTimeout(() => {
        setIsLoading(true);
        simulateAIProcessing();
      }, 500);
    };
    reader.readAsDataURL(file);
  };
  
  const simulateAIProcessing = () => {
    // Simulate AI processing time
    setTimeout(() => {
      setFormData({
        name: 'Blue Denim Jacket',
        category: 'outerwear',
        colors: ['blue'],
        seasons: ['spring', 'fall'],
        occasions: ['casual'],
        notes: ''
      });
      
      setIsLoading(false);
      setStep(2);
      
      toast({
        title: "AI Analysis Complete",
        description: "We've analyzed your item and suggested some categories.",
      });
    }, 2000);
  };
  
  const handleSave = () => {
    // Simulate saving
    setStep(3);
    toast({
      title: "Item Added Successfully",
      description: "Your clothing item has been added to your closet.",
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-closet-800 mb-8 text-center">Add to Your Wardrobe</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? 'bg-closet-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-closet-700' : 'bg-gray-200'}`}></div>
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? 'bg-closet-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <div className={`h-1 w-16 ${step >= 3 ? 'bg-closet-700' : 'bg-gray-200'}`}></div>
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 3 ? 'bg-closet-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
          </div>
        </div>
        
        {step === 1 && (
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Upload an Image</h2>
                <p className="text-closet-600">Take or upload a photo of your clothing item</p>
              </div>
              
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-closet-700 transition-colors"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                {imagePreview ? (
                  <div className="relative w-full max-w-sm">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="rounded-lg mb-4 mx-auto max-h-64 object-contain"
                    />
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                        <div className="text-white">Analyzing image...</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {isUploading ? (
                      <div className="my-4 flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-closet-700"></div>
                        <p className="mt-4 text-closet-600">Uploading...</p>
                      </div>
                    ) : (
                      <>
                        <Image className="h-16 w-16 text-closet-500 mb-4" />
                        <p className="text-closet-600 mb-2">Drag and drop your image here or click to browse</p>
                        <p className="text-closet-500 text-sm">JPG, PNG or WEBP (max. 5MB)</p>
                      </>
                    )}
                  </>
                )}
                <input 
                  type="file" 
                  id="image-upload" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={isLoading || isUploading}
                />
              </div>
            </CardContent>
          </Card>
        )}
        
        {step === 2 && (
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Edit Item Details</h2>
                <p className="text-closet-600">Confirm or update the AI-suggested information</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  {imagePreview && (
                    <img 
                      src={imagePreview} 
                      alt="Clothing item" 
                      className="rounded-lg mb-4 max-h-80 object-contain mx-auto"
                    />
                  )}
                </div>
                
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <Label htmlFor="name">Item Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({...formData, category: value as ClothingCategory})}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tops">Tops</SelectItem>
                        <SelectItem value="bottoms">Bottoms</SelectItem>
                        <SelectItem value="dresses">Dresses</SelectItem>
                        <SelectItem value="outerwear">Outerwear</SelectItem>
                        <SelectItem value="shoes">Shoes</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Additional fields would go here for colors, seasons, occasions */}
                  
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Add any additional details about this item" 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={handleSave}>Save to Closet</Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {step === 3 && (
          <Card className="bg-white text-center">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Item Added Successfully!</h2>
              <p className="text-closet-600 mb-6">Your item has been added to your virtual closet.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button asChild variant="outline">
                  <a href="/closet">View My Closet</a>
                </Button>
                <Button onClick={() => setStep(1)}>Add Another Item</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default UploadPage;
