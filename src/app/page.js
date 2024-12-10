'use client'
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import CategoryItem from './components/CategoryItem';
import StayConnected from "./components/StayConnected";
import NeedsPet from './components/NeedsPet';
import Footer from "./components/Footer";
import ExploreSection from "./components/ExploreSection";
import SellingProductOfMonth from "./components/SellingProductOfMonth";
import FeaturesSection from "./components/FeatureSection";
import InstagramSection from "./components/InstagramSection";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryItem />
      <ExploreSection />
      <NeedsPet />
      <SellingProductOfMonth />
      <FeaturesSection />
      <InstagramSection />
      <div className='relative'>
        <StayConnected />
        <Footer />
      </div>
    </div>
  );
}
