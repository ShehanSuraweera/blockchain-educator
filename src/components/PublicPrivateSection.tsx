
import { Lock, Globe, Users, Building, Shield, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const PublicPrivateSection = () => {
  const publicBlockchains = [
    { name: 'Bitcoin', description: 'First cryptocurrency' },
    { name: 'Ethereum', description: 'Smart contracts platform' },
    { name: 'Solana', description: 'High-speed transactions' }
  ];

  const privateBlockchains = [
    { name: 'Hyperledger Fabric', description: 'Enterprise blockchain framework' },
    { name: 'R3 Corda', description: 'Financial services blockchain' },
    { name: 'JPM Coin', description: 'Banking blockchain solution' }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🔒 Public vs Private Blockchains
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the key differences between open, public blockchains and restricted, private networks.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Public Blockchain Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Globe className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Public Blockchains</h3>
                <p className="text-green-600 font-semibold">Open & Transparent</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Anyone can join and participate</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Eye className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Fully transparent and open</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Completely decentralized</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Popular Examples:</h4>
                <div className="space-y-2">
                  {publicBlockchains.map((blockchain) => (
                    <div key={blockchain.name} className="flex items-center justify-between bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-800">{blockchain.name}</span>
                      <span className="text-sm text-gray-600">{blockchain.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Private Blockchain Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Lock className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Private Blockchains</h3>
                <p className="text-blue-600 font-semibold">Restricted & Controlled</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700">Restricted access only</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Building className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700">Controlled by organizations</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Lock className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700">Enhanced privacy & control</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Popular Examples:</h4>
                <div className="space-y-2">
                  {privateBlockchains.map((blockchain) => (
                    <div key={blockchain.name} className="flex items-center justify-between bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-800">{blockchain.name}</span>
                      <span className="text-sm text-gray-600">{blockchain.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Quick Comparison</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">Feature</TableHead>
                  <TableHead className="text-center font-bold text-green-600">Public</TableHead>
                  <TableHead className="text-center font-bold text-blue-600">Private</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Access</TableCell>
                  <TableCell className="text-center text-green-600">Open to everyone</TableCell>
                  <TableCell className="text-center text-blue-600">Invitation only</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Control</TableCell>
                  <TableCell className="text-center text-green-600">Decentralized</TableCell>
                  <TableCell className="text-center text-blue-600">Centralized</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transparency</TableCell>
                  <TableCell className="text-center text-green-600">Fully transparent</TableCell>
                  <TableCell className="text-center text-blue-600">Limited visibility</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Speed</TableCell>
                  <TableCell className="text-center text-green-600">Slower</TableCell>
                  <TableCell className="text-center text-blue-600">Faster</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Use Cases</TableCell>
                  <TableCell className="text-center text-green-600">Cryptocurrencies, DeFi</TableCell>
                  <TableCell className="text-center text-blue-600">Enterprise, Banking</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Bottom Summary */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Which One to Choose?</h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              <strong>Public blockchains</strong> are perfect for transparency, decentralization, and open participation - ideal for cryptocurrencies and public applications. 
              <strong> Private blockchains</strong> offer better control, privacy, and performance - making them suitable for enterprise solutions and sensitive business operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublicPrivateSection;
