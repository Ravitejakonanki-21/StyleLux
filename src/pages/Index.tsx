
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Camera, Shirt, Upload } from 'lucide-react';

const Index: React.FC = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8 text-fashion-accent" />,
      title: 'Digitize Your Wardrobe',
      description: 'Upload images of your clothes and let our AI categorize them by type, color, season, and occasion.'
    },
    {
      icon: <Shirt className="h-8 w-8 text-fashion-accent" />,
      title: 'Smart Outfit Suggestions',
      description: 'Get personalized outfit recommendations based on weather, occasion, or your personal style.'
    },
    {
      icon: <Camera className="h-8 w-8 text-fashion-accent" />,
      title: 'Virtual Try-On',
      description: 'Preview outfit combinations in augmented reality before deciding what to wear.'
    }
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-b from-fashion-light to-fashion-neutral min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-closet-800 animate-slide-up">
            Your Smart Wardrobe Assistant
          </h1>
          <p className="text-xl text-closet-700 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Organize your closet, discover new outfit combinations, and make getting dressed a breeze with our AI-powered virtual closet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="bg-closet-700 hover:bg-closet-800">
              <Link to="/upload">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-closet-700 text-closet-700">
              <Link to="/closet">View Demo Closet</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-closet-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center animate-slide-up" 
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="rounded-full bg-fashion-light p-4 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-closet-800">{feature.title}</h3>
                <p className="text-closet-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-fashion-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-closet-800">Ready to Transform Your Wardrobe?</h2>
            <p className="text-lg text-closet-700 max-w-2xl mx-auto mb-8">
              Join thousands of users who have simplified their daily outfit decisions with Wardrobe Vision.
            </p>
            <Button asChild size="lg" className="bg-closet-700 hover:bg-closet-800">
              <Link to="/upload">Upload Your First Item</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
