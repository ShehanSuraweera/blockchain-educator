
import { useState } from 'react';
import { FileText, Zap, Car, Music, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SmartContractsSection = () => {
  const [activeExample, setActiveExample] = useState('vending');
  const [contractStep, setContractStep] = useState(0);

  const examples = {
    vending: {
      icon: '🍫',
      title: 'Vending Machine',
      description: 'The classic analogy: Insert money → Get product automatically',
      steps: [
        { action: 'Insert $2', condition: 'Payment received', result: 'Nothing yet...' },
        { action: 'Select chocolate', condition: 'Product selected', result: 'Chocolate dispensed!' },
      ],
      realWorld: 'Just like a vending machine, smart contracts execute automatically when conditions are met.'
    },
    insurance: {
      icon: '✈️',
      title: 'Flight Insurance',
      description: 'Automatic payouts when flights are delayed',
      steps: [
        { action: 'Buy policy', condition: 'Premium paid', result: 'Policy active' },
        { action: 'Flight delayed 2+ hours', condition: 'Delay confirmed', result: 'Payout sent automatically!' },
      ],
      realWorld: 'No claims forms, no waiting - the contract pays out automatically based on flight data.'
    },
    rental: {
      icon: '🏠',
      title: 'Property Rental',
      description: 'Automated rent collection and access control',
      steps: [
        { action: 'Pay monthly rent', condition: 'Payment received', result: 'Access granted' },
        { action: 'Payment missed', condition: 'No payment by due date', result: 'Access revoked automatically' },
      ],
      realWorld: 'Smart contracts can control digital locks and automatically manage rental agreements.'
    },
    royalties: {
      icon: '🎵',
      title: 'Music Royalties',
      description: 'Artists get paid instantly when their music is played',
      steps: [
        { action: 'Song plays on platform', condition: 'Play count increases', result: 'Nothing yet...' },
        { action: 'Reaches payout threshold', condition: '1000 plays reached', result: 'Artist paid instantly!' },
      ],
      realWorld: 'Musicians can get paid automatically without waiting for record labels or streaming platforms.'
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Smart Contracts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imagine contracts that execute themselves automatically. No lawyers, no middlemen, 
            no waiting - just code that runs when conditions are met.
          </p>
        </div>

        {/* Basic Explanation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              What are Smart Contracts?
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-blue-600">Think "If This, Then That" for money and agreements:</strong>
              </p>
              <p>
                📝 <strong>Traditional Contract:</strong> "If John pays $100, then give him the car keys"
                <br />
                <span className="text-sm text-gray-500 ml-4">Requires lawyers, banks, trust, paperwork...</span>
              </p>
              <p>
                🤖 <strong>Smart Contract:</strong> Same agreement, but the code automatically executes it
                <br />
                <span className="text-sm text-green-600 ml-4">No middlemen needed - the blockchain handles everything!</span>
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center space-y-6">
              <FileText className="mx-auto text-blue-500" size={48} />
              <h4 className="text-xl font-bold text-gray-800">Smart Contract Flow</h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                  <p className="font-medium text-blue-700">1. Write the Rules</p>
                  <p className="text-sm text-gray-600">Define conditions and outcomes in code</p>
                </div>
                <div className="text-2xl text-blue-500">⬇️</div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <p className="font-medium text-purple-700">2. Deploy to Blockchain</p>
                  <p className="text-sm text-gray-600">Contract becomes immutable and transparent</p>
                </div>
                <div className="text-2xl text-purple-500">⬇️</div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                  <p className="font-medium text-green-700">3. Automatic Execution</p>
                  <p className="text-sm text-gray-600">Runs by itself when conditions are met</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Real-World Examples</h3>
          
          {/* Example Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(examples).map(([key, example]) => (
              <Button
                key={key}
                variant={activeExample === key ? 'default' : 'outline'}
                onClick={() => {
                  setActiveExample(key);
                  setContractStep(0);
                }}
                className={`flex items-center space-x-2 px-6 py-3 ${
                  activeExample === key 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="text-xl">{example.icon}</span>
                <span>{example.title}</span>
              </Button>
            ))}
          </div>

          {/* Active Example Display */}
          {Object.entries(examples).map(([key, example]) => {
            if (key !== activeExample) return null;
            
            return (
              <div key={key} className="grid lg:grid-cols-2 gap-12">
                {/* Description */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{example.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{example.title}</h4>
                      <p className="text-gray-600">{example.description}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {example.realWorld}
                  </p>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                    <h5 className="font-bold text-lg mb-2">Key Benefits:</h5>
                    <ul className="space-y-1 text-blue-100">
                      <li>• No intermediaries needed</li>
                      <li>• Instant execution</li>
                      <li>• Transparent and verifiable</li>
                      <li>• Reduced costs</li>
                    </ul>
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <h5 className="text-xl font-bold text-gray-800 mb-6 text-center">Contract Execution</h5>
                  
                  <div className="space-y-4">
                    {example.steps.map((step, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-4 transition-all duration-300 ${
                          contractStep >= index
                            ? 'bg-white shadow-lg border-l-4 border-green-500'
                            : 'bg-gray-200 opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">
                            Step {index + 1}: {step.action}
                          </span>
                          {contractStep >= index && (
                            <span className="text-green-500 text-xl">✓</span>
                          )}
                        </div>
                        <p className="text-sm text-blue-600 mb-1">
                          <strong>Condition:</strong> {step.condition}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Result:</strong> {step.result}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      onClick={() => {
                        if (contractStep < example.steps.length) {
                          setContractStep(contractStep + 1);
                        } else {
                          setContractStep(0);
                        }
                      }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2"
                    >
                      {contractStep < example.steps.length ? 'Execute Next Step' : 'Reset Demo'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Car, title: 'Supply Chain', desc: 'Track products from origin to consumer automatically' },
            { icon: Home, title: 'Real Estate', desc: 'Automate property transfers and escrow services' },
            { icon: DollarSign, title: 'DeFi Lending', desc: 'Borrow and lend without traditional banks' },
            { icon: Music, title: 'Content Creation', desc: 'Automatic royalty distribution for creators' },
            { icon: FileText, title: 'Legal Agreements', desc: 'Self-executing contracts for various services' },
            { icon: Zap, title: 'Energy Trading', desc: 'Peer-to-peer energy trading and carbon credits' }
          ].map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600 text-sm">{useCase.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Possibilities */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">The Future is Automated</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-lg">
            <p>
              Smart contracts are creating a world where agreements execute themselves, 
              payments happen instantly, and trust is built into the code itself.
            </p>
            <p className="text-indigo-100">
              <em>Imagine a world where your car automatically pays for parking, your house pays its own utilities, 
              and your investments rebalance themselves based on market conditions - all without human intervention.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContractsSection;
