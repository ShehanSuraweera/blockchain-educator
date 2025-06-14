
import { useState } from 'react';
import { Key, Lock, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CryptographySection = () => {
  const [activeDemo, setActiveDemo] = useState('keys');

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Cryptographic Concepts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The security magic behind blockchain explained through simple, everyday analogies
          </p>
        </div>

        {/* Interactive Demos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeDemo === 'keys' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('keys')}
              className={activeDemo === 'keys' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              <Key className="mr-2" size={20} />
              Public & Private Keys
            </Button>
            <Button
              variant={activeDemo === 'hash' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('hash')}
              className={activeDemo === 'hash' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              <Shield className="mr-2" size={20} />
              Hash Functions
            </Button>
            <Button
              variant={activeDemo === 'signatures' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('signatures')}
              className={activeDemo === 'signatures' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              <Eye className="mr-2" size={20} />
              Digital Signatures
            </Button>
          </div>

          {/* Public & Private Keys Demo */}
          {activeDemo === 'keys' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Public & Private Keys
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-purple-600">Think of it like your mailbox:</strong>
                  </p>
                  <p>
                    🏠 <strong>Public Key</strong> = Your home address. Everyone can see it and send you mail.
                  </p>
                  <p>
                    🔑 <strong>Private Key</strong> = Your mailbox key. Only you have it to open and read your mail.
                  </p>
                  <p className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong>The Magic:</strong> People can send you encrypted messages using your public key, 
                    but only YOU can decrypt them with your private key!
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-6">The Mailbox Analogy</h4>
                    
                    {/* Public Key Visual */}
                    <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl">🏠</div>
                        <div className="text-left">
                          <p className="font-bold text-purple-600">Public Key</p>
                          <p className="text-sm text-gray-600">123 Blockchain Street</p>
                          <p className="text-xs text-gray-500">Everyone can see this!</p>
                        </div>
                      </div>
                    </div>

                    {/* Private Key Visual */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl">🔑</div>
                        <div className="text-left">
                          <p className="font-bold text-pink-600">Private Key</p>
                          <p className="text-sm text-gray-600">Secret mailbox key</p>
                          <p className="text-xs text-gray-500">Only YOU have this!</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-green-600 font-medium">
                        ✅ Secure communication without meeting in person!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hash Functions Demo */}
          {activeDemo === 'hash' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Hash Functions
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-purple-600">Think of it like a fingerprint machine:</strong>
                  </p>
                  <p>
                    📄 Put in any document (no matter how big)
                  </p>
                  <p>
                    👆 Get back a unique "fingerprint" (always the same size)
                  </p>
                  <p>
                    🔍 If even one letter changes, you get a completely different fingerprint
                  </p>
                  <p className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong>The Magic:</strong> It's impossible to recreate the original document from just the fingerprint!
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-6">Hash Demo</h4>
                    
                    <div className="space-y-4">
                      {/* Input */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600 mb-2">Input Document:</p>
                        <p className="font-mono text-sm">"Hello, Blockchain!"</p>
                      </div>

                      {/* Arrow */}
                      <div className="text-2xl text-purple-500">⬇️</div>

                      {/* Hash Function */}
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-4">
                        <Shield className="mx-auto mb-2" size={24} />
                        <p className="font-bold">Hash Function</p>
                        <p className="text-xs opacity-80">SHA-256</p>
                      </div>

                      {/* Arrow */}
                      <div className="text-2xl text-purple-500">⬇️</div>

                      {/* Output */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600 mb-2">Hash Output:</p>
                        <p className="font-mono text-xs bg-gray-100 p-2 rounded break-all">
                          a665a45920422f9d417e4867...
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-green-600 font-medium">
                        ✅ Same input = Same hash, always!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Digital Signatures Demo */}
          {activeDemo === 'signatures' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Digital Signatures
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-purple-600">Think of it like signing a check:</strong>
                  </p>
                  <p>
                    ✍️ You sign documents with your private key (like your unique signature)
                  </p>
                  <p>
                    🔍 Others verify it's really from you using your public key
                  </p>
                  <p>
                    🚫 No one else can forge your signature without your private key
                  </p>
                  <p className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong>The Magic:</strong> Proves both who sent it AND that the message wasn't changed!
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-6">Digital Signature Process</h4>
                    
                    <div className="space-y-4">
                      {/* Step 1: Alice signs */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-center space-x-3">
                          <div className="text-2xl">👩‍💼</div>
                          <div className="text-left">
                            <p className="font-bold text-purple-600">Alice Signs</p>
                            <p className="text-sm text-gray-600">Uses her private key</p>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-sm font-medium">"I send $10 to Bob"</p>
                        <p className="text-xs text-gray-500">+ Alice's Digital Signature</p>
                      </div>

                      {/* Step 2: Bob verifies */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-center space-x-3">
                          <div className="text-2xl">👨‍💼</div>
                          <div className="text-left">
                            <p className="font-bold text-green-600">Bob Verifies</p>
                            <p className="text-sm text-gray-600">Uses Alice's public key</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-green-500 text-2xl">✅</span>
                          <p className="text-sm text-green-600 font-medium">
                            Verified: Message is from Alice & unchanged!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Concepts Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Key className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Encryption</h3>
              <p className="text-gray-600 leading-relaxed">
                Scrambles data so only authorized people can read it, like having a secret code.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-pink-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensures data hasn't been tampered with, like a tamper-proof seal on a package.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Authentication</h3>
              <p className="text-gray-600 leading-relaxed">
                Proves who you are without revealing your secrets, like showing ID without giving it away.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CryptographySection;
