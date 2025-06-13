import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroFloatingIcons from './hero/HeroFloatingIcons';
import HeroContent from './hero/HeroContent';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-24 pb-20">
      <HeroBackground />
      <HeroFloatingIcons />
      <HeroContent onExploreClick={onExploreClick} />
    </section>
  );
};

export default HeroSection;