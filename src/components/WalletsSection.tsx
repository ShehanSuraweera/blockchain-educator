
import { useState } from 'react';
import { Smartphone, HardDrive, Shield, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WalletsSection = () => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [activeWalletType, setActiveWalletType] = useState('hot');

  const walletTypes = {
    hot: {
      icon: Smartphone,
      title: 'Hot Wallets',
      subtitle: 'Connected to the internet',
      description: 'Software wallets that are connected to the internet for easy access and transactions.',
      pros: ['Easy to use', 'Quick transactions', 'Free to set up', 'Good for small amounts'],
      cons: ['Vulnerable to hacking', 'Less secure', 'Relies on internet', 'Company risks'],
      examples: ['MetaMask', 'Trust Wallet', 'Coinbase Wallet', 'Mobile apps'],
      color: 'from-orange-500 to-red-500'
    },
    cold: {
      icon: HardDrive,
      title: 'Cold Wallets',
      subtitle: 'Offline storage',
      description: 'Hardware or paper wallets that store your keys offline for maximum security.',
      pros: ['Extremely secure', 'Offline storage', 'Own your keys', 'Long-term storage'],
      cons: ['Less convenient', 'Costs money', 'Can be lost/damaged', 'Learning curve'],
      examples: ['Ledger', 'Trezor', 'Paper wallets', 'Hardware devices'],
      color: 'from-blue-500 to-cyan-500'
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Wallets & Cryptocurrencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your wallet is like your digital bank account. Learn how to keep your crypto safe and secure.
          </p>
        </div>

        {/* Wallet Explanation */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                What is a Crypto Wallet?
              </h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-yellow-600">Think of it like a keychain:</strong>
                </p>
                <p>
                  🔑 Your wallet doesn't actually store cryptocurrency - it stores your private keys
                </p>
                <p>
                  📱 These keys prove you own the crypto recorded on the blockchain
                </p>
                <p>
                  🏠 It's like having the deed to your house - the paper proves ownership, but doesn't contain the house
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <h4 className="text-xl font-bold text-gray-800">Wallet Demo</h4>
                
                {/* Public Address */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-green-600">Public Address (Shareable)</span>
                    <Eye className="text-green-500" size={20} />
                  </div>
                  <p className="font-mono text-xs bg-green-100 p-2 rounded break-all">
                    1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    ✅ Share this to receive crypto
                  </p>
                </div>

                {/* Private Key */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-red-600">Private Key (Secret!)</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPrivateKey(!showPrivateKey)}
                    >
                      {showPrivateKey ? <EyeOff size={20} /> : <Eye size={20} />}
                    </Button>
                  </div>
                  <p className="font-mono text-xs bg-red-100 p-2 rounded break-all">
                    {showPrivateKey 
                      ? 'L1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7q8R9s0T'
                      : '••••••••••••••••••••••••••••••••••••••••••'
                    }
                  </p>
                  <p className="text-xs text-red-600 mt-2">
                    ⚠️ NEVER share this with anyone!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hot vs Cold Wallets */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Types of Wallets</h3>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
              {Object.entries(walletTypes).map(([key, wallet]) => {
                const IconComponent = wallet.icon;
                return (
                  <Button
                    key={key}
                    variant={activeWalletType === key ? 'default' : 'ghost'}
                    onClick={() => setActiveWalletType(key)}
                    className={`rounded-full px-8 py-3 text-lg ${
                      activeWalletType === key
                        ? `bg-gradient-to-r ${wallet.color} text-white`
                        : 'text-gray-600'
                    }`}
                  >
                    <IconComponent className="mr-2" size={20} />
                    {wallet.title}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Wallet Type Details */}
          {Object.entries(walletTypes).map(([key, wallet]) => {
            if (key !== activeWalletType) return null;
            
            const IconComponent = wallet.icon;
            return (
              <div key={key} className="grid lg:grid-cols-2 gap-12">
                {/* Description */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${wallet.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{wallet.title}</h4>
                      <p className="text-gray-600">{wallet.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {wallet.description}
                  </p>

                  <div className="space-y-4">
                    <h5 className="text-lg font-bold text-gray-800">Examples:</h5>
                    <div className="flex flex-wrap gap-2">
                      {wallet.examples.map((example, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-gradient-to-r ${wallet.color} text-white rounded-full text-sm`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-6">
                  <div className="grid gap-6">
                    {/* Pros */}
                    <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                      <CardContent className="p-6">
                        <h5 className="text-lg font-bold text-green-700 mb-4 flex items-center">
                          <Shield className="mr-2" size={20} />
                          Advantages
                        </h5>
                        <ul className="space-y-2">
                          {wallet.pros.map((pro, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Cons */}
                    <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
                      <CardContent className="p-6">
                        <h5 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                          <AlertTriangle className="mr-2" size={20} />
                          Considerations
                        </h5>
                        <ul className="space-y-2">
                          {wallet.cons.map((con, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-red-500 mt-1">⚠</span>
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Tips */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <AlertTriangle className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-6">Critical Security Rules</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h4 className="font-bold text-lg">Never Share Private Keys</h4>
                    <p className="text-red-100">Anyone with your private key can steal all your crypto.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h4 className="font-bold text-lg">Backup Everything</h4>
                    <p className="text-red-100">Write down your seed phrase and store it safely offline.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎣</span>
                  <div>
                    <h4 className="font-bold text-lg">Beware of Scams</h4>
                    <p className="text-red-100">Legitimate companies will never ask for your private keys.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <h4 className="font-bold text-lg">Start Small</h4>
                    <p className="text-red-100">Practice with small amounts until you're comfortable.</p>
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

export default WalletsSection;
