import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPackages, getPackageBySlug } from "@/lib/packages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPackages().map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Not Found" };
  return { title: `Checkout — ${pkg.name}` };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">🚀</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-400 mb-2"><strong>{pkg.name}</strong> is almost ready for purchase.</p>
        <p className="text-gray-500 text-sm mb-8">Join the waitlist to be first in line when we launch.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input type="email" placeholder="your@email.com"
            className="bg-[#0a0a0f] border border-gray-800 rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition flex-grow" />
          <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition whitespace-nowrap">Join Waitlist</button>
        </div>
        <Link href={`/packages/${pkg.slug}`} className="text-gray-500 hover:text-white text-sm transition">&larr; Back to {pkg.name}</Link>
      </div>
    </main>
  );
}
