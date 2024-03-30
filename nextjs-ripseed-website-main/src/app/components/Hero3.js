import Image from "next/image";
import hero3 from "public/hero3.png";
import hero3_bg from "public/hero3.svg";

export default function Hero3() {
  return (
    <>
      {/* <!-- Hero 3 --> */}
      <Image src={hero3_bg} alt="Hero 3 Background" className="absolute z-10" />
      <div className="container relative flex flex-col items-center mx-auto my-6 space-y-6 max-w-7xl md:px-28 md:justify-around md:flex-row md:space-x-6">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            Scalable, Multi-tenant, Responsive Web Apps
          </h1>
          <hr className="my-4 h-[2px] w-2/12 rounded border-0 bg-gray-700 md:my-10" />
          <p className="max-w-md text-center md:text-left">
            Do you have an amazing SaaS idea that can beat the market and make
            you the next Salesforce? Let's talk. We've had experience working
            with some great clients, developed their SaaS products and helped
            them release to their clients successfully.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src={hero3} alt="Hero3" />
        </div>
      </div>
      <hr className="my-4 ml-6 mr-auto h-[2px] w-6/12 rounded border-0 bg-gray-700 md:my-10" />
    </>
  );
}
