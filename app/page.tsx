import BestSellers from "./components/sections/BestSellers";
import FashionCarousel from "./components/sections/fashion-carousel";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import ImageSlider from "./components/sections/ImageSlider";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <ImageSlider />
      <FashionCarousel />
      <FeaturedProducts />
      <BestSellers />
    </div>
  );
}
