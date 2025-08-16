import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const lines = [
    "Efficient training for",
    "Product Designers (UI/UX)",
    "& Product Managers",
  ];

  return (
    <div className="min-h-screen px-6 py-24" id="hero">
      <div className="max-w-6xl mx-auto h-screen flex items-center gap-10 justify-center">
        <div className="flex-1  pr-12">
          {lines.map((line, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              className="text-5xl font-medium font-family-mono tracking-tight mb-8"
            >
              {line}
            </motion.h1>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="text-lg leading-[1.34] tracking-tight font-family-sans-serif text-[#4A4D54] mb-5"
          >
            Learn industry-ready skills with hands-on projects, mentorship, and
            career support.
          </motion.p>

          <div className="flex gap-4">
            {["Explore Programs", "Join Community"].map((label, i) => (
              <motion.button
                key={i}
                whileTap={{
                  scale: 0.9,
                  transition: { type: "spring", stiffness: 300, damping: 8 },
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1 + i * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="px-6 py-3 rounded-[12px] font-family-sans-serif mb-8 bg-[#1077ED] text-white text-sm hover:bg-[#0d5bb8] transition-colors duration-200"
              >
                {label}
              </motion.button>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-normal font-family-sans-serif text-[#7D7D7D]">
              Trusted by leading organizations
            </p>
            <p className="text-[#1077ED] font-family-sans-serif text-2xl font-normal leading-none tracking-tight">
              125K+
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 w-96">
          <div className="relative rounded-lg h-96 flex items-center justify-center">
            <div>
              <img src="/heroImage.svg" alt="Hero model image" />
            </div>

            <div className="absolute top-5 left-4 transform -translate-x-1/2 flex items-center justify-center">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/figma.svg"
                className="w-42"
                alt="figma icon"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-4 transform -translate-x-1/2 flex items-center justify-center"
            >
              <img src="/solutions.svg" className="w-62" alt="solutions icon" />
            </motion.div>

            <div className="absolute -bottom-14 left-4 transform -translate-x-1/2 flex items-center justify-center">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/google.svg"
                className="w-42"
                alt="google icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
