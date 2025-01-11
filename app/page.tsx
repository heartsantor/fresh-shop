import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";

import HeroBanner from "../components/HeroBanner";
import ProductSection from "../components/ProductSection";
import SeasonalOfferSection from "../components/SeasonalOfferSection";
import TestimonialSliderSection from "../components/TestimonialSliderSection";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <ProductSection />
      <AboutSection />
      <SeasonalOfferSection />
      <TestimonialSliderSection />
      <BlogSection />
    </div>
  );
}
