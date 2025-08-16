import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen px-6 py-24" id="hero">
      <div className="max-w-6xl mx-auto h-screen flex items-center gap-10 justify-center">
        <div className="flex-1  pr-12">
          <h1 className="text-5xl font-medium leading-[1.34] font-family-mono tracking-tight mb-8">
            Efficient training for Product Designers (UI/UX) & Product Managers
          </h1>

          <p className="text-lg leading-[1.34] tracking-tight font-family-sans-serif text-[#4A4D54] mb-5">
            Learn industry-ready skills with hands-on projects, mentorship, and
            career support.
          </p>

          <div className="flex gap-4 mb-4">
            <Link className="px-6 py-3 cursor-pointer bg-[#1077ED] font-family-sans-serif rounded-[12px] text-sm font-normal text-white hover:bg-[#0d5bb8] transition-colors duration-200">
              Explore Programs
            </Link>
            <button className="px-6 py-3 cursor-pointer bg-[#1077ED] font-family-sans-serif rounded-[12px] text-sm font-normal text-white hover:bg-[#0d5bb8] transition-colors duration-200">
              Join Community
            </button>
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
              <img src="/figma.svg" className="w-42" alt="figma icon" />
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-x-1/2 flex items-center justify-center">
              <img src="/solutions.svg" className="w-62" alt="solutions icon" />
            </div>

            <div className="absolute -bottom-14 left-4 transform -translate-x-1/2 flex items-center justify-center">
              <img src="/google.svg" className="w-42" alt="google icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
