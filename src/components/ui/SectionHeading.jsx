import { motion } from "framer-motion";
import clsx from "clsx";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function SectionHeading({
  tag,
  title,
  gradient,
  description,
  align = "center",
  className = "",
  maxWidth = "4xl"
}) {

  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  const widths = {
    md: "max-w-2xl",
    lg: "max-w-3xl",
    xl: "max-w-4xl",
    "2xl": "max-w-5xl",
    "3xl": "max-w-6xl",
    "4xl": "max-w-7xl"
  };

  return (

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={clsx(
        "mx-auto mb-20 flex flex-col",
        alignment[align],
        widths[maxWidth],
        className
      )}
    >

      {tag && (

        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/60 px-5 py-2 backdrop-blur-xl">

          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">

            {tag}

          </p>

        </div>

      )}

      <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

        {title}

        {gradient && (

          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">

            {gradient}

          </span>

        )}

      </h2>

      {description && (

        <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600">

          {description}

        </p>

      )}

    </motion.div>

  );

}
