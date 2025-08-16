import { Mail, Phone } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-24 bg-[#F7F8FA]" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-12">
          <div className="w-[480px] h-[750px] rounded-xl overflow-hidden">
            <img
              src="contactus.png"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[700px] flex flex-col">
            <h1 className="text-[40px] text-center font-normal leading-tight font-family-mono text-[#151B28] mb-6">
              Let's Build the Future Together
            </h1>
            <p className="text-[18px] text-center font-normal leading-relaxed font-family-sans-serif text-[#6E7176] mb-10">
              Got questions, ideas, or partnerships? We'd love to hear from you.
              Let's connect and explore how we can support your journey or work
              together.
            </p>

            <div className="space-y-6">
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              <button className="w-full h-[52px] bg-[#1077ED] text-white font-medium font-family-sans-serif rounded-xl hover:bg-[#0d5bb5] transition-colors duration-200 cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full">
          <div className="flex flex-row items-stretch justify-between gap-8">
            <div className="flex flex-row gap-[30px]">
              <div className="flex-1 h-[320px] bg-[#1077ED] rounded-3xl p-8 flex flex-col justify-between">
                <div className="w-[240px]">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-[#fff]" />
                  </div>

                  <h6 className="text-xl font-normal font-family-mono text-white mb-4">
                    Call Us
                  </h6>
                  <div className="space-y-2 mb-2">
                    <p className="text-[#FAFAFA] font-family-sans-serif">
                      +234 901 234 5678
                    </p>
                    <p className="text-[#FAFAFA] font-family-sans-serif">
                      +234 807 654 3210
                    </p>
                    <p className="text-sm text-[#FAFAFA] font-family-sans-serif">
                      Mon - Fri, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <h6 className="w-full py-2 text-[#fff] font-medium font-family-sans-serif rounded-xl cursor-pointer">
                  Call Now
                </h6>
              </div>

              <div className="flex-1 h-[320px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#1077ED]/6 rounded-2xl flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-black" />
                  </div>

                  <h6 className="text-xl font-normal font-family-mono text-[#151B28] mb-4">
                    Email Us
                  </h6>
                  <div className="space-y-1 mb-2">
                    <p className="text-[#6E7176] font-family-sans-serif">
                      hello@pixmaacademy.com
                    </p>
                    <p className="text-[#6E7176] font-family-sans-serif">
                      support@pixmaacademy.com
                    </p>
                    <p className="text-[#6E7176] font-family-sans-serif">
                      partnerships@pixmaacademy.com
                    </p>
                  </div>
                </div>

                <h6 className="w-full py-2 text-[#6E7176] font-medium font-family-sans-serif rounded-xl cursor-pointer">
                  Send Email
                </h6>
              </div>
            </div>

            <div className="flex flex-col justify-center min-w-[280px]">
              <h3 className="text-2xl font-semibold font-family-mono text-[#151B28] mb-8 text-center">
                Follow Our Journey
              </h3>

              <div className="flex flex-row items-center justify-center gap-[25px]">
                <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]">
                  <div className="p-4 bg-[#1077ED]/6 rounded-xl flex items-center justify-center">
                    <BsTwitterX className="w-5 h-5 text-[#000]" />
                  </div>
                  <span className="font-medium font-family-sans-serif text-[#6E7176]">
                    Twitter
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]">
                  <div className="p-4 bg-[#1077ED]/6 rounded-xl flex items-center justify-center">
                    <FaLinkedinIn className="w-5 h-5 text-[#000]" />
                  </div>
                  <span className="font-medium font-family-sans-serif text-[#6E7176]">
                    LinkedIn
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]">
                  <div className="p-4 bg-[#1077ED]/6 rounded-xl flex items-center justify-center">
                    <FaInstagram className="w-5 h-5 text-[#000]" />
                  </div>
                  <span className="font-medium font-family-sans-serif text-[#6E7176]">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
