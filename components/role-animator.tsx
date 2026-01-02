"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const roles = ["Software Developer", "Web Developer", "Frontend Developer"];

const roleVariants: Variants = {
  enter: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOut
    },
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOut
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1], // easeIn
    },
  },
};

export function RoleAnimator() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsInitial(false);
      setCurrentRoleIndex(1);

      const interval = setInterval(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 6000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div className="relative inset-shadow-xs sm:w-60 sm:h-12 w-48 h-10 flex items-center justify-center overflow-hidden border border-border rounded-lg bg-background/50">
      {isInitial ? (
        <div className="text-lg sm:text-xl font-semibold text-primary">
          {roles[0]}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoleIndex}
            variants={roleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute text-lg sm:text-xl font-semibold text-primary"
          >
            {roles[currentRoleIndex]}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
