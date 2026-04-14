"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="nav-blur sticky top-0 z-50 border-b border-gray-800"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="44" height="44" rx="13" fill="#070F1C" />
            <path d="M7,14 L22,9 L37,14 L37,34 L22,39 L7,34 Z" stroke="#1E4A8A" strokeWidth="1.6" fill="none" />
            <path d="M7,14 L22,19 L37,14" stroke="#378ADD" strokeWidth="2" fill="none" />
            <line x1="22" y1="19" x2="22" y2="39" stroke="#378ADD" strokeWidth="2" />
            <path d="M15,11.5 L22,19 L29,11.5" stroke="#5BA3E8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <circle cx="22" cy="19" r="2.8" fill="#378ADD" />
          </svg>
          <span style={{ fontWeight: 800, letterSpacing: "-0.8px", fontSize: "17px" }}>
            <span className="text-white">Claw</span><span style={{ color: "#378ADD" }}>Kit</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/packages" className="hover:text-white transition">Packages</Link>
          <Link href="/#how-it-works" className="hover:text-white transition">How It Works</Link>
          <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition">
              Find My Package
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/packages" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>How It Works</Link>
            <Link href="/#pricing" className="text-gray-400 hover:text-white transition" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition text-center" onClick={() => setMobileOpen(false)}>
              Find My Package
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
