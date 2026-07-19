import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
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
      duration: .8,
      ease: [0.22,1,0.36,1]
    }
  }
};

export default function Reveal({
  children,
  className="",
  delay=0,
  duration=.8,
  y=50,
  once=true,
  amount=.2
}){

  return(

    <motion.div

      variants={{
        hidden:{
          opacity:0,
          y,
          filter:"blur(8px)"
        },
        show:{
          opacity:1,
          y:0,
          filter:"blur(0px)",
          transition:{
            duration,
            delay,
            ease:[0.22,1,0.36,1]
          }
        }
      }}

      initial="hidden"

      whileInView="show"

      viewport={{
        once,
        amount
      }}

      className={clsx(className)}

    >

      {children}

    </motion.div>

  );

}