import Image from "next/image";
import dots from "public/dots.svg";
import logo from "public/logo.png";

export default function Navbar() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="container relative flex items-center justify-between px-6 mx-auto max-w-7xl">
        {/* <!-- Logo --> */}
        <div>
          <Image src={logo} alt="Logo Image" />
        </div>
        {/* <!-- Menu Items --> */}
        <div className="hidden space-x-6 md:flex">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 hover:underline"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 hover:underline"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 hover:underline"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Image
        src={dots}
        alt="Dots Svg"
        className="absolute left-[100px] -z-10"
      />
    </>
  );
}
