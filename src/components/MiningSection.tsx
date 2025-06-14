
import { useState, useEffect } from 'react';
import { Zap, Cpu, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MiningSection = () => {
  const [miningProgress, setMiningProgress] = useState(0);
  const [isMinig, setIsMinig] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMinig) {
      interval = setInterval(() => {
        setMiningProgress(prev => {
          if (prev >= 100) {
            setIsMinig(false);
            setTimeout(() => setMiningProgress(0), 2000);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isMinig]);

  const startMining = () => {
    setMiningProgress(0);
    setIsMinig(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Mining (Proof of Work)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how miners compete to add new blocks and secure the network
          </p>
        </div>

        {/* Mining Process Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              The Mining Process
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-yellow-600">Think of mining like a lottery:</strong>
              </p>
              <p>
                🎫 <strong>Buying Tickets:</strong> Miners use computer power instead of money
              </p>
              <p>
                🎲 <strong>The Draw:</strong> They try to guess a special number (called a nonce)
              </p>
              <p>
                🏆 <strong>The Winner:</strong> First to find the right number wins the block reward
              </p>
              <p>
                🔄 <strong>Next Round:</strong> The process repeats every ~10 minutes
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Mining Simulator</h4>
              
              <div className="space-y-6">
                {/* Mining Progress */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-700">Finding the hash...</span>
                    <span className="text-sm text-gray-500">{Math.round(miningProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${miningProgress}%` }}
                    ></div>
                  </div>
                  {miningProgress === 100 && (
                    <div className="mt-4 text-center">
                      <Award className="text-yellow-500 mx-auto mb-2" size={32} />
                      <p className="text-green-600 font-bold">Block Found! Reward Earned!</p>
                    </div>
                  )}
                </div>

                {/* Mining Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Cpu className="text-blue-500 mx-auto mb-2" size={24} />
                    <p className="text-sm font-medium">Hash Rate</p>
                    <p className="text-xs text-gray-500">1.2 TH/s</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Zap className="text-yellow-500 mx-auto mb-2" size={24} />
                    <p className="text-sm font-medium">Power Usage</p>
                    <p className="text-xs text-gray-500">1,400W</p>
                  </div>
                </div>

                <button
                  onClick={startMining}
                  disabled={isMinig}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isMinig ? 'Mining...' : 'Start Mining'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mining Economics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Mining Economics</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Costs */}
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-red-700 mb-6 text-center">Costs</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Cpu className="text-gray-600" size={20} />
                      <span>Mining Hardware</span>
                    </div>
                    <span className="font-bold text-red-600">$3,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="text-yellow-500" size={20} />
                      <span>Electricity (monthly)</span>
                    </div>
                    <span className="font-bold text-red-600">$200+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">🏠</span>
                      <span>Cooling & Space</span>
                    </div>
                    <span className="font-bold text-red-600">$100+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-green-700 mb-6 text-center">Potential Rewards</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Award className="text-yellow-500" size={20} />
                      <span>Block Reward</span>
                    </div>
                    <span className="font-bold text-green-600">6.25 BTC</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="text-blue-500" size={20} />
                      <span>Transaction Fees</span>
                    </div>
                    <span className="font-bold text-green-600">0.5+ BTC</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">⏰</span>
                      <span>Frequency</span>
                    </div>
                    <span className="font-bold text-blue-600">~10 minutes</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    * Success depends on network hash rate and luck
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mining Difficulty */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Difficulty Adjustment</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-4xl">📈</div>
                <h4 className="text-xl font-bold">More Miners Join</h4>
                <p className="text-blue-100">
                  Network gets faster, blocks found too quickly
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">⚖️</div>
                <h4 className="text-xl font-bold">Difficulty Increases</h4>
                <p className="text-blue-100">
                  Network automatically makes puzzles harder
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">⏰</div>
                <h4 className="text-xl font-bold">Time Stays ~10 Min</h4>
                <p className="text-blue-100">
                  Block time returns to target average
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white/10 rounded-lg p-6">
              <p className="text-lg">
                <strong>This smart system ensures blocks are always found approximately every 10 minutes, 
                regardless of how many miners are competing!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningSection;
