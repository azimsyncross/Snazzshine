import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Snazzshine.</h3> */}
            <Image
              src="/logo-1.png"
              alt="Snazzshine."
              width={260}
              height={30}
            />
            <p className="text-sm text-gray-600">
              Your destination for premium footwear. Quality meets style in
              every step.
            </p>
            <div className="flex space-x-4 ">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?sort=price_asc"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/clothing"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Cloths Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/casual"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Casual Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/accessories"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/blazers"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Blazers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                XinXiangXianZhaiPoZhenZhengFu
                <br />
                JiaShuYuanZhenZhengFu
                <br />
                HeNanSheng, 453000
                <br />
                China
              </li>
              <li>Phone: +86 17024747647</li>
              <li>Email: af167f@outlook.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Snazzshine. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
