
import { useState } from 'react';
import { Link, Users, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Blocks Store Information",
      description: "Each block is like a page in our digital notebook, containing transaction records and a timestamp.",
      icon: Lock,
      visual: "block"
    },
    {
      title: "Blocks Link Together",
      description: "Every block connects to the previous one using a special code, creating an unbreakable chain.",
      icon: Link,
      visual: "chain"
    },
    {
      title: "Network Verifies",
      description: "Thousands of computers around the world verify each transaction before adding it to the chain.",
      icon: Users,
      visual: "network"
    },
    {
      title: "Records Are Permanent",
      description: "Once added, information cannot be changed or deleted, creating a permanent, trustworthy record.",
      icon: CheckCircle,
      visual: "permanent"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            How Blockchain Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's break down the process into simple, easy-to-understand steps
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {activeStep === 0 && (
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Lock className="text-white" size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm font-medium">Transaction: Alice → Bob ($10)</p>
                      <p className="text-xs text-gray-500">Timestamp: 2024-01-15 10:30:00</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm font-medium">Transaction: Bob → Charlie ($5)</p>
                      <p className="text-xs text-gray-500">Timestamp: 2024-01-15 10:35:00</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="flex items-center justify-center space-x-4">
                  {[1, 2, 3].map((num, index) => (
                    <div key={num} className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {num}
                      </div>
                      {index < 2 && (
                        <Link className="text-blue-500 mx-2" size={24} />
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((node) => (
                    <div key={node} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="text-white" size={16} />
                      </div>
                      <p className="text-xs text-gray-600">Node {node}</p>
                    </div>
                  ))}
                  <div className="col-span-3 text-center mt-4">
                    <CheckCircle className="text-green-500 mx-auto" size={32} />
                    <p className="text-sm text-green-600 font-medium mt-2">All nodes agree!</p>
                  </div>
                </div>
              )}
              
              {activeStep === 3 && (
                <div className="text-center">
                  <div className="space-y-3">
                    <div className="bg-green-100 border-l-4 border-green-500 rounded-lg p-4">
                      <CheckCircle className="text-green-500 inline mr-2" size={20} />
                      <span className="text-green-700 font-medium">Block 1: Verified & Permanent</span>
                    </div>
                    <div className="bg-green-100 border-l-4 border-green-500 rounded-lg p-4">
                      <CheckCircle className="text-green-500 inline mr-2" size={20} />
                      <span className="text-green-700 font-medium">Block 2: Verified & Permanent</span>
                    </div>
                    <div className="bg-green-100 border-l-4 border-green-500 rounded-lg p-4">
                      <CheckCircle className="text-green-500 inline mr-2" size={20} />
                      <span className="text-green-700 font-medium">Block 3: Verified & Permanent</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Steps Side */}
          <div className="order-1 lg:order-2 space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'ring-2 ring-blue-500 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activeStep === index
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          Step {index + 1}: {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Concepts */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Immutable</h3>
            <p className="text-gray-600">
              Once data is added to a block, it cannot be changed or deleted, ensuring permanent records.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Decentralized</h3>
            <p className="text-gray-600">
              No single authority controls the network. It's maintained by thousands of participants worldwide.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Transparent</h3>
            <p className="text-gray-600">
              All transactions are visible to everyone on the network, creating unprecedented transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
