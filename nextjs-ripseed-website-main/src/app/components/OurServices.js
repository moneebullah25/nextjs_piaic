import Image from "next/image";
import card1 from "public/card1.svg";
import card2 from "public/card2.svg";
import card3 from "public/card3.svg";
import card4 from "public/card4.svg";
import card5 from "public/card5.svg";
import background_services from "public/background-services.svg";
import ourservices_bg from "public/ourservices.svg"


export default function OurServices() {
    return (<>
      {/* <!-- Our Services --> */}
      <Image src={ourservices_bg} alt="Our Services Background" className="absolute -z-10"/>
      <div className="flex flex-col mx-auto mt-16 space-y-6 max-w-7xl">
        <h1 className="text-4xl font-bold text-center md:text-5xl">
          Our{" "}
          <span className="underline underline-offset-[16px] md:underline-offset-[32px]">
            Ser
          </span>
          vices
        </h1>
        <p className="p-6 text-center max-w-[96rem] mx-auto">
          We provide the best available choices for you. Adjust these according
          to your needs and leave the rest to us! Our expertise in
          infrastructure-as-code can help you replicate your products
          architecture without any manual labour.
        </p>
      </div>
      <div className="relative grid grid-cols-1 grid-rows-5 p-6 mx-auto space-y-6 max-w-7xl md:grid-cols-2 md:grid-rows-3 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:grid-rows-2 lg:space-y-0">
        {/* <!-- Card --> */}
        <div className="flex flex-col py-16 pl-8 pr-8 space-y-4 text-white rounded-2xl bg-slate-700 md:pr-16 lg:pr-32">
          <Image src={card1} alt="Card Image" className="w-32 h-32" />

          <h1 className="text-2xl font-extrabold">Scalable Cloud Tech</h1>
          <p className="max-w-sm">
            Build your products on serverless technologies so you won't ever
            have to worry about scalability.
          </p>
        </div>
        {/* <!-- Card --> */}
        <div className="flex flex-col py-16 pl-8 pr-8 space-y-4 text-white rounded-2xl bg-slate-700 md:pr-16 lg:pr-32">
          <Image src={card2} alt="Card Image" className="w-32 h-32" />

          <h1 className="text-2xl font-extrabold">Scalable Cloud Tech</h1>
          <p className="max-w-sm">
            Build your products on serverless technologies so you won't ever
            have to worry about scalability.
          </p>
        </div>
        {/* <!-- Card --> */}
        <div className="flex flex-col py-16 pl-8 pr-8 space-y-4 text-white rounded-2xl bg-slate-700 md:pr-16 lg:pr-32">
          <Image src={card3} alt="Card Image" className="w-32 h-32" />

          <h1 className="text-2xl font-extrabold">Scalable Cloud Tech</h1>
          <p className="max-w-sm">
            Build your products on serverless technologies so you won't ever
            have to worry about scalability.
          </p>
        </div>
        {/* <!-- Card --> */}
        <div className="flex flex-col py-16 pl-8 pr-8 space-y-4 text-white rounded-2xl bg-slate-700 md:pr-16 lg:pr-32">
          <Image src={card4} alt="Card Image" className="w-32 h-32" />

          <h1 className="text-2xl font-extrabold">Scalable Cloud Tech</h1>
          <p className="max-w-sm">
            Build your products on serverless technologies so you won't ever
            have to worry about scalability.
          </p>
        </div>
        {/* <!-- Card --> */}
        <div className="flex flex-col py-16 pl-8 pr-8 space-y-4 text-white rounded-2xl bg-slate-700 md:pr-16 lg:pr-32">
          <Image src={card5} alt="Card Image" className="w-32 h-32" />

          <h1 className="text-2xl font-extrabold">Scalable Cloud Tech</h1>
          <p className="max-w-sm">
            Build your products on serverless technologies so you won't ever
            have to worry about scalability.
          </p>
        </div>
      </div>
      <Image
        src={background_services}
        alt="Background Svg"
        className="absolute -bottom-[520px] ml-6 -z-10"
      />
      <hr className="my-4 ml-auto mr-6 h-[2px] w-3/5 rounded border-0 bg-gray-700 md:my-10" />
      </>);
}