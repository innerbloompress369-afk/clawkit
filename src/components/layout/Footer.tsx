import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
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
            </div>
            <p className="text-gray-500 text-sm">Pre-built, security-vetted AI systems for your business.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Packages</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/packages" className="hover:text-white transition">Browse All</Link></li>
              <li><Link href="/quiz" className="hover:text-white transition">Find My Package</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/#faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><span className="text-gray-600">Terms (coming soon)</span></li>
              <li><span className="text-gray-600">Privacy (coming soon)</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ClawKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
