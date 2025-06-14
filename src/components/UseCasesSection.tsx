import { useState } from 'react';
import { CreditCard, Package, Heart, User, Vote, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const UseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState('finance');

  const useCases = {
    finance: {
      icon: CreditCard,
      title: 'Finance & Payments',
      subtitle: 'The original blockchain use case',
      description: 'Cryptocurrencies enable peer-to-peer transactions without banks or governments.',
      examples: [
        { name: 'Bitcoin', desc: 'Digital gold and store of value' },
        { name: 'Stablecoins', desc: 'Cryptocurrencies pegged to stable assets like USD' },
        { name: 'DeFi', desc: 'Decentralized lending, borrowing, and trading' },
        { name: 'Cross-border payments', desc: 'Fast, cheap international money transfers' }
      ],
      realWorld: 'El Salvador adopted Bitcoin as legal tender, and millions use crypto for remittances worldwide.',
      color: 'from-green-500 to-emerald-500'
    },
    supply: {
      icon: Package,
      title: 'Supply Chain Tracking',
      subtitle: 'From farm to table transparency',
      description: 'Track products through every step of the supply chain with immutable records.',
      examples: [
        { name: 'Food safety', desc: 'Track contamination sources in minutes, not weeks' },
        { name: 'Luxury goods', desc: 'Verify authenticity and prevent counterfeiting' },
        { name: 'Pharmaceuticals', desc: 'Ensure medicines are genuine and properly stored' },
        { name: 'Sustainable sourcing', desc: 'Verify ethical and environmental claims' }
      ],
      realWorld: 'Walmart uses blockchain to trace food origins, reducing foodborne illness investigation time from weeks to seconds.',
      color: 'from-blue-500 to-indigo-500'
    },
    healthcare: {
      icon: Heart,
      title: 'Healthcare Records',
      subtitle: 'Secure, portable medical data',
      description: 'Patients control their medical records while enabling secure sharing between providers.',
      examples: [
        { name: 'Medical records', desc: 'Portable, secure patient data' },
        { name: 'Drug traceability', desc: 'Prevent counterfeit medications' },
        { name: 'Clinical trials', desc: 'Transparent, tamper-proof research data' },
        { name: 'Insurance claims', desc: 'Automated, fraud-resistant processing' }
      ],
      realWorld: 'Estonia\'s e-Health initiative uses blockchain to secure over 1 million patient records.',
      color: 'from-red-500 to-pink-500'
    },
    identity: {
      icon: User,
      title: 'Digital Identity',
      subtitle: 'Own and control your digital self',
      description: 'Self-sovereign identity lets individuals control their personal data and credentials.',
      examples: [
        { name: 'Digital passports', desc: 'Tamper-proof travel documents' },
        { name: 'Academic credentials', desc: 'Verifiable degrees and certifications' },
        { name: 'Professional licenses', desc: 'Immutable professional qualifications' },
        { name: 'Age verification', desc: 'Prove age without revealing other data' }
      ],
      realWorld: 'Microsoft and other tech giants are building decentralized identity solutions for billions of users.',
      color: 'from-purple-500 to-violet-500'
    },
    voting: {
      icon: Vote,
      title: 'Voting Systems',
      subtitle: 'Transparent, verifiable elections',
      description: 'Blockchain voting can increase transparency while maintaining voter privacy.',
      examples: [
        { name: 'Government elections', desc: 'Tamper-proof, auditable voting' },
        { name: 'Corporate governance', desc: 'Shareholder voting on company decisions' },
        { name: 'Community decisions', desc: 'Decentralized organization governance' },
        { name: 'Referendum voting', desc: 'Transparent public opinion polling' }
      ],
      realWorld: 'Estonia has used blockchain-based e-Residency for secure digital voting and governance.',
      color: 'from-orange-500 to-yellow-500'
    },
    contracts: {
      icon: FileText,
      title: 'Smart Contracts',
      subtitle: 'Automated agreements',
      description: 'Self-executing contracts that automatically enforce terms when conditions are met.',
      examples: [
        { name: 'Insurance payouts', desc: 'Automatic claims processing based on data' },
        { name: 'Royalty distribution', desc: 'Artists get paid instantly when music plays' },
        { name: 'Escrow services', desc: 'Secure transactions without intermediaries' },
        { name: 'Subscription services', desc: 'Automated recurring payments and access' }
      ],
      realWorld: 'Ethereum processes millions of smart contract transactions daily, powering DeFi and NFT marketplaces.',
      color: 'from-teal-500 to-cyan-500'
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Blockchain isn't just about cryptocurrency. Discover how it's solving real problems across industries.
          </p>
        </div>

        {/* Use Case Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(useCases).map(([key, useCase]) => {
            const IconComponent = useCase.icon;
            return (
              <Button
                key={key}
                variant={activeUseCase === key ? 'default' : 'outline'}
                onClick={() => setActiveUseCase(key)}
                className={`flex items-center space-x-2 px-6 py-3 ${
                  activeUseCase === key 
                    ? `bg-gradient-to-r ${useCase.color} text-white` 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <IconComponent size={20} />
                <span className="hidden sm:inline">{useCase.title}</span>
              </Button>
            );
          })}
        </div>

        {/* Active Use Case Details */}
        <div className="mb-16">
          {Object.entries(useCases).map(([key, useCase]) => {
            if (key !== activeUseCase) return null;
            
            const IconComponent = useCase.icon;
            return (
              <div key={key} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Description Side */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{useCase.title}</h3>
                      <p className="text-lg text-gray-600">{useCase.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className={`bg-gradient-to-r ${useCase.color} rounded-2xl p-6 text-white`}>
                    <h4 className="text-xl font-bold mb-3">Real-World Impact</h4>
                    <p className="text-white/90 leading-relaxed">
                      {useCase.realWorld}
                    </p>
                  </div>
                </div>

                {/* Examples Side */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Applications</h4>
                  {useCase.examples.map((example, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                      <CardContent className="p-6">
                        <h5 className="text-lg font-bold text-gray-800 mb-2">{example.name}</h5>
                        <p className="text-gray-600">{example.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Impact Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Enterprise Adoption</h3>
              <p className="text-gray-600">
                Major corporations like IBM, Microsoft, and JPMorgan are investing billions in blockchain solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Blockchain is enabling financial inclusion for over 1.7 billion unbanked people worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Future Growth</h3>
              <p className="text-gray-600">
                The blockchain market is projected to grow from $7B in 2022 to $163B by 2029.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
