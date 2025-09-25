"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyShop</h2>
          <p className="text-sm">
            The best place to buy your favorite products ❤️  
            Shop easily and securely with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/brands" className="hover:text-white">Brands</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link href="/allorders" className="hover:text-white">My Orders</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>📞 +20 123 456 789</li>
            <li>📧 support@myshop.com</li>
            <li className="flex gap-3 mt-3">
              <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500">Facebook</Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">Instagram</Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-sky-400">Twitter</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  )
}
