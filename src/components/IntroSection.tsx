
import { BookOpen, Users, FileText, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IntroSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What is Blockchain?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Think of blockchain as a special kind of notebook that's shared among friends, 
            but with some amazing superpowers!
          </p>
        </div>

        {/* Main Analogy */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              The Digital Notebook Analogy
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Imagine you and your friends share a special notebook to keep track of who owes whom money.
              </p>
              <p>
                <strong className="text-blue-600">But here's the magic:</strong> Every time someone writes something new, 
                EVERYONE gets an exact copy instantly!
              </p>
              <p>
                <strong className="text-purple-600">Even better:</strong> Once something is written, it can never be erased 
                or changed without everyone knowing.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <FileText className="text-blue-500" size={24} />
                  <span className="font-medium">Alice pays Bob $10</span>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <FileText className="text-green-500" size={24} />
                  <span className="font-medium">Bob pays Charlie $5</span>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <FileText className="text-purple-500" size={24} />
                  <span className="font-medium">Charlie pays Alice $3</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-medium">
                  Everyone has the exact same records!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Shared & Transparent</h3>
                <p className="text-gray-600 leading-relaxed">
                  Everyone can see all the transactions, making it impossible to cheat or lie about what happened.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Permanent Records</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once something is written in the blockchain, it stays there forever. No one can erase or change it.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No Single Owner</h3>
                <p className="text-gray-600 leading-relaxed">
                  No single person or company controls the blockchain. It's owned and maintained by everyone who uses it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simple Definition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Simple Definition</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              <strong>Blockchain</strong> is a digital system that keeps records of transactions in a way that makes them 
              impossible to change, hack, or cheat. It's like having a permanent, shared notebook that everyone can read 
              but no one can alter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
