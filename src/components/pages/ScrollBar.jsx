"use client";

import { motion, useScroll } from "motion/react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: "75px",
        left: 0,
        right: 0,
        height: "10px",
        transformOrigin: "left",
        originX: 0,
        backgroundColor: "#eaa5a5",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollBar;
