const Footer = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className=""></div>
        <div className="mt-20 border-t-2 border-b-2 border-[#E4E4E4] w-full py-[48px]">
          <div className="flex flex-col space-y-6 mx-auto items-center justify-center max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight font-family-mono text-[#151B28] mb-2">
              Never Miss An Event
            </h1>
            <p className="text-lg leading-relaxed text-center font-light font-family-sans-serif text-[#4A4D54]">
              Subscribe to our newsletter to get notified about upcoming events,
              workshops, and exclusive community opportunities.
            </p>

            <div className="flex flex-row items-center justify-center gap-3 mt-8">
              <input
                type="email"
                className="w-[350px] h-[52px] px-4 py-3 placeholder:text-[#6E7176] border-2 border-[#E4E4E4] rounded-xl text-base font-normal font-family-sans-serif"
                name=""
                placeholder="Enter your email"
                id=""
              />
              <button className="h-[52px] px-6 py-3 border-2 text-[#6E7176] border-[#E4E4E4] cursor-pointer rounded-xl text-base font-medium font-family-sans-serif">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1>
            <p>&copy;2025 PIXMA Academy. All rights reserved.</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
