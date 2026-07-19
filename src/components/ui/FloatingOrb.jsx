import { motion } from "framer-motion";
import clsx from "clsx";

export default function FloatingOrb({
  size = 300,
  color = "blue",
  top,
  bottom,
  left,
  right,
  blur = 120,
  duration = 12,
  delay = 0,
  opacity = 0.18,
  className = ""
}) {

  const colors = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    cyan: "bg-cyan-400",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    amber: "bg-amber-400"
  };

  return (

    <motion.div

      initial={{
        x: 0,
        y: 0,
        scale: 1
      }}

      animate={{
        x: [0, 40, -30, 20, 0],
        y: [0, -35, 25, -20, 0],
        scale: [1, 1.08, 0.96, 1.04, 1]
      }}

      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration,
        ease: "easeInOut",
        delay
      }}

      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        opacity,
        filter: `blur(${blur}px)`
      }}

      className={clsx(
        "pointer-events-none absolute rounded-full",
        colors[color],
        className
      )}

    />

  );

}