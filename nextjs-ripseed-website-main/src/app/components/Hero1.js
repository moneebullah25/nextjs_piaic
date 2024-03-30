import hero1 from "public/hero1.png";
import Image from "next/image";
import hero1_bg from "public/hero1.svg";

export default function Hero1() {
  return (
    <>
      {/* <!-- Hero 1 --> */}
      <Image src={hero1_bg} alt="Hero1 Background" className="absolute -z-10"/>
      <div className="container relative flex flex-col items-center mx-auto my-6 space-y-6 max-w-7xl md:px-28 md:justify-around md:flex-row md:space-x-6">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            One stop shop to take your business to Cloud!
          </h1>
          <p className="max-w-md text-center md:text-left">
            Join hands with us to leverage the power of cloud technologies to
            build your dream product.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="py-2 text-white bg-green-500 rounded-full baseline px-9 hover:bg-green-300"
            >
              Consult Today
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={hero1} alt="Hero1" />
        </div>
      </div>
      <hr className="container relative max-w-7xl my-4 ml-auto mr-6 h-[2px] w-1/3 rounded border-0 bg-black md:my-10" />
    </>
  );
}
