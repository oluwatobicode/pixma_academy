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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold font-family-mono leading-tight text-[#151B28] mb-6">
              Our Community Stories
            </h1>
            <p className="text-xl leading-relaxed font-family-sans-serif text-[#4A4D54] font-light">
              Our members are proof that opportunity changes everything. See how
              PIXMA Academy has transformed careers and lives across Nigeria and
              beyond.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-4xl font-normal text-[#000] font-family-mono mb-2">
                {stat.number}
              </h3>
              <p className="text-base text-[#7D7D7D] font-normal font-family-sans-serif">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-[24px] mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white w-[386px] h-[314px] p-[30px] rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#1077ED]/5 rounded-xl flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-[#000]" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fff] text-[#000]" />
                ))}
              </div>

              <blockquote className="text-[#000] text-[14px] leading-relaxed mb-4 font-family-sans-serif font-normal">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1077ED] to-[#05479D] rounded-full flex items-center justify-center"></div>
                <div>
                  <h4 className="text-[#000] font-family-sans-serif font-bold text-[12px]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#000] font-family-sans-serif font-normal text-[12px]">
                    {testimonial.role}
                  </p>
                  <p className="text-[#000] font-family-sans-serif font-normal text-xs mt-1">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#000000] via-[#05479D] to-[#1077ED] rounded-3xl p-16 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-normal font-family-mono mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-[#E4E4E4] font-family-sans-serif leading-relaxed mb-12 font-regular text-[18px]">
              Join hundreds of learners who have transformed their careers
              through PIXMA Academy. Whether you're starting from scratch or
              upskilling in Product Design or Product Management, we're here to
              support your journey to success.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white text-[#000] text-[22px] rounded-2xl flex items-center justify-center font-normal font-family-sans-serif mb-4 mx-auto">
                    {step.id}
                  </div>
                  <h3 className="text-[14px] font-regular text-[#ffff] font-family-sans-serif leading-[120%] tracking-[-4%] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-regular text-[#E4E4E4] font-family-sans-serif leading-[150%] tracking-[-4%] ">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-[15.24px] font-family-sans-serif">
                Start Your Journey
              </button>
              <button className="px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-[15.24px] font-family-sans-serif">
                View All Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
