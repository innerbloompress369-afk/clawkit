"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="inline-block mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-blue-900/50 text-blue-300 border border-blue-700/50">
            20 Business-Ready Packages &middot; 15-Min Install
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Your business on autopilot.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            No developer needed.
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
          Pre-built AI systems for your specific business — security-vetted, cost-optimized, and ready to install in 15 minutes.
        </motion.p>

        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className="text-[15px] text-gray-500 max-w-2xl mx-auto mb-10">
          ClawKit configures AI for your business so you don&apos;t have to.
        </motion.p>

        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition glow">Help Me Choose</Link>
          <Link href="/packages" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition">Browse Packages</Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-6 text-sm text-gray-500"
        >
          <span>Trusted by 200+ small businesses</span>
          <span>&middot;</span>
          <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>&ldquo;Installed in 12 minutes. Already saving 4 hours a week.&rdquo;</span>
          <span>&middot;</span>
          <span>— Sarah K., Home Services</span>
        </motion.div>

        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className="text-sm text-gray-600 mt-4">
          Agents. Memory. Orchestration. Security. Cost controls. All built in.
        </motion.p>
      </motion.div>
    </section>
  );
}
