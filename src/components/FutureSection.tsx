
import { useState } from 'react';
import { Rocket, Globe, Zap, Brain, Shield, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FutureSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const futureTopics = [
    {
      icon: Globe,
      title: 'Web3 Revolution',
      subtitle: 'The decentralized internet',
      description: 'Moving from Web2 (controlled by big tech) to Web3 (owned by users)',
      details: [
        'Users own their data and digital assets',
        'No more dependency on centralized platforms',
        'Decentralized social media, storage, and applications',
        'Creators get direct compensation without middlemen'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Metaverse Economy',
      subtitle: 'Virtual worlds with real value',
      description: 'Digital worlds where you can own land, items, and experiences as NFTs',
      details: [
        'Virtual real estate worth millions of dollars',
        'Digital fashion and collectibles',
        'Play-to-earn gaming economies',
        'Virtual concerts and events with real ticket sales'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI + Blockchain',
      subtitle: 'Intelligent autonomous systems',
      description: 'AI agents that can own crypto, make decisions, and interact with smart contracts',
      details: [
        'AI trading bots with their own wallets',
        'Autonomous vehicles that pay for services',
        'Smart cities that manage themselves',
        'Decentralized AI training and data markets'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Digital Identity',
      subtitle: 'Own your online self',
      description: 'Complete control over your digital identity and personal data',
      details: [
        'One identity across all platforms',
        'Selective disclosure of personal information',
        'No more password management',
        'Verified credentials and achievements'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Internet of Things',
      subtitle: 'Connected smart devices',
      description: 'Your devices automatically transacting and coordinating with each other',
      details: [
        'Your car pays for its own fuel and maintenance',
        'Smart homes that optimize energy usage and costs',
        'Refrigerator orders groceries when running low',
        'Wearables that earn crypto for health data'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Quantum Resistance',
      subtitle: 'Future-proof security',
      description: 'Blockchain evolution to withstand quantum computer attacks',
      details: [
        'New cryptographic algorithms',
        'Quantum-resistant blockchains',
        'Enhanced security protocols',
        'Preparation for post-quantum world'
      ],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            The Future of Blockchain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're just at the beginning. Here's a glimpse into the revolutionary changes 
            blockchain will bring to our digital and physical worlds.
          </p>
        </div>

        {/* Future Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {futureTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 h-full">
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${topic.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{topic.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                    </div>

                    {/* Expanded details on hover */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <ul className="text-left space-y-2 text-sm text-gray-600">
                          {topic.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1 text-xs">✓</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Blockchain Evolution Timeline</h3>
          
          <div className="space-y-8">
            {[
              { year: '2009-2015', title: 'Blockchain 1.0', desc: 'Bitcoin and digital currency', color: 'bg-yellow-500' },
              { year: '2015-2020', title: 'Blockchain 2.0', desc: 'Ethereum and smart contracts', color: 'bg-blue-500' },
              { year: '2020-2025', title: 'Blockchain 3.0', desc: 'DeFi, NFTs, and mainstream adoption', color: 'bg-green-500' },
              { year: '2025-2030', title: 'Blockchain 4.0', desc: 'Full Web3 integration, metaverse, AI convergence', color: 'bg-purple-500' },
            ].map((phase, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className={`w-4 h-4 ${phase.color} rounded-full flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <span className="font-bold text-lg text-gray-800">{phase.year}</span>
                    <span className="font-semibold text-gray-700">{phase.title}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-12 text-white">
            <Rocket className="mx-auto mb-6" size={64} />
            <h3 className="text-3xl font-bold mb-6">Join the Revolution</h3>
            <div className="max-w-4xl mx-auto space-y-4 text-lg">
              <p>
                Blockchain technology is reshaping how we think about ownership, trust, and value exchange. 
                The future belongs to those who understand and embrace these changes.
              </p>
              <p className="text-violet-100">
                <strong>You're now equipped with the knowledge to participate in this transformation.</strong> 
                Whether as an investor, developer, entrepreneur, or informed citizen - 
                you're ready for the decentralized future.
              </p>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-bold mb-2">Keep Learning</h4>
                <p className="text-sm text-violet-100">Technology evolves rapidly - stay curious and keep exploring</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-bold mb-2">Start Building</h4>
                <p className="text-sm text-violet-100">Try using blockchain apps, buy your first crypto, create an NFT</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-bold mb-2">Join Communities</h4>
                <p className="text-sm text-violet-100">Connect with others who are building the decentralized future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
