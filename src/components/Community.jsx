import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "Adunni Okafor",
      role: "Product Designer at Paystack",
      rating: 5,
      testimonial:
        "PIXMA Academy didn't just teach me design skills – they transformed my entire career trajectory. From unemployed to landing my dream job at Paystack in just 6 months!",
      image: "/johnDoe.jpg",
      course: "Product Design Mastery",
    },
    {
      name: "Tolu Adebayo",
      role: "Product Manager at Chowdeck",
      rating: 5,
      testimonial:
        "The hands-on mentorship and real-world projects gave me the confidence to lead cross-functional teams and launch successful products at Chowdeck.",
      image: "/toluAdebayo.jpg",
      course: "Product Management Accelerator",
    },
    {
      name: "Kemi Balogun",
      role: "UI/UX Designer at Moniepoint",
      rating: 5,
      testimonial:
        "They taught me how to think like a problem solver. Within weeks of graduating, I joined Moniepoint and immediately started shaping user experiences that impact millions.",
      image: "/kemiBalogun.jpg",
      course: "UI/UX Design Bootcamp",
    },
  ];

  const stats = [
    { number: "1200+", label: "Active Members" },
    { number: "5000+", label: "Mentorship Hours" },
    { number: "850+", label: "Job Placements" },
    { number: "180%", label: "Average Salary Increase" },
  ];

  const journeySteps = [
    {
      id: 1,
      title: "Choose Your Path",
      desc: "Select from our comprehensive programs designed for your goals.",
    },
    {
      id: 2,
      title: "Learn & Build",
      desc: "Get hands-on experience with real projects and expert mentorship.",
    },
    {
      id: 3,
      title: "Launch Career",
      desc: "Land your dream job with our career support and network.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 bg-[#F7F8FA]" id="community">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="max-w-3xl">
            <motion.h1
              className="text-5xl font-bold font-family-mono leading-tight text-[#151B28] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Community Stories
            </motion.h1>

            <motion.p
              className="text-xl leading-relaxed font-family-sans-serif text-[#4A4D54] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Our members are proof that opportunity changes everything. See how
              PIXMA Academy has transformed careers and lives across Nigeria and
              beyond.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <motion.h3
                className="text-4xl font-normal text-[#000] font-family-mono mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {stat.number}
              </motion.h3>

              <motion.p
                className="text-base text-[#7D7D7D] font-normal font-family-sans-serif"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-3 gap-[24px] mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white w-[386px] h-[314px] p-[30px] rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 bg-[#1077ED]/5 rounded-xl flex items-center justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Quote className="w-6 h-6 text-[#000]" />
              </motion.div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1 + i * 0.05,
                    }}
                  >
                    <Star className="w-5 h-5 fill-[#fff] text-[#000]" />
                  </motion.div>
                ))}
              </div>

              <motion.blockquote
                className="text-[#000] text-[14px] leading-relaxed mb-4 font-family-sans-serif font-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                "{testimonial.testimonial}"
              </motion.blockquote>

              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-[#1077ED] to-[#05479D] rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                  }}
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <h4 className="text-[#000] font-family-sans-serif font-bold text-[12px]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#000] font-family-sans-serif font-normal text-[12px]">
                    {testimonial.role}
                  </p>
                  <p className="text-[#000] font-family-sans-serif font-normal text-xs mt-1">
                    {testimonial.course}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-[#000000] via-[#05479D] to-[#1077ED] rounded-3xl p-16 text-white text-center"
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-normal font-family-mono mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              Ready to Write Your Success Story?
            </motion.h2>

            <motion.p
              className="text-[#E4E4E4] font-family-sans-serif leading-relaxed mb-12 font-regular text-[18px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join hundreds of learners who have transformed their careers
              through PIXMA Academy. Whether you're starting from scratch or
              upskilling in Product Design or Product Management, we're here to
              support your journey to success.
            </motion.p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white text-[#000] text-[22px] rounded-2xl flex items-center justify-center font-normal font-family-sans-serif mb-4 mx-auto"
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {step.id}
                  </motion.div>
                  <h3 className="text-[14px] font-regular text-[#ffff] font-family-sans-serif leading-[120%] tracking-[-4%] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-regular text-[#E4E4E4] font-family-sans-serif leading-[150%] tracking-[-4%] ">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.button
                className="px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-[15.24px] font-family-sans-serif"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-[15.24px] font-family-sans-serif"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View All Stories
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
