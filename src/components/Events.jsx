import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  const upComingEvents = [
    {
      image: "/product_design.jpg",
      title: "Product Design Workshop",
      date: "February 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "PIXMA Academy Hub",
      spots: 30,
    },
    {
      image: "/project_managemnet.jpg",
      title: "Project Management Workshop",
      date: "February 20, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "PIXMA Academy Hub",
      spots: 30,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 bg-white" id="events">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="max-w-3xl text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-medium leading-tight font-family-mono text-[#151B28] mb-6"
            >
              Events & Workshops
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl leading-relaxed font-family-sans-serif text-[#4A4D54] font-light"
            >
              Join our community events, workshops, and networking sessions
              designed to accelerate your learning and connect you with
              like-minded professionals.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-row items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-[#202636] p-8 w-[609px] h-[390px] rounded-[24px] flex flex-col justify-between"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1
                  className="text-[32px] text-white font-normal font-family-mono leading-tight mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Product Leadership Summit
                </motion.h1>

                <motion.p
                  className="text-white text-lg font-normal font-family-sans-serif leading-relaxed tracking-tight mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Join industry leaders, successful entrepreneurs, and
                  change-makers for a day of inspiration, networking, and career
                  advancement.
                </motion.p>

                <div className="flex flex-row gap-6 mt-6 mb-6">
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
                    >
                      <Calendar className="w-5 h-5 text-black" />
                    </motion.div>
                    <div className="text-sm font-normal text-white">
                      <h3 className="font-normal font-family-sans-serif">
                        February 15, 2025
                      </h3>
                      <p className="text-white/80 font-family-sans-serif">
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-white"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                    >
                      <MapPin className="w-5 h-5 text-black" />
                    </motion.div>
                    <div className="text-sm font-normal text-white">
                      <h3 className="font-normal font-family-sans-serif">
                        Lagos Continental Hotel
                      </h3>
                      <p className="text-white/80 font-family-sans-serif">
                        500+ expected
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <motion.button
                  className="px-6 py-3 border-2 cursor-pointer border-white text-white rounded-xl font-normal font-family-sans-serif"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Register Now
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 cursor-pointer border-white text-white rounded-xl font-normal font-family-sans-serif"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-[501px] h-[390px] rounded-[24px] overflow-hidden"
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.img
                src="/events.png"
                alt="events png"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-medium leading-tight font-family-mono text-[#6E7176] mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Upcoming Events
          </motion.h1>

          <div className="flex flex-row gap-8">
            {upComingEvents.map((el, index) => (
              <motion.div
                key={index}
                className="bg-[#F8F9FA] h-full w-full max-w-4xl rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="w-full h-[200px] rounded-xl overflow-hidden mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={el.image}
                    alt="Event"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-medium font-family-mono text-[#151B28] mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  >
                    {el.title}
                  </motion.h3>

                  <motion.div
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[#4A4D54] text-[14px] font-family-sans-serif font-medium">
                        {el.date}
                      </span>
                      <span className="text-[#4A4D54] text-[14px] font-family-sans-serif font-medium">
                        {el.time}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[#4A4D54] text-xs font-family-sans-serif font-medium">
                        {el.location}
                      </div>
                      <div className="text-[#6E7176] text-xs font-family-sans-serif">
                        {el.spots} spots available
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.2 }}
                >
                  <motion.button
                    className="w-full py-4 px-6 rounded-xl text-white cursor-pointer bg-[#1077ED] font-medium font-family-sans-serif"
                    whileHover={{ backgroundColor: "#0d5bb5", scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Register Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-full rounded-3xl p-16 flex flex-col items-center justify-center mx-auto bg-[#F5F5F5]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[32px] font-medium font-family-mono text-[#151B28] mb-12 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recent Events
            </motion.h1>

            <div className="flex flex-row gap-[29px] items-center justify-center">
              {[
                {
                  number: "150",
                  title: "Product Design Bootcamp",
                  date: "January 2025",
                },
                {
                  number: "80",
                  title: "Mentorship Matching Event",
                  date: "December 2024",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white flex flex-col items-center justify-center h-[200px] w-[280px] p-8 rounded-3xl"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ y: -10, rotate: 2 }}
                >
                  <motion.span
                    className="text-4xl font-bold leading-[150%] tracking-[-4%] font-family-mono mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {stat.number}
                  </motion.span>

                  <span className="text-[14px] leading-[120%] tracking-normal-[-4%] font-normal font-family-sans-serif text-[#6E7176] mb-2 text-center">
                    {stat.title}
                  </span>
                  <span className="text-sm leading-[150%] tracking-normal-[-4%] font-normal font-family-sans-serif text-[#6E7176]">
                    {stat.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col space-y-6 mx-auto items-center justify-center max-w-2xl">
            <motion.h1
              className="text-4xl font-bold leading-tight font-family-mono text-[#151B28] mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Never Miss An Event
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed text-center font-light font-family-sans-serif text-[#4A4D54]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Subscribe to our newsletter to get notified about upcoming events,
              workshops, and exclusive community opportunities.
            </motion.p>

            <motion.div
              className="flex flex-row items-center justify-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.input
                type="email"
                className="w-[350px] h-[52px] px-4 py-3 placeholder:text-[#6E7176] border-2 border-[#E4E4E4] rounded-xl text-base font-normal font-family-sans-serif"
                name="email"
                placeholder="Enter your email"
                id="email"
                whileFocus={{ borderColor: "#1077ED", scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                className="h-[52px] px-6 py-3 border-2 text-[#6E7176] border-[#E4E4E4] cursor-pointer rounded-xl text-base font-medium font-family-sans-serif"
                whileHover={{
                  backgroundColor: "#1077ED",
                  color: "white",
                  borderColor: "#1077ED",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
