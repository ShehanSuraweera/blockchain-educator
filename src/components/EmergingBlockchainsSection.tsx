
import { Zap, Layers, Shield, Mountain, BookOpen, Link, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EmergingBlockchainsSection = () => {
  const blockchains = [
    {
      name: 'Ethereum 2.0',
      description: 'Proof of Stake upgrade for better efficiency',
      subtitle: 'The green evolution of Ethereum',
      icon: Zap,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50'
    },
    {
      name: 'Solana',
      description: 'Lightning-fast transactions at low cost',
      subtitle: 'Speed meets scalability',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      name: 'Polygon (MATIC)',
      description: 'Ethereum scaling solution network',
      subtitle: 'Making Ethereum faster & cheaper',
      icon: Layers,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      name: 'Avalanche',
      description: 'High-performance smart contracts platform',
      subtitle: 'Built for enterprise applications',
      icon: Mountain,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50'
    },
    {
      name: 'Cardano',
      description: 'Research-driven blockchain development',
      subtitle: 'Academic approach to blockchain',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      name: 'Polkadot',
      description: 'Connecting different blockchains together',
      subtitle: 'The internet of blockchains',
      icon: Link,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      name: 'Cosmos',
      description: 'Network of interconnected blockchains',
      subtitle: 'Blockchain ecosystem hub',
      icon: Network,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Emerging Blockchains
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the next generation of blockchain platforms that are pushing the boundaries of what's possible in the decentralized world.
          </p>
        </div>

        {/* Blockchain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blockchains.map((blockchain, index) => {
            const IconComponent = blockchain.icon;
            
            return (
              <Card key={blockchain.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${blockchain.bgColor} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${blockchain.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{blockchain.name}</h3>
                    <p className="text-gray-600 mb-2 text-sm">{blockchain.description}</p>
                    <p className="text-xs text-gray-500 italic">{blockchain.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Why So Many Platforms?</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Each blockchain platform is designed to solve specific problems - from scalability and speed to interoperability and sustainability. This diversity drives innovation across the entire ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Network className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">The Future is Multi-Chain</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Rather than one blockchain ruling them all, the future likely involves multiple specialized blockchains working together, each optimized for different use cases and requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmergingBlockchainsSection;
