
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProsConsSection = () => {
  const pros = [
    {
      icon: '🔒',
      title: 'Unmatched Security',
      description: 'Once data is on the blockchain, it\'s virtually impossible to hack or change.',
      detail: 'Cryptographic protection and decentralized verification make it extremely secure.'
    },
    {
      icon: '👁️',
      title: 'Complete Transparency',
      description: 'All transactions are visible to everyone on the network.',
      detail: 'You can track any transaction from start to finish, creating unprecedented transparency.'
    },
    {
      icon: '🌐',
      title: 'No Central Authority',
      description: 'No single entity controls the network - it\'s truly decentralized.',
      detail: 'Removes the need for banks or governments to facilitate transactions.'
    },
    {
      icon: '⚡',
      title: '24/7 Operation',
      description: 'The network never sleeps - transactions can happen anytime.',
      detail: 'Unlike banks with business hours, blockchain works around the clock.'
    },
    {
      icon: '🌍',
      title: 'Global Access',
      description: 'Anyone with internet can participate, regardless of location.',
      detail: 'Provides financial services to people without access to traditional banking.'
    },
    {
      icon: '💰',
      title: 'Lower Fees',
      description: 'Especially for international transfers, fees can be much lower.',
      detail: 'Cuts out intermediaries that typically charge high fees for cross-border payments.'
    }
  ];

  const cons = [
    {
      icon: '🔋',
      title: 'High Energy Consumption',
      description: 'Proof of Work blockchains use massive amounts of electricity.',
      detail: 'Bitcoin uses more energy annually than some entire countries.'
    },
    {
      icon: '🐌',
      title: 'Scalability Issues',
      description: 'Most blockchains can only process a limited number of transactions per second.',
      detail: 'Bitcoin: ~7 TPS, Ethereum: ~15 TPS vs Visa: ~1,700 TPS'
    },
    {
      icon: '📈',
      title: 'Price Volatility',
      description: 'Cryptocurrency values can fluctuate wildly in short periods.',
      detail: 'Makes it challenging to use as a stable store of value or medium of exchange.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Uncertainty',
      description: 'Laws and regulations around blockchain are still evolving.',
      detail: 'Different countries have different approaches, creating compliance challenges.'
    },
    {
      icon: '🧠',
      title: 'Technical Complexity',
      description: 'The technology can be difficult for average users to understand and use.',
      detail: 'Managing private keys and understanding wallets can be intimidating.'
    },
    {
      icon: '🚫',
      title: 'Irreversible Transactions',
      description: 'Once confirmed, transactions typically cannot be reversed.',
      detail: 'If you send to the wrong address or lose your keys, funds may be gone forever.'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            Pros & Cons of Blockchain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like any technology, blockchain has both amazing benefits and real challenges. 
            Let's explore both sides honestly.
          </p>
        </div>

        {/* Pros and Cons Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pros Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-green-700">Advantages</h3>
            </div>
            
            <div className="space-y-4">
              {pros.map((pro, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{pro.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{pro.title}</h4>
                        <p className="text-gray-600 mb-2">{pro.description}</p>
                        <p className="text-sm text-green-700 bg-green-100 p-2 rounded-lg">
                          💡 {pro.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cons Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3 mr-4">
                <XCircle className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-red-700">Challenges</h3>
            </div>
            
            <div className="space-y-4">
              {cons.map((con, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{con.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{con.title}</h4>
                        <p className="text-gray-600 mb-2">{con.description}</p>
                        <p className="text-sm text-red-700 bg-red-100 p-2 rounded-lg">
                          ⚠️ {con.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Balance Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <AlertTriangle className="mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-6">The Bottom Line</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-lg">
            <p>
              <strong>Blockchain is revolutionary technology</strong> that offers unprecedented security, transparency, 
              and decentralization. However, it's not perfect and faces real challenges.
            </p>
            <p>
              <strong>The key is understanding these trade-offs</strong> and recognizing that blockchain isn't 
              a solution for everything - but for certain use cases, it's genuinely transformative.
            </p>
            <p className="text-blue-100 text-base mt-6">
              💡 <em>As the technology matures, many current limitations are being addressed through innovations 
              like Proof of Stake, Layer 2 solutions, and improved user interfaces.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsConsSection;
