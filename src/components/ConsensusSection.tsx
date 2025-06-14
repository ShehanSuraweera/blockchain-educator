
import { useState } from 'react';
import { Zap, Leaf, Cpu, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ConsensusSection = () => {
  const [activeTab, setActiveTab] = useState('pow');

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Consensus Mechanisms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How does everyone agree on what's true? Let's explore the two main ways blockchain networks reach consensus.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <Button
              variant={activeTab === 'pow' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('pow')}
              className={`rounded-full px-8 py-3 text-lg ${
                activeTab === 'pow'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              <Zap className="mr-2" size={20} />
              Proof of Work
            </Button>
            <Button
              variant={activeTab === 'pos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('pos')}
              className={`rounded-full px-8 py-3 text-lg ${
                activeTab === 'pos'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              <Leaf className="mr-2" size={20} />
              Proof of Stake
            </Button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'pow' && (
          <div className="space-y-12">
            {/* PoW Explanation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Proof of Work (PoW)
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Think of PoW like a global math competition. Miners (special computers) compete to solve complex puzzles.
                  </p>
                  <p>
                    <strong className="text-yellow-600">The Race:</strong> Thousands of miners race to solve the same puzzle first.
                  </p>
                  <p>
                    <strong className="text-orange-600">The Winner:</strong> The first to solve it gets to add the next block and earn a reward.
                  </p>
                  <p>
                    <strong className="text-red-600">The Cost:</strong> This process uses a lot of electricity, like running thousands of computers 24/7.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Mining Competition</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((miner) => (
                        <div key={miner} className="bg-white rounded-lg p-4 shadow-sm">
                          <Cpu className="text-yellow-500 mx-auto mb-2" size={24} />
                          <p className="text-sm font-medium">Miner {miner}</p>
                          <div className="mt-2 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse"
                              style={{ width: `${Math.random() * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <TrendingUp className="text-green-500 mx-auto" size={32} />
                      <p className="text-sm text-green-600 font-medium">Winner gets the reward!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PoW Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-green-700 mb-4">Pros</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Extremely secure and battle-tested</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Truly decentralized</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Anyone can participate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-red-700 mb-4">Cons</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Uses massive amounts of energy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Slower transaction processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Environmental concerns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'pos' && (
          <div className="space-y-12">
            {/* PoS Explanation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Proof of Stake (PoS)
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Think of PoS like a lottery where your chances of winning depend on how much you "stake" or put at risk.
                  </p>
                  <p>
                    <strong className="text-green-600">The Stake:</strong> Validators lock up their own cryptocurrency as collateral.
                  </p>
                  <p>
                    <strong className="text-emerald-600">The Selection:</strong> The network randomly chooses validators based on their stake size.
                  </p>
                  <p>
                    <strong className="text-blue-600">The Efficiency:</strong> This uses 99% less energy than Proof of Work!
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Validator Selection</h4>
                    <div className="space-y-4">
                      {[
                        { name: 'Alice', stake: 100, chance: 'High' },
                        { name: 'Bob', stake: 50, chance: 'Medium' },
                        { name: 'Charlie', stake: 25, chance: 'Low' }
                      ].map((validator) => (
                        <div key={validator.name} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{validator.name}</p>
                              <p className="text-sm text-gray-500">Staked: {validator.stake} coins</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-green-600">{validator.chance} Chance</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Leaf className="text-green-500 mx-auto" size={32} />
                      <p className="text-sm text-green-600 font-medium">Eco-friendly selection!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PoS Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-green-700 mb-4">Pros</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>99% less energy consumption</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Faster transaction processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Lower barrier to entry</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-yellow-700 mb-4">Considerations</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span>Newer technology (less proven)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span>Rich validators have more influence</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span>Requires minimum stake to participate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">Quick Comparison</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Aspect</h4>
                  <div className="space-y-4 text-gray-600">
                    <p>Energy Usage</p>
                    <p>Speed</p>
                    <p>Security</p>
                    <p>Environment</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-yellow-600 mb-4">Proof of Work</h4>
                  <div className="space-y-4">
                    <p className="text-red-500">Very High</p>
                    <p className="text-yellow-500">Slower</p>
                    <p className="text-green-500">Excellent</p>
                    <p className="text-red-500">High Impact</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-green-600 mb-4">Proof of Stake</h4>
                  <div className="space-y-4">
                    <p className="text-green-500">Very Low</p>
                    <p className="text-green-500">Faster</p>
                    <p className="text-yellow-500">Good</p>
                    <p className="text-green-500">Low Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsensusSection;
