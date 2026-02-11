"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function ForeverTogetherPage({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row gap-8 max-w-5xl items-center justify-center"
      >
        {/* Couple Photo */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Image
              src="/downloads/20260211"
              alt="Us Forever"
              width={400}
              height={500}
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className={`text-4xl lg:text-5xl text-red-600 mb-6 text-center lg:text-left ${playfairDisplay.className}`}
          >
            Forever Together 💕
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-800 text-center lg:text-left leading-8 mb-8"
          >
            We've shared so many special memories together, and I can't wait to create more!
          </motion.p>

          {/* Decorative emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-3 justify-center mb-8 text-4xl"
          >
            <span>💕</span>
            <span>💑</span>
            <span>💕</span>
          </motion.div>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            onClick={onNext}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
          >
            Continue 💕
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
