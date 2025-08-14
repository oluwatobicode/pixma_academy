import { Link } from "react-scroll";
import logo from "../../public/logo.svg";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "about" },
    { name: "Programs", href: "programs" },
    { name: "Community", href: "community" },
    { name: "Events", href: "events" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 z-50  w-full p-6 md:h-[95px] bg-white">
      <div className="mx-auto max-w-7xl flex items-center">
        <div className="mr-auto">
          <img src={logo} alt="Pixa Academy Logo" className="w-20 h-7" />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center justify-center gap-8 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="cursor-pointer text-[13.33px] text-[#7D7D7D] font-normal hover:text-black transition-colors duration-200"
                to={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center gap-4 ml-auto">
          <button className="cursor-pointer py-2 rounded-[12px] text-[13px] font-normal text-black pr-[33.33px] hover:text-[#1077ED] transition-colors duration-200">
            Login
          </button>
          <button className="w-36 h-11 cursor-pointer py-2 bg-[#1077ED] rounded-[12px] text-[13px] font-normal text-white">
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
