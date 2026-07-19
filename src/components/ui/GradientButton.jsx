import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button"
}) {

  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-500 focus:outline-none";

  const sizes = {
    sm: "h-11 px-6 text-sm",
    md: "h-14 px-8 text-base",
    lg: "h-16 px-10 text-lg"
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-[0_20px_50px_rgba(59,130,246,.25)] hover:shadow-[0_30px_80px_rgba(79,70,229,.35)]",

    secondary:
      "border border-white/30 bg-white/55 text-slate-800 backdrop-blur-2xl shadow-[0_15px_40px_rgba(59,130,246,.08)] hover:border-blue-300/40 hover:bg-white/70",

    outline:
      "border border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50",

    ghost:
      "text-slate-700 hover:bg-white/60"
  };

  const classes = clsx(
    baseClasses,
    sizes[size],
    variants[variant],
    fullWidth && "w-full",
    disabled && "pointer-events-none opacity-50",
    className
  );

  const content = (
    <>
      {/* Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Shine */}
      <div className="absolute -left-32 top-0 h-full w-20 -skew-x-12 bg-white/30 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-3">

        {children}

        {icon && (
          <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
        )}

      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}