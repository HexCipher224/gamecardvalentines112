import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "/game-photos/1.avif",
  "/game-photos/2.avif",
  "/game-photos/3.avif",
  "/game-photos/4.avif",
  "/game-photos/5.avif",
  "/game-photos/6.avif",
  "/game-photos/7.avif",
  "/game-photos/8.avif",
  "/game-photos/9.avif",
  "/game-photos/10.avif",
  "/game-photos/11.avif",
  "/game-photos/12.avif",
  "/game-photos/13.avif",
  "/game-photos/14.avif",
  "/game-photos/15.avif",
  "/game-photos/16.avif",
  "/game-photos/17.avif",
  "/game-photos/18.avif",
  "/game-photos/19.avif",
  "/game-photos/20.avif",
  "/game-photos/21.avif",
  "/game-photos/22.avif",
  "/game-photos/23.avif",
  "/game-photos/24.avif",
  "/game-photos/25.avif",
  "/game-photos/26.avif",
  "/game-photos/27.avif",
  "/game-photos/28.avif",
  "/game-photos/29.avif",
  "/game-photos/30.avif",
  "/game-photos/31.avif",
  "/game-photos/32.avif",
  "/game-photos/33.avif",
  "/game-photos/34.avif",
  "/game-photos/35.avif",
  "/game-photos/36.avif",
];

export default function ValentinesProposal({ name = "Princess Neema", onNext }: { name?: string; onNext?: () => void }) {
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  const handleYesClick = () => {
    setShowFireworks(true);
    setTimeout(() => {
      onNext?.();
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 z-0 p-4">
      {/* Image Grid Background */}
      <div className="absolute inset-0 grid grid-cols-6 opacity-10 pointer-events-none">
        {images.slice(0, 36).map((src, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={src}
              alt={`Memory ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center w-full max-w-2xl relative z-10"
      >
        <h2
          className={`text-4xl lg:text-5xl font-semibold mb-12 text-red-600 drop-shadow-lg text-center ${playfairDisplay.className}`}
        >
          {name}, will you be my Valentine? 💕
        </h2>

        {/* Custom Photo - Replace with your own */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/downloads/2be372228f"
            alt="Valentine Photo"
            width={250}
            height={250}
            className="rounded-xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Yes/No Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-12 relative z-50"
        >
          <button
            className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
            onClick={handleYesClick}
          >
            Yes, I will! 🥰
          </button>
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
            style={
              position
                ? {
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                  }
                : {}
            }
            onMouseEnter={() => setPosition(getRandomPosition())}
            onClick={() => setPosition(getRandomPosition())}
          >
            No, I won&apos;t 😢
          </button>
        </motion.div>
      </motion.div>

      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          />
        </div>
      )}
    </div>
  );
}
