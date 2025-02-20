"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  description: string;
};

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: "/slider/slider.jpg",
      title: "Step into Style and Comfort",
      description:
        "Discover our curated collection of premium footwear. From classic designs to the latest trends, find your perfect pair for every occasion.",
    },
    {
      image: "/slider/slider-2.jpg",
      title: "New Collection Arrivals",
      description:
        "Explore our latest seasonal collection. Trendy designs crafted with premium materials for unmatched quality and comfort.",
    },
    {
      image: "/slider/slider-3.jpg",
      title: "Step into Style and Comfort",
      description:
        "Discover our curated collection of premium footwear. From classic designs to the latest trends, find your perfect pair for every occasion.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup to prevent multiple intervals
  }, [currentSlide, slides.length]);

  return (
    <section className="relative h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id={`pattern-${index}`}
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill={`url(#pattern-${index})`}
              />
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-20 flex h-full items-center justify-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl">
                  {slide.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/products?sort=price_asc">
                      Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/categories">Browse Categories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black bg-opacity-30 p-2 text-white hover:bg-opacity-50 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black bg-opacity-30 p-2 text-white hover:bg-opacity-50 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
