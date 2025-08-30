import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PredictionsSection from '@/components/PredictionsSection';
import LiveFeedSection from '@/components/LiveFeedSection';
import SubscribeModal from '@/components/SubscribeModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  const scrollToPredictions = () => {
    const element = document.getElementById('predictions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onSubscribeClick={() => setIsSubscribeModalOpen(true)} />
      
      <HeroSection 
        onPredictionsClick={scrollToPredictions}
        onSubscribeClick={() => setIsSubscribeModalOpen(true)}
      />
      
      <PredictionsSection />
      
      <LiveFeedSection />
      
      <Footer />
      
      <SubscribeModal 
        open={isSubscribeModalOpen}
        onOpenChange={setIsSubscribeModalOpen}
      />
    </div>
  );
};

export default Index;
