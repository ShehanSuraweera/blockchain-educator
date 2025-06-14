
import { useState } from 'react';
import { Palette, Trophy, Gamepad2, Ticket, Copyright, ShoppingCart, AlertTriangle, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NFTsSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const useCases = [
    {
      icon: Palette,
      title: 'Digital Art & Collectibles',
      description: 'Unique digital artworks and trading cards',
      example: 'Like owning a signed painting, but digital',
      realWorld: 'CryptoPunks and Bored Ape Yacht Club have sold for millions'
    },
    {
      icon: Trophy,
      title: 'Virtual Real Estate',
      description: 'Own land and properties in virtual worlds',
      example: 'Like buying property in a video game world',
      realWorld: 'Virtual land in Decentraland sells for hundreds of thousands'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Assets',
      description: 'Characters, weapons, and skins you truly own',
      example: 'Like owning a rare trading card for your favorite game',
      realWorld: 'Axie Infinity creatures have been sold for over $300,000'
    },
    {
      icon: Ticket,
      title: 'Event Tickets & Memberships',
      description: 'Verifiable tickets and exclusive access passes',
      example: 'Like a concert ticket that proves authenticity',
      realWorld: 'NBA Top Shot moments and event NFT tickets'
    },
    {
      icon: Copyright,
      title: 'Intellectual Property',
      description: 'Proof of ownership for creative works',
      example: 'Like a copyright certificate for your creation',
      realWorld: 'Musicians releasing albums as NFTs with royalty splits'
    }
  ];

  const buyingSteps = [
    { step: 1, title: 'Set up wallet', desc: 'Create a digital wallet like MetaMask' },
    { step: 2, title: 'Buy cryptocurrency', desc: 'Purchase ETH or other crypto' },
    { step: 3, title: 'Choose marketplace', desc: 'Visit OpenSea, Rarible, or others' },
    { step: 4, title: 'Browse & buy', desc: 'Find NFT and complete purchase' },
    { step: 5, title: 'Own & trade', desc: 'NFT appears in your wallet' }
  ];

  const keyFeatures = [
    {
      title: 'Non-Fungible',
      description: 'Each NFT is unique and cannot be replaced by another',
      analogy: 'Like a fingerprint - no two are exactly the same',
      icon: '🔒'
    },
    {
      title: 'Verifiable Ownership',
      description: 'Blockchain proves who owns the digital asset',
      analogy: 'Like a deed to your house, but for digital items',
      icon: '✅'
    },
    {
      title: 'Smart Contract Powered',
      description: 'Automatic royalties and transfer rules',
      analogy: 'Like a vending machine that follows preset rules',
      icon: '⚙️'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            NFTs: Non-Fungible Tokens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unique digital items stored on blockchain - like owning a signed art piece or rare collectible card, but digital.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'overview', label: 'What are NFTs?' },
            { key: 'features', label: 'Key Features' },
            { key: 'uses', label: 'Use Cases' },
            { key: 'buying', label: 'How to Buy' },
            { key: 'risks', label: 'Risks & Considerations' }
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? 'default' : 'outline'}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 ${
                activeTab === tab.key 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">What Makes NFTs Special?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Think of NFTs like digital certificates of authenticity. Just as you might own a signed baseball card 
                or a limited edition poster, NFTs let you own unique digital items with verifiable proof of ownership.
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Real-World Analogy</h4>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Physical:</strong> You buy a signed photograph from your favorite artist</p>
                  <p><strong>Digital NFT:</strong> You buy a unique digital artwork with blockchain proof</p>
                  <p><strong>Both:</strong> You own something rare and authentic that others can't replicate</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="text-6xl">🎨</div>
                <h4 className="text-2xl font-bold text-gray-800">Digital Ownership</h4>
                <p className="text-gray-600">
                  NFTs use blockchain technology to create scarcity and provable ownership in the digital world.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Key Features Tab */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-medium">{feature.analogy}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'uses' && (
          <div className="space-y-8 mb-16">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6 items-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{useCase.title}</h3>
                          <p className="text-gray-600">{useCase.description}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Like:</h4>
                        <p className="text-gray-600 text-sm">{useCase.example}</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Real Example:</h4>
                        <p className="text-gray-600 text-sm">{useCase.realWorld}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* How to Buy Tab */}
        {activeTab === 'buying' && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Buy Your First NFT</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {buyingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                  {index < buyingSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-8 w-6 h-0.5 bg-gray-300 transform translate-x-3"></div>
                  )}
                </div>
              ))}
            </div>
            
            <Card className="mt-12 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <ShoppingCart className="mx-auto text-orange-500 mb-4" size={48} />
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Popular NFT Marketplaces</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h5 className="font-bold text-gray-800">OpenSea</h5>
                    <p className="text-gray-600 text-sm">Largest NFT marketplace</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Rarible</h5>
                    <p className="text-gray-600 text-sm">Community-owned platform</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">SuperRare</h5>
                    <p className="text-gray-600 text-sm">Curated digital art</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8">
                <AlertTriangle className="text-red-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Risks to Consider</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Market Volatility</h4>
                    <p className="text-gray-600 text-sm">NFT values can fluctuate dramatically, sometimes losing 90% of their value overnight.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Speculation Bubble</h4>
                    <p className="text-gray-600 text-sm">Many NFTs are bought for speculation rather than genuine utility or enjoyment.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Fraud & Scams</h4>
                    <p className="text-gray-600 text-sm">Fake NFTs, stolen artwork, and rug pulls are common in the space.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Limited Utility</h4>
                    <p className="text-gray-600 text-sm">Many NFTs don't provide real-world utility beyond ownership bragging rights.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <Leaf className="text-green-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Environmental Impact</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Energy Consumption</h4>
                    <p className="text-gray-600 text-sm">NFTs on proof-of-work blockchains like Ethereum (pre-merge) consumed significant energy.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Carbon Footprint</h4>
                    <p className="text-gray-600 text-sm">Each NFT transaction historically had a carbon footprint similar to a car ride of 500+ miles.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Green Alternatives</h4>
                    <p className="text-gray-600 text-sm">Newer blockchains like Solana, Tezos, and post-merge Ethereum are much more energy efficient.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Offsetting Efforts</h4>
                    <p className="text-gray-600 text-sm">Many platforms now offer carbon offset programs for NFT transactions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore NFTs?</h3>
          <p className="text-xl mb-6 text-white/90">
            Remember: Only invest what you can afford to lose, and always do your research!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <div className="bg-white/20 rounded-lg px-4 py-2">✅ Research the creator</div>
            <div className="bg-white/20 rounded-lg px-4 py-2">✅ Verify authenticity</div>
            <div className="bg-white/20 rounded-lg px-4 py-2">✅ Understand the rights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTsSection;
