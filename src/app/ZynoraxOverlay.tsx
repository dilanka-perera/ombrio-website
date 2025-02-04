"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ZynoraxOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the animation has already been shown in this session using sessionStorage
    const hasShown = sessionStorage.getItem("overlayShown");

    if (hasShown) {
      setIsLoading(false); // Skip the animation if already shown in the current session
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        // Mark the overlay as shown in sessionStorage for the current session
        sessionStorage.setItem("overlayShown", "true");
      }, 5500);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }} // Fade-out after animation
    >
      <div
        className="flex text-white font-bold space-x-1 text-6xl sm:text-7xl md:text-9xl lg:text-10xl"
        style={{ fontFamily: "Bahnschrift, sans-serif" }}
      >
        {"ZYNORAX".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className={letter === "X" ? "text-yellow-600" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
