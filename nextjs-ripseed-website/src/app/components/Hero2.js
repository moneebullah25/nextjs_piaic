import Image from "next/image";
import hero2 from "public/hero2.png";
import hero2_bg from "public/hero2-bg.png";

export default function Hero2() {
  return (
    <>
      {/* <!-- Hero 2 --> */}
      <Image
        src={hero2_bg}
        alt="Hero2 Background"
        className="absolute ml-6 -z-10"
      />
      <div className="container relative flex flex-col items-center mx-auto my-6 space-y-6 max-w-7xl md:px-28 md:justify-around md:flex-row md:space-x-20">
        <div className="md:w-1/2">
          <Image
            src={hero2}
            width={"630px"}
            height={"420px"}
            alt="Hero2 Image"
          />
        </div>
        <div className="flex flex-col md:space-y-6 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            Cross Platform Mobile Apps
          </h1>
          <hr className="my-4 h-[2px] w-2/12 rounded border-0 bg-gray-700 md:my-10" />
          <p className="max-w-md text-center md:text-left">
            We are proud to have worked on and deployed a ton of mobile apps for
            our clients, leveraging the power of cloud technologies by Google &
            AWS.
          </p>
        </div>
      </div>
    </>
  );
}
