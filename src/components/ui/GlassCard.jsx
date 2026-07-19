import { motion } from "framer-motion";
import clsx from "clsx";

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  animate = true,
  delay = 0,
  onClick,
  as = "div"
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      variants={animate ? defaultVariants : undefined}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "show" : false}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.015,
              rotateX: 2,
              rotateY: 2
            }
          : undefined
      }
      onClick={onClick}
      className={clsx(
        "group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/55 backdrop-blur-[28px] shadow-[0_20px_70px_rgba(59,130,246,0.12)] transition-all duration-500",
        hover &&
          "hover:border-blue-300/40 hover:shadow-[0_35px_100px_rgba(79,70,229,0.20)]",
        className
      )}
    >
      {/* Gradient Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Secondary Glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Gradient Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/20 via-transparent to-blue-200/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Shine Effect */}
      <div className="pointer-events-none absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/30 blur-xl opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />

      {/* Top Highlight */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}