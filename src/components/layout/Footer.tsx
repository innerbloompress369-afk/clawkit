import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">OC</div>
              <span className="text-lg font-bold">OpenClaw<span className="text-blue-400">Store</span></span>
            </div>
            <p className="text-gray-500 text-sm">Pre-built, security-vetted OpenClaw systems for your business.</p>
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
          &copy; {new Date().getFullYear()} OpenClaw Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
