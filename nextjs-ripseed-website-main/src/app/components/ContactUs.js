import contact from "public/contact.png";
import Image from "next/image";
import contactus_bg from "public/contactus-bg.svg";

export default function ContactUs() {
    return (
        <>
      {/* <!-- Contact Us --> */}
      <Image src={contactus_bg} alt="Contact Us" className="absolute z-10"/>
      <section className="mt-8 bg-slate-700 body-font ">
        <div className="flex flex-col items-center justify-around md:flex-row md:space-x-6">
          <div className="flex-col px-6 py-16">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:pl-20 z-20">
              Contact Us!
            </h1>

            <div className="flex flex-wrap lg:pl-20">
              <div className="flex flex-col w-full space-y-2">
                <div>
                  <label htmlFor="name" className="text-sm leading-7 text-white  z-20">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    className=" z-20 w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm leading-7 text-white z-20">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 z-20 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="relative">
                  <label htmlFor="message" className="text-sm leading-7 text-white z-20">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 z-20 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>

              <div className="flex mt-6 ml-auto">
                <a
                  href="#"
                  className="py-3 text-white bg-green-500 rounded-full z-20 baseline px-9 hover:bg-green-300"
                >
                  Consult Today
                </a>
              </div>
            </div>
          </div>

          <div className="mx-6 mb-8 md:pr-16">
            <Image src={contact} alt="Contact" className=" z-20" />
          </div>
        </div>
      </section>
      </>
    )
}
