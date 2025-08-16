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

  return (
    <div className="min-h-screen px-6 py-24 bg-white" id="programs">
      <div className="max-w-6xl mx-auto   flex flex-col items-center justify-center mb-16">
        <div className="text-center max-w-2xl">
          <h1 className="font-family-mono text-[40px] tracking-[-4%] leading-[1.34] font-normal mb-8">
            Learn. Create. Lead.
          </h1>
          <p className="text-lg leading-[1.34] tracking-tight text-[#4A4D54] mb-5 font-family-sans-serif">
            Whether you're a beginner or experienced creator, our programs
            provide hands-on training, mentorship, and career connections that
            turn learning into thriving careers.
          </p>
        </div>
        <div className="mt-5 flex items-center justify-center gap-8">
          <div className="bg-[#FAFAFA] h-full w-full max-w-4xl rounded-lg p-3 flex flex-col gap-8">
            <div className="p-4 space-y-4">
              <h1 className="text-[22px] font-medium leading-[1.34] font-family-mono tracking-tight">
                Product Design (UI/UX) Career Track
              </h1>
              <p className="text-[16px] leading-[1.34] tracking-tight text-[#4A4D54] font-family-sans-serif">
                Master research, wireframing, prototyping, and design systems.
                Build a portfolio that gets you hired.
              </p>
              <ul className="list-disc text-[15px] flex flex-row gap-8 mt-4 pl-4 text-[#4A4D54] font-normal font-family-sans-serif">
                <li>12 Weeks</li>
                <li>Certificate</li>
              </ul>

              <div className="mt-4">
                <h4 className="text-[15px] text-[#4A4D54] leading-[150%] font-normal font-family-sans-serif ">
                  What you'll learn:
                </h4>
                <div className="mt-2 flex flex-row gap-4">
                  {trackLearns.map((el, index) => (
                    <div
                      key={index}
                      className="text-black px-3 py-3 bg-[#E4E4E4] rounded-xl text-[10px] font-normal font-family-sans-serif"
                    >
                      {el.name}
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-[#1077ED] w-full text-white rounded-[12px] py-2 text-[13px] font-normal font-family-sans-serif hover:bg-[#0d5bb8] transition-colors duration-200">
                Join Our Community
              </button>
            </div>
          </div>

          <div className="bg-[#FAFAFA] h-full w-full max-w-4xl rounded-lg p-3 flex flex-col gap-8">
            <div className="p-4 space-y-4">
              <h1 className="text-[22px] font-medium leading-[1.34] font-family-mono tracking-tight">
                Project Management Career Track
              </h1>
              <p className="text-[16px] leading-[1.34] tracking-tight text-[#4A4D54] font-family-sans-serif">
                Master research, wireframing, prototyping, and design systems.
                Build a portfolio that gets you hired.
              </p>
              <ul className="list-disc flex flex-row gap-8 mt-4 pl-4 text-[15px] text-[#4A4D54] font-normal font-family-sans-serif">
                <li>12 Weeks</li>
                <li>Certificate</li>
              </ul>

              <div className="mt-4">
                <h4 className="text-[15px] text-[#4A4D54] leading-[150%] font-normal font-family-sans-serif ">
                  What you'll learn:
                </h4>
                <div className="mt-2 flex flex-row gap-4">
                  {trackLearns.map((el, index) => (
                    <div
                      key={index}
                      className="text-black px-3 py-3 bg-[#E4E4E4] rounded-xl text-[10px] font-normal font-family-sans-serif"
                    >
                      {el.name}
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-[#1077ED] w-full text-white rounded-[12px] py-2 text-[13px] font-normal font-family-sans-serif hover:bg-[#0d5bb8] transition-colors duration-200">
                Join Our Community
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full h-full  p-10 bg-gradient-to-tr from-[#4FABBC] via-[#0251AC] to-[#4FABBC] rounded-[28.57px]">
          <div className="text-white flex flex-col items-center justify-center">
            <div className="max-w-3xl text-center space-y-4">
              <h1 className="text-[32px] font-family-mono leading-[1.34] tracking-tight font-normal">
                1-on-1 Mentorship Program
              </h1>
              <p className="text-lg leading-[1.34] tracking-tight text-white font-light font-family-sans-serif">
                Work directly with industry mentors who have been where you want
                to go. Get personalized guidance, career advice, and the support
                you need to accelerate your growth.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button className="p-2 border-2 border-[#fff] rounded-[12px] text-[13px] font-light font-family-sans-serif cursor-pointer">
                Find a mentor
              </button>
              <button className="p-2 border-2 border-[#fff] rounded-[12px] text-[13px] font-light font-family-sans-serif cursor-pointer ">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
