"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-blur sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            CK
          </div>
          <span className="text-xl font-bold">
            Claw<span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Kit</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/packages" className="hover:text-white transition">Packages</Link>
          <Link href="/#how-it-works" className="hover:text-white transition">How It Works</Link>
          <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition">
            Find My Package
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm">
          <Link href="/packages" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>Packages</Link>
          <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/#pricing" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition text-center" onClick={() => setMobileOpen(false)}>
            Find My Package
          </Link>
        </div>
      )}
    </nav>
  );
}
