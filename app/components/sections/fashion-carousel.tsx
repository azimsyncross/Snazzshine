"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function FashionCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {/* Card 1 */}
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img1.jpg"
              alt="Fashion sale promotion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Don&apos;t Miss Today</p>
              <h3 className="text-2xl font-bold">50% OFF</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img2.jpg"
              alt="New collection promotion"
              fill
              className="object-cover object-[25%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">New Collection</p>
              <h3 className="text-2xl font-bold">Need Now</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img3.jpg"
              alt="Must-have styles promotion"
              fill
              className="object-cover object-[50%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Your Looks</p>
              <h3 className="text-2xl font-bold">Must Haves</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img4.jpg"
              alt="Winter spring collection promotion"
              fill
              className="object-cover object-[75%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Take 20% OFF</p>
              <h3 className="text-2xl font-bold">Winter Spring!</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img1.jpg"
              alt="Fashion sale promotion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Don&apos;t Miss Today</p>
              <h3 className="text-2xl font-bold">50% OFF</h3>
            </div>
          </div>
          <div className="relative min-w-[300px] h-[400px] snap-start rounded-lg overflow-hidden">
            <Image
              src="/fashion/img2.jpg"
              alt="New collection promotion"
              fill
              className="object-cover object-[25%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">New Collection</p>
              <h3 className="text-2xl font-bold">Need Now</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
