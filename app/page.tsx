import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductSection from "./components/ProductSection";
import SeasonalOfferSection from "./components/SeasonalOfferSection";
import TestimonialSliderSection from "./components/TestimonialSliderSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ProductSection />
      <AboutSection />
      <SeasonalOfferSection />
      <TestimonialSliderSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
