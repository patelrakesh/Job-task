'use client'
import Header from "./components/Header";
import CategoryItem from './components/CategoryItem';
import StayConnected from "./components/StayConnected";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div>
      <Header />
      <CategoryItem />
      <StayConnected />
      <Footer />
    </div>
  );
}
