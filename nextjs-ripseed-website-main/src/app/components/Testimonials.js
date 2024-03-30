import Image from "next/image";
import avatar from "public/avatar.png";
import testimonials_bg from "public/testimonials.svg";

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <Image src={testimonials_bg} alt="Testimonials Background" className="absolute z-10"/>
      <figure className="container relative p-16 max-w-7xl mx-auto rounded-b-lg h-full bg-[url('/testimonials-bg.png')] bg-cover bg-center bg-no-repeat rounded-t-2xl z-20">
        <h1 className="px-6 py-2 mx-auto text-2xl text-center text-white border-4 border-yellow-400 border-solid rounded-full w-fit sm:text-3xl">
          What our customers are saying
        </h1>
        <div className="flex flex-col items-center justify-center my-8 space-y-8 lg:flex-row">
          <figcaption className="flex items-center justify-center w-1/3 space-x-4">
            <Image
              className="rounded-full"
              src={avatar}
              alt="profile picture"
              width={100}
              height={100}
            />
            <div className="space-y-0.5 text-left font-medium dark:text-white">
              <div>Don Cor</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                CEO - BlueWave Technologies
              </div>
            </div>
          </figcaption>
          <div className="w-full pb-8 text-center lg:w-1/3 lg:text-left">
            <p className="text-white">
              Fast, reliable, professional and very responsive. No challenge is
              too much for this guy. Top notch in every regard. Sincerely,
              Bluewave Technology, Inc.
            </p>
          </div>
        </div>
      </figure>
    </>
  );
}
