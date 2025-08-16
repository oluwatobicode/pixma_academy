import { motion, useAnimationControls, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 1,
  },
};

const AnimatedText = ({
  text,
  className,
  el: Wrapper = "p",
  once,
  repeatDelay,
}) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const controls = useAnimationControls();

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line) => (
          <span className="block">
            {line.split(" ").map((word) => (
              <span className="inline-block">
                {word.split("").map((char) => (
                  <motion.span
                    className="inline-block"
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
export default AnimatedText;
