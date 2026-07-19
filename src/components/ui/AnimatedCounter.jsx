import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const fadeUp = {
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function AnimatedCounter({
  icon,
  number,
  suffix = "+",
  title,
  description,
  duration = 2.8,
  className = "",
  gradient = true
}) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      className={clsx(
        "group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/55 p-8 backdrop-blur-[28px] shadow-[0_20px_70px_rgba(59,130,246,.12)] transition-all duration-500 hover:border-blue-300/40 hover:shadow-[0_35px_100px_rgba(79,70,229,.18)]",
        className
      )}
    >

      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {icon && (

        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">

          {icon}

        </div>

      )}

      <h2
        className={clsx(
          "text-5xl font-black tracking-tight",
          gradient
            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent"
            : "text-slate-900"
        )}
      >

        {inView && (

          <CountUp
            end={number}
            duration={duration}
          />

        )}

        {suffix}

      </h2>

      <h3 className="mt-4 text-xl font-bold text-slate-900">

        {title}

      </h3>

      {description && (

        <p className="mt-4 leading-8 text-slate-600">

          {description}

        </p>

      )}

    </motion.div>
  );

}