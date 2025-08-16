import { Calendar, MapPin } from "lucide-react";

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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="max-w-3xl text-center space-y-4">
            <h1 className="text-5xl font-medium leading-tight font-family-mono text-[#151B28] mb-6">
              Events & Workshops
            </h1>
            <p className="text-xl leading-relaxed text-[#4A4D54] font-light">
              Join our community events, workshops, and networking sessions
              designed to accelerate your learning and connect you with
              like-minded professionals.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-8 mt-12">
            <div className="bg-[#202636] p-8 w-[609px] h-[390px] rounded-[24px] flex flex-col justify-between">
              <div>
                <h1 className="text-4xl text-white font-normal font-family-mono leading-tight mb-4">
                  Product Leadership Summit
                </h1>
                <p className="text-white text-lg font-normal font-family-sans-serif leading-relaxed tracking-tight mb-6">
                  Join industry leaders, successful entrepreneurs, and
                  change-makers for a day of inspiration, networking, and career
                  advancement.
                </p>

                <div className="flex flex-row gap-6 mt-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <div className="text-sm font-normal text-white">
                      <h3 className="font-normal font-family-sans-serif">
                        February 15, 2025
                      </h3>
                      <p className="text-white/80 font-family-sans-serif">
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-white">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div className="text-sm font-normal text-white">
                      <h3 className="font-normal font-family-sans-serif">
                        Lagos Continental Hotel
                      </h3>
                      <p className="text-white/80 font-family-sans-serif">
                        500+ expected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 border-2 cursor-pointer border-white text-white rounded-xl font-normal font-family-sans-serif hover:bg-white/10 transition-colors duration-200">
                  Register Now
                </button>
                <button className="px-6 py-3 border-2 cursor-pointer border-white text-white rounded-xl font-normal font-family-sans-serif hover:bg-white/10 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[609px] h-[390px] rounded-[24px] overflow-hidden">
              <img
                src="/events.png"
                alt="events png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-tight font-family-mono text-[#6E7176] mb-12">
            Upcoming Events
          </h1>

          <div className="flex flex-row gap-8">
            {upComingEvents.map((el, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] h-full w-full max-w-4xl rounded-2xl p-6 flex flex-col "
              >
                <div className="w-full h-[200px] rounded-xl overflow-hidden mb-6">
                  <img
                    src={el.image}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-medium font-family-mono text-[#151B28] mb-6 leading-relaxed">
                    {el.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-6">
                      <span className="text-[#4A4D54] text-[14px] font-family-sans-serif font-medium">
                        {el.date}
                      </span>
                      <span className="text-[#4A4D54] text-[14px]  font-family-sans-serif font-medium">
                        {el.time}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[#4A4D54] text-xs  font-family-sans-serif font-medium">
                        {el.location}
                      </div>
                      <div className="text-[#6E7176] text-xs  font-family-sans-serif">
                        {el.spots} spots available
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full py-4 px-6 rounded-xl text-white cursor-pointer bg-[#1077ED] font-medium font-family-sans-serif hover:bg-[#0d5bb5] transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="w-full rounded-3xl p-16 flex flex-col items-center justify-center mx-auto bg-[#F5F5F5]">
            <h1 className="text-[32px] font-medium font-family-mono text-[#151B28] mb-12 leading-relaxed">
              Recent Events
            </h1>

            <div className="flex flex-row gap-[29px] items-center justify-center">
              <div className="bg-white flex flex-col items-center justify-center h-[200px] w-[280px] p-8 rounded-3xl ">
                <span className="text-4xl font-bold leading-[150%] tracking-[-4%] font-family-mono mb-2">
                  150
                </span>

                <span className="text-[14px] leading-[120%] tracking-normal-[-4%] font-normal font-family-sans-serif text-[#6E7176] mb-2 text-center">
                  Product Design Bootcamp
                </span>
                <span className="text-sm leading-[150%] tracking-normal-[-4%]  font-normal font-family-sans-serif text-[#6E7176]">
                  January 2025
                </span>
              </div>

              <div className="bg-white flex flex-col items-center justify-center h-[200px] w-[280px] p-8 rounded-3xl ">
                <span className="text-4xl leading-[150%] tracking-[-4%] font-bold font-family-mono  mb-2">
                  80
                </span>
                <span className="text-[14px] leading-[120%] tracking-normal-[-4%] font-normal font-family-sans-serif text-[#6E7176] mb-2 text-center">
                  Mentorship Matching Event
                </span>
                <span className="text-sm leading-[150%] tracking-normal-[-4%]  font-normal font-family-sans-serif text-[#6E7176]">
                  December 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
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
      </div>
    </div>
  );
};

export default Events;
