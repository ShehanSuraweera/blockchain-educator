
import { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [animatedBlocks, setAnimatedBlocks] = useState([false, false, false, false]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedBlocks(prev => {
        const newState = [...prev];
        const randomIndex = Math.floor(Math.random() * newState.length);
        newState[randomIndex] = !newState[randomIndex];
        return newState;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Animated Blockchain Visualization */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((block, index) => (
              <div key={block} className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-lg border-2 border-blue-300 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center transition-all duration-500 ${
                    animatedBlocks[index] ? 'scale-125 border-blue-500 shadow-lg' : ''
                  }`}
                >
                  <span className="text-blue-600 font-bold">{block}</span>
                </div>
                {index < 3 && (
                  <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          Blockchain
          <br />
          <span className="text-4xl md:text-6xl">Made Simple</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the revolutionary technology that's changing the world. 
          <br className="hidden md:block" />
          No technical background required - just curiosity!
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
            <Shield className="text-blue-500" size={20} />
            <span className="text-gray-700 font-medium">Secure & Transparent</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200">
            <Globe className="text-purple-500" size={20} />
            <span className="text-gray-700 font-medium">Decentralized</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-200">
            <Zap className="text-indigo-500" size={20} />
            <span className="text-gray-700 font-medium">Revolutionary</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToNext}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Learning
          <ChevronDown className="ml-2 animate-bounce" size={20} />
        </Button>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
        </div>
        <div className="absolute top-32 right-20 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
