
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface NavigationProps {
  sections: Array<{
    id: string;
    title: string;
    icon: any;
  }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ sections, activeSection, setActiveSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Group sections for better organization
  const basicsSections = sections.filter(s => ['hero', 'intro', 'how-it-works', 'public-private', 'history'].includes(s.id));
  const technicalSections = sections.filter(s => ['consensus', 'cryptography', 'mining'].includes(s.id));
  const applicationsSections = sections.filter(s => ['pros-cons', 'use-cases', 'nfts', 'smart-contracts'].includes(s.id));
  const advancedSections = sections.filter(s => ['emerging', 'wallets', 'future'].includes(s.id));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blockchain Guide
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Button
                    variant={activeSection === 'hero' ? "default" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection('hero')}
                  >
                    Home
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    Basics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-2 p-4">
                      {basicsSections.slice(1).map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <Button
                            key={section.id}
                            variant={activeSection === section.id ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className="justify-start w-full"
                          >
                            <IconComponent size={16} className="mr-2" />
                            {section.title}
                          </Button>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    Technical
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-2 p-4">
                      {technicalSections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <Button
                            key={section.id}
                            variant={activeSection === section.id ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className="justify-start w-full"
                          >
                            <IconComponent size={16} className="mr-2" />
                            {section.title}
                          </Button>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    Applications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-2 p-4">
                      {applicationsSections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <Button
                            key={section.id}
                            variant={activeSection === section.id ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className="justify-start w-full"
                          >
                            <IconComponent size={16} className="mr-2" />
                            {section.title}
                          </Button>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm">
                    Advanced
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-2 p-4">
                      {advancedSections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <Button
                            key={section.id}
                            variant={activeSection === section.id ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className="justify-start w-full"
                          >
                            <IconComponent size={16} className="mr-2" />
                            {section.title}
                          </Button>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection(section.id)}
                    className="justify-start text-sm"
                  >
                    <IconComponent size={16} className="mr-2" />
                    {section.title}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
