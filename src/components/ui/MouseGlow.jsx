import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function MouseGlow({
  children,
  className = "",
  size = 350,
  color = "rgba(59,130,246,0.18)"
}) {

  const containerRef = useRef(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25
  });

  const handleMove = (e) => {

    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

  };

  const handleLeave = () => {

    mouseX.set(-1000);
    mouseY.set(-1000);

  };

  return (

    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx("relative overflow-hidden", className)}
    >

      <motion.div
        className="pointer-events-none absolute rounded-full blur-[90px]"
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}