
import { Calendar, FileText, Coins, Zap, TrendingUp, Palette, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HistorySection = () => {
  const timelineEvents = [
    {
      year: '2008',
      title: 'Bitcoin Whitepaper',
      description: 'Satoshi Nakamoto publishes the revolutionary Bitcoin whitepaper',
      icon: FileText,
      color: 'from-orange-500 to-yellow-500',
      detail: 'The foundational document that started it all'
    },
    {
      year: '2009',
      title: 'Bitcoin Network Launch',
      description: 'The first Bitcoin network goes live',
      icon: Coins,
      color: 'from-yellow-500 to-amber-500',
      detail: 'Genesis block mined on January 3rd'
    },
    {
      year: '2015',
      title: 'Ethereum & Smart Contracts',
      description: 'Ethereum launches, introducing programmable blockchain',
      icon: Zap,
      color: 'from-blue-500 to-indigo-500',
      detail: 'Enabling decentralized applications'
    },
    {
      year: '2017',
      title: 'ICO Boom',
      description: 'Initial Coin Offerings explode in popularity',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      detail: 'Billions raised through token sales'
    },
    {
      year: '2020',
      title: 'DeFi Revolution',
      description: 'Decentralized Finance protocols gain massive adoption',
      icon: Building2,
      color: 'from-purple-500 to-violet-500',
      detail: 'Traditional finance meets blockchain'
    },
    {
      year: '2021',
      title: 'NFT Explosion',
      description: 'Non-Fungible Tokens enter mainstream consciousness',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      detail: 'Digital art and collectibles boom'
    },
    {
      year: '2022+',
      title: 'Institutional Adoption',
      description: 'Web3, Metaverse, and CBDCs drive mainstream adoption',
      icon: Calendar,
      color: 'from-indigo-500 to-purple-500',
      detail: 'Enterprise and government integration'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            History of Blockchain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple whitepaper to revolutionizing industries - explore the key milestones that shaped blockchain technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full lg:hidden"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.year} className="relative">
                  {/* Desktop Layout */}
                  <div className={`hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Content Card */}
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${isEven ? 'lg:justify-self-end' : 'lg:justify-self-start lg:col-start-2'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-800">{event.year}</div>
                            <div className="text-lg font-semibold text-gray-700">{event.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <p className="text-sm text-gray-500 italic">{event.detail}</p>
                      </CardContent>
                    </Card>

                    {/* Timeline Node */}
                    <div className="flex justify-center">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${event.color} border-4 border-white shadow-lg z-10`}></div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-6">
                    {/* Timeline Node */}
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${event.color} border-4 border-white shadow-lg z-10`}></div>
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 border-0 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center`}>
                            <IconComponent className="text-white" size={20} />
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-800">{event.year}</div>
                            <div className="text-base font-semibold text-gray-700">{event.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                        <p className="text-xs text-gray-500 italic">{event.detail}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">The Journey Continues</h3>
          <p className="text-lg text-white/90">
            From a simple idea to a global revolution - blockchain technology continues to evolve and shape our digital future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
