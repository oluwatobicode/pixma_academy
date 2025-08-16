import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest);
    });

    const controls = animate(count, 500, { duration: 5 });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded]);

  return (
    <div className="min-h-screen px-6 py-24 bg-[#F7F8FA]" id="about">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-[40px] font-normal leading-[1.34] font-family-mono">
            Who We Are
          </h1>
          <p className="text-lg leading-[1.34] tracking-tight text-[#4A4D54] mb-8 font-family-sans-serif">
            PIXMA Academy is a creative learning and mentorship hub dedicated to
            empowering individuals with industry-ready skills, turning potential
            into real opportunities through practical programs and career
            connections.
          </p>
        </div>

        <div className="flex flex-row items-center gap-10 mt-8">
          <div className="space-y-6 flex-1">
            <h1 className="text-[32px] font-family-mono leading-[1.34] tracking-tight font-medium">
              Building Tomorrow's Tech Leaders Today
            </h1>
            <p className="text-lg leading-[1.34] tracking-tight text-[#4A4D54] font-regular font-family-sans-serif">
              We believe that everyone deserves access to quality tech education
              and mentorship. Our programs are designed to bridge the gap
              between learning and earning, providing practical skills,
              real-world experience, and career support that transforms lives.
            </p>

            <ul className="list-disc mt-4 space-y-3 pl-4">
              <li className="text-[14px] font-family-sans-serif">
                100% practical, hands-on learning approach
              </li>
              <li className="text-[14px] font-family-sans-serif">
                Industry mentorship and career guidance
              </li>
              <li className="text-[14px] font-family-sans-serif">
                Supportive community of like-minded learners
              </li>
            </ul>
          </div>

          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="row-1 p-4 px-14 py-8 bg-[#1077ED] rounded-xl space-y-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-[30px] font-family-sans-serif text-white leading-[150%] tracking-[-4%] ">
                {displayValue}+
              </h2>
              <p className="text-[15.24px] text-white leading-[120%] tracking-[-3%]">
                Lives Transformed
              </p>
            </motion.div>
            <motion.div
              className="row-1 p-4 px-14 py-8 bg-[#29D77B] rounded-xl space-y-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-[30px] font-family-sans-serif text-white leading-[150%] tracking-[-4%]">
                95%
              </h2>
              <p className="text-[15.24px] text-white leading-[120%] tracking-[-3%]">
                Job Placement Rate
              </p>
            </motion.div>
            <motion.div
              className="bg-[#A550FD] rounded-xl p-4 px-14 py-8 space-y-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-[30px] font-family-sans-serif text-white leading-[150%] tracking-[-4%]">
                50+
              </h2>
              <p className="text-[15.24px] text-white leading-[120%] tracking-[-3%]">
                Industry Partners
              </p>
            </motion.div>
            <motion.div
              className="bg-[#F84829] rounded-xl p-4 px-8 py-6 space-y-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-[30px] font-family-sans-serif text-white leading-[150%] tracking-[-4%]">
                4.9/5
              </h2>
              <p className="text-[15.24px] text-white leading-[120%] tracking-[-3%]">
                Student Rating
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="mt-5">
          <div className="">
            <h1>Integrated Marketing Solutions</h1>
          </div>
          <div className="">
            <div className="bg-[#1077ED0F]"></div>
            <h3>Mission-Driven</h3>
            <p>
              Empowering individuals with industry-ready skills for the tech and
              creative economy.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
