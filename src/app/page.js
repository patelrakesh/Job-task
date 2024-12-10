'use client'
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import CategoryItem from './components/CategoryItem';
import StayConnected from "./components/StayConnected";
import NeedsPet from './components/NeedsPet';
import Footer from "./components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryItem />
      <NeedsPet />
      <div className="relative">
        <StayConnected />
        <Footer />
      </div>
    </div>
  );
}
