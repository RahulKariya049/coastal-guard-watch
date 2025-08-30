import { Button } from '@/components/ui/button';
import cloudsImage from '@/assets/clouds-ocean-bg.jpg';

interface HeroSectionProps {
  onPredictionsClick: () => void;
  onSubscribeClick: () => void;
}

const HeroSection = ({ onPredictionsClick, onSubscribeClick }: HeroSectionProps) => {
  return (
    <section id="landing" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with moving clouds */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cloudsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
        <div className="clouds-bg opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Coastal Threat Monitoring
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Predict. Prepare. Protect.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Track heavy rainfall, coastal threats, and alerts across India's vulnerable regions. 
            Advanced monitoring for safer coastal communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={onPredictionsClick}
              size="lg"
              className="hero-button text-lg px-8 py-4"
            >
              Check Current Weather
            </Button>
            <Button 
              onClick={onSubscribeClick}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 rounded-xl font-semibold shadow-card hover:shadow-ocean transition-all duration-300 hover:scale-105"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;