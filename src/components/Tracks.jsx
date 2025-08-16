import { motion } from "framer-motion";

const Tracks = () => {
  const trackLearns = [
    {
      name: "Figma",
    },
    {
      name: "User Research",
    },
    {
      name: "Wireframing",
    },
    {
      name: "Design Systems",
    },
    {
      name: "Prototyping",
    },
  ];

  const pmTrackLearns = [
    {
      name: "Agile/Scrum",
    },
    {
      name: "Project Planning",
    },
    {
      name: "Risk Management",
    },
    {
      name: "Team Leadership",
    },
    {
      name: "Stakeholder Mgmt",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#d1d5db",
      transition: {
        duration: 0.2,
      },
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen px-6 py-24 bg-white" id="programs">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center max-w-2xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-family-mono text-[40px] tracking-[-4%] leading-[1.34] font-normal mb-8"
          >
            Learn. Create. Lead.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg leading-[1.34] tracking-tight text-[#4A4D54] mb-5 font-family-sans-serif"
          >
            Whether you're a beginner or experienced creator, our programs
            provide hands-on training, mentorship, and career connections that
            turn learning into thriving careers.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-5 flex items-center justify-center gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA] h-full w-full max-w-4xl rounded-lg p-3 flex flex-col gap-8 cursor-pointer"
          >
            <div className="p-4 space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[22px] font-medium leading-[1.34] font-family-mono tracking-tight"
              >
                Product Design (UI/UX) Career Track
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[16px] leading-[1.34] tracking-tight text-[#4A4D54] font-family-sans-serif"
              >
                Master research, wireframing, prototyping, and design systems.
                Build a portfolio that gets you hired.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="list-disc text-[15px] flex flex-row gap-8 mt-4 pl-4 text-[#4A4D54] font-normal font-family-sans-serif"
              >
                <li>12 Weeks</li>
                <li>Certificate</li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4"
              >
                <h4 className="text-[15px] text-[#4A4D54] leading-[150%] font-normal font-family-sans-serif">
                  What you'll learn:
                </h4>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="mt-2 flex flex-row gap-4"
                >
                  {trackLearns.map((el, index) => (
                    <motion.div
                      key={index}
                      variants={chipVariants}
                      whileHover="hover"
                      className="text-black px-3 py-3 bg-[#E4E4E4] rounded-xl text-[10px] font-normal font-family-sans-serif cursor-pointer"
                    >
                      {el.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{
                  backgroundColor: "#0d5bb8",
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(16, 119, 237, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1077ED] w-full text-white rounded-[12px] py-2 text-[13px] font-normal font-family-sans-serif hover:bg-[#0d5bb8] transition-colors duration-200"
              >
                Join Our Community
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#FAFAFA] h-full w-full max-w-4xl rounded-lg p-3 flex flex-col gap-8 cursor-pointer"
          >
            <div className="p-4 space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[22px] font-medium leading-[1.34] font-family-mono tracking-tight"
              >
                Project Management Career Track
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[16px] leading-[1.34] tracking-tight text-[#4A4D54] font-family-sans-serif"
              >
                Learn project planning, risk management, and team leadership.
                Build skills that drive successful project delivery.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="list-disc flex flex-row gap-8 mt-4 pl-4 text-[15px] text-[#4A4D54] font-normal font-family-sans-serif"
              >
                <li>12 Weeks</li>
                <li>Certificate</li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4"
              >
                <h4 className="text-[15px] text-[#4A4D54] leading-[150%] font-normal font-family-sans-serif">
                  What you'll learn:
                </h4>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="mt-2 flex flex-row gap-4"
                >
                  {pmTrackLearns.map((el, index) => (
                    <motion.div
                      key={index}
                      variants={chipVariants}
                      whileHover="hover"
                      className="text-black px-3 py-3 bg-[#E4E4E4] rounded-xl text-[10px] font-normal font-family-sans-serif cursor-pointer"
                    >
                      {el.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{
                  backgroundColor: "#0d5bb8",
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(16, 119, 237, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1077ED] w-full text-white rounded-[12px] py-2 text-[13px] font-normal font-family-sans-serif hover:bg-[#0d5bb8] transition-colors duration-200"
              >
                Join Our Community
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={gradientVariants}
          whileHover="hover"
          className="mt-5 w-full h-full p-10 bg-gradient-to-tr from-[#4FABBC] via-[#0251AC] to-[#4FABBC] rounded-[28.57px] cursor-pointer"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-white flex flex-col items-center justify-center"
          >
            <div className="max-w-3xl text-center space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-[32px] font-family-mono leading-[1.34] tracking-tight font-normal"
              >
                1-on-1 Mentorship Program
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg leading-[1.34] tracking-tight text-white font-light font-family-sans-serif"
              >
                Work directly with industry mentors who have been where you want
                to go. Get personalized guidance, career advice, and the support
                you need to accelerate your growth.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 border-2 border-[#fff] rounded-[12px] text-[13px] font-light font-family-sans-serif cursor-pointer hover:bg-white/10 transition-all duration-200"
              >
                Find a mentor
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 border-2 border-[#fff] rounded-[12px] text-[13px] font-light font-family-sans-serif cursor-pointer hover:bg-white/10 transition-all duration-200"
              >
                Become a Mentor
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tracks;
