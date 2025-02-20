import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/banner/main-banner1.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <svg
          className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-[50%] stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pattern"
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
            fill="url(#pattern)"
          />
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Step into Style and Comfort
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl">
            Discover our curated collection of premium footwear. From classic
            designs to the latest trends, find your perfect pair for every
            occasion.
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
    </section>
  );
}
