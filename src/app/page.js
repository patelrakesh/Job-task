'use client'
import Header from "./components/Header";
import CategoryItem from './components/CategoryItem';
import StayConnected from "./components/StayConnected";
import Footer from "./components/Footer";
import ExploreSection from "./components/ExploreSection";
import SellingProductOfMonth from "./components/SellingProductOfMonth";

export default function Home() {
  return (
    
    <div>
      <Header />
      {/* <CategoryItem /> */}
      <ExploreSection />
      <SellingProductOfMonth />
      <StayConnected />
      <Footer />
    </div>
  );
}
