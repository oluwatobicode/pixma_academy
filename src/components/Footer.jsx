import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../public/logo.svg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "about" },
    { name: "Programs", href: "programs" },
    { name: "Community", href: "community" },
    { name: "Events", href: "events" },
    { name: "Contact", href: "contact" },
  ];

  const programs = [
    { name: "Product Design", href: "product-design" },
    { name: "Product Management", href: "product-management" },
  ];

  const resources = [
    { name: "Blog", href: "blog" },
    { name: "Career Support", href: "career-support" },
    { name: "Alumni Network", href: "alumni-network" },
    { name: "Success Stories", href: "success-stories" },
    { name: "FAQ", href: "faq" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-white">
      <motion.div
        className="max-w-6xl mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-4 lg:grid-cols-5 gap-12 mb-16"
          variants={containerVariants}
        >
          {/* Logo and Description Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex flex-col space-y-6">
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={logo} alt="Pixa Academy Logo" className="w-20 h-7" />
              </motion.div>

              <motion.p
                className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54]"
                variants={itemVariants}
              >
                Empowering the next generation of innovators through practical
                learning, mentorship, and career connections. Join our community
                of ambitious learners and industry professionals.
              </motion.p>

              <motion.div
                className="flex flex-col gap-2"
                variants={itemVariants}
              >
                {["February 22, 2025", "PIXMA Academy Hub", "30 spots"].map(
                  (text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-[#4A4D54] rounded-full"></div>
                      <span className="text-base font-family-sans-serif text-[#4A4D54]">
                        {text}
                      </span>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-sm leading-relaxed mb-6 font-normal font-family-sans-serif text-[#4A4D54]"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer"
                    to={link.href}
                    smooth={true}
                    duration={500}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-sm leading-relaxed mb-6 font-normal font-family-sans-serif text-[#4A4D54]"
              variants={itemVariants}
            >
              Programs
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer"
                    to={program.href}
                    smooth={true}
                    duration={500}
                  >
                    {program.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-sm leading-relaxed mb-6 font-normal font-family-sans-serif text-[#4A4D54]"
              variants={itemVariants}
            >
              Resources
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer"
                    to={resource.href}
                    smooth={true}
                    duration={500}
                  >
                    {resource.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-[#E4E4E4] pt-16 pb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
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

        <motion.div
          className="border-t border-[#E4E4E4] pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base font-normal font-family-sans-serif text-[#4A4D54]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            © 2025 PIXMA Academy. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[#4A4D54] text-base font-family-sans-serif font-normal hover:text-[#1077ED] transition-colors duration-200"
                  whileHover={{
                    y: -2,
                    color: "#1077ED",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {text}
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
