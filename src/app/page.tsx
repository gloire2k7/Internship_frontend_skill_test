import HeroSection from '../components/HeroSection';
import CategoryCardsSection from '../components/CategoryCardsSection';
import AromatherapySection from '../components/AromatherapySection';
import BestsellersSection from '../components/BestsellersSection';
import LuxurySoapsSection from '../components/LuxurySoapsSection';
import TrendsSection from '../components/TrendsSection';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCardsSection />
      <AromatherapySection />
      <BestsellersSection />
      <LuxurySoapsSection />
      <TrendsSection />
      <BlogSection />
    </>
  );
}
