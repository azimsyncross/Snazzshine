import BestSellers from "./components/sections/BestSellers";
import FashionCarousel from "./components/sections/fashion-carousel";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FashionCarousel />
      <FeaturedProducts />
      <BestSellers />
    </div>
  );
}
