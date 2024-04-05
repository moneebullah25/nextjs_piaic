import Image from "next/image";
import ripseed_logo from "public/ripseed-logo.png";
import footer from "public/footer.svg";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <Image src={footer} alt="Footer Background" className="absolute z-10"/>
      <footer className="text-gray-600 bg-[#B7DDD8] body-font">
        <div className="flex flex-col items-center justify-around px-5 py-12 mx-auto space-y-8 md:flex-row">
          <div className="flex-shrink-0 w-64 text-center md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <Image src={ripseed_logo} alt="logo" />
              <span className="ml-3 text-xl">Ripeseed</span>
            </a>
            <p className="mt-4 ml-2 text-sm text-gray-500">
              We harvest your requirements into living products!
            </p>
          </div>
          <div className="flex flex-col pl-20 md:flex-row">
            <div className="px-4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Apps
                  </a>
                </li>
              </nav>
            </div>
            <div className="px-4">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Help
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    Instructions
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                    How we work
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="container mx-auto relative ">
          <p class="text-gray-500 text-sm text-center py-8">
            ©Ripeseed 2021. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
