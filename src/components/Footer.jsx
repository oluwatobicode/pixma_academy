import { Link } from "react-scroll";
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

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto  py-16">
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-12 mb-16 ">
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col">
                <img src={logo} alt="Pixa Academy Logo" className="w-20 h-7" />
              </div>

              <p className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54]">
                Empowering the next generation of innovators through practical
                learning, mentorship, and career connections. Join our community
                of ambitious learners and industry professionals.
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4A4D54] rounded-full"></div>
                  <span className="text-base font-family-sans-serif text-[#4A4D54]">
                    February 22, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4A4D54] rounded-full"></div>
                  <span className="text-base font-family-sans-serif text-[#4A4D54]">
                    PIXMA Academy Hub
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4A4D54] rounded-full"></div>
                  <span className="text-base font-family-sans-serif text-[#4A4D54]">
                    30 spots
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm leading-relaxed mb-6 font-normal font-family-sans-serif text-[#4A4D54]">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54]"
                  to={link.href}
                  smooth={true}
                  duration={500}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm leading-relaxed mb-6 font-normal font-family-sans-serif text-[#4A4D54]">
              Programs
            </h3>
            <div className="flex flex-col space-y-4">
              {programs.map((program, index) => (
                <Link
                  key={index}
                  className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54]"
                  to={program.href}
                  smooth={true}
                  duration={500}
                >
                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm leading-relaxed mb-6  font-normal font-family-sans-serif text-[#4A4D54]">
              Resources
            </h3>
            <div className="flex flex-col space-y-4">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54]"
                  to={resource.href}
                  smooth={true}
                  duration={500}
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E4E4E4] pt-16 pb-16">
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold leading-tight font-family-mono text-[#151B28] mb-8">
              Never Miss An Event
            </h1>

            <p className="text-lg leading-relaxed mb-8 font-light font-family-sans-serif text-[#4A4D54]">
              Subscribe to our newsletter to get notified about upcoming events,
              workshops, and exclusive community opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
              <input
                type="email"
                className="w-full sm:flex-1 h-[48px] px-4 py-3 placeholder:text-[#9CA3AF] border border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif focus:border-[#1077ED] focus:outline-none transition-colors duration-200"
                placeholder="Enter your email"
              />
              <button className="h-[52px] px-6 py-3 border-2 text-[#6E7176] border-[#E4E4E4] cursor-pointer rounded-xl text-base font-medium font-family-sans-serif">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E4E4E4] pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="text-base font-normal font-family-sans-serif text-[#4A4D54]">
            © 2025 PIXMA Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[#4A4D54] text-base font-family-sans-serif font-normal hover:text-[#1077ED] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#4A4D54] text-base font-family-sans-serif font-normal hover:text-[#1077ED] transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#4A4D54] text-base font-family-sans-serif font-normal hover:text-[#1077ED] transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
