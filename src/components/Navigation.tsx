import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onSubscribeClick: () => void;
}

const Navigation = ({ onSubscribeClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌊</span>
            </div>
            <span className="font-bold text-xl text-primary">Meteorofy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('landing')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('predictions')}
              className="nav-link"
            >
              Predictions
            </button>
            <button 
              onClick={() => scrollToSection('live-alerts')}
              className="nav-link"
            >
              Live Alerts
            </button>
            <Button 
              onClick={onSubscribeClick}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;