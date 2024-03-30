import Image from "next/image";
import logo from "../../public/logo.svg";
import shooter from "../../public/shooter.png";
import dot_pattern_left from "../../public/dot-pattern.svg";
import dot_pattern_right from "../../public/dot-pattern-right.svg";
import lock from "../../public/lock.svg";
import player from "../../public/player.png";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import discord from "../../public/discord.svg";
import muze from "../../public/muze.svg";
import muze_pic from "../../public/muze-pic.svg";
import play_btn from "../../public/play-btn.svg";
import gray_token from "../../public/gray_token.png";
import pink_token from "../../public/pink_token.jpg";
import orange_token from "../../public/orange_token.png";
import yellow_token from "../../public/yellow_token.png";
import skyblue_token from "../../public/skyblue_token.png";
import red_token from "../../public/red_token.png";
import footer_logo from "../../public/footer_logo.svg";
import character from "../../public/character.png";
import founders_token from "../../public/founder's-token.svg";
import ImageCarousel from "./image-carousel";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>

      <div className="relative">
        <div className="absolute top-0 left-0">
          <Image src={dot_pattern_left} alt="Dot Pattern" />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={dot_pattern_right} alt="Dot Pattern" />
        </div>
      </div>
      {/* Header Section */}
      <nav className="container relative w-11/12 mx-auto">
        <div className="flex flex-row items-center justify-between">
          <a className="flex items-center font-medium text-gray-900 m title-font">
            <Image src={logo} alt="Logo" />
          </a>
          <div className="hidden space-x-4 md:flex md:items-center lg:space-x-12 md:justify-end">
            <a className="font-black cursor-pointer mr-7 hover:text-gray-900 hover:underline">
              Download
            </a>
            <a className="font-black cursor-pointer mr-7 hover:text-gray-900 hover:underline">
              Shop
            </a>
            <a className="font-black cursor-pointer mr-7 hover:text-gray-900 hover:underline">
              Inventory
            </a>
            <a className="font-black cursor-pointer mr-7 hover:text-gray-900 hover:underline">
              News
            </a>
            <a className="font-black cursor-pointer mr-7 hover:text-gray-900 hover:underline">
              Our Team
            </a>

            <button className="inline-flex items-center px-6 py-3 font-black bg-gray-400 border-0 rounded cursor-pointer opacity-60 mr-text-base focus:outline-none hover:bg-gray-200">
              <Image src={lock} alt="lock" />
              SIGN IN
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="container relative flex flex-col items-center justify-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-6xl font-black">
            Free to play, play&nbsp;
            <br className="hidden lg:inline-block" />
            to earn.
          </h1>
          <p className="mb-8 leading-relaxed">
            Join players from around in an the globe to play in an adrenaline
            filled, play to earn FPS, where you will be the first players ever
            to get paid per kill.
          </p>
          <div className="absolute top-0 bg-green-400 rounded-full opacity-25 w-96 h-96 right-72 blur-3xl -z-10"></div>
          <div className="absolute bg-blue-400 rounded-full opacity-25 w-96 h-96 top-16 right-1 blur-3xl -z-10"></div>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded cursor-pointer focus:outline-none hover:bg-indigo-600">
              DOWNLOAD FOR FREE
            </button>
          </div>
        </div>

        <div className="absolute left-0 bg-red-400 rounded-full opacity-25 w-96 h-96 top-60 blur-3xl -z-10"></div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image src={player} alt="player" />
        </div>
      </div>
      {/* Links */}
      <div className="container flex mx-auto justify-evenly ">
        <Image src={facebook} alt="facebook" className="cursor-pointer" />
        <Image src={twitter} alt="twitter" className="cursor-pointer" />
        <Image src={instagram} alt="instagram" className="cursor-pointer" />
        <Image src={discord} alt="discord" className="cursor-pointer" />
      </div>
      {/* What is Muze Heading */}
      <div className="flex flex-col w-full mb-12 text-center">
        <h1 className="mt-10 text-6xl font-black text-gray-900 sm:text-5xl title-font">
          What is {"   "} <Image src={muze} alt="muze" className="inline" />
        </h1>
      </div>
      {/* Muze Hero */}
      <section className="mb-4 text-gray-600 body-font">
        <div className="container relative flex flex-col items-center justify-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col mb-16">
            <h1 className="mb-4 text-2xl font-semibold text-gray-900">
              The Next Gen FPS &nbsp;
              <br className="hidden lg:inline-block" />
              Competitive Shooter.
            </h1>
            <div className="absolute bg-red-400 rounded-full opacity-25 w-96 h-96 -top-8 right-20 blur-3xl -z-10"></div>
            <p className="max-w-2xl mb-8">
              Discover the fast pace FPS exclusive to PC only. Choose your
              character and build a one of a kind player as you created your own
              DNA.
            </p>
            <p className="mb-8">
              Play to earn competitions. Build your character through unique DNA
              system.
            </p>

            <div className="flex">
              <Image src={play_btn} alt="play-btn" />
              <button className="inline-flex px-3 py-2 text-2xl text-blue-600">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Image src={muze_pic} alt="muze player" />
          </div>
        </div>
      </section>
      {/* Learn the maps */}
      <div className="flex flex-col w-full mb-12 text-center">
        <h1 className="mt-6 text-6xl font-black text-center">Learn the maps</h1>
      </div>

      {/* Image Carousal */}
      <ImageCarousel />
      <h1 className="mt-6 text-6xl font-black text-center">MEDIVAL TIMES</h1>
      <p className="container max-w-2xl mx-auto mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur. Id neque bibendum est
        ullamcorper elit fermentum consectetur. Placerat convallis tempor
        elementum aliquam. Risus congue orci justo in. Leo diam dolor
        scelerisque imperdiet.
      </p>

      {/* <!-- Learn More --> */}
      <div className="container relative flex flex-col items-center justify-center w-11/12 mx-auto mt-6 space-y-6">
        <h1 className="text-6xl font-black text-center">Learn more</h1>
        <Image src={shooter} alt="Shooter" />
      </div>
      {/* <!-- Shop --> */}
      <h1 className="mt-6 text-6xl font-black text-center">Shop</h1>
      <div className="container relative mx-auto mt-10">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="p-0 md:pr-16">
            <Image src={gray_token} alt="gray_token" width={350} height={490} />
          </div>
          <div className="absolute left-0 z-10 top-80">
            <Image src={founders_token} alt="founders_token" />
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 px-4 mt-6 md:mt-2 place-content-center md:px-0 md:gap-5">
            <Image src={pink_token} alt="pink_token" width={150} height={190} />
            <Image
              src={skyblue_token}
              alt="skyblue_token"
              width={150}
              height={190}
            />
            <Image
              src={orange_token}
              alt="orange_token"
              width={150}
              height={190}
            />
            <Image src={gray_token} alt="gray_token" width={150} height={190} />
            <Image
              src={yellow_token}
              alt="yellow_token"
              width={150}
              height={190}
            />
            <Image src={red_token} alt="red_token" width={150} height={190} />
          </div>
        </div>
      </div>
      {/* Common Item */}
      <div className="container relative mx-auto mt-10">
        <div className="flex flex-col justify-center md:flex-row">
          <h1 className="px-12 text-4xl font-bold text-center">
            Common&nbsp;Team
          </h1>
          <p className="px-4 text-center md:max-w-md md:text-left md:px-0">
            Lorem ipsum dolor sit amet consectetur. Id neque bibendum est
            ullamcorper elit fermentum consectetur. Placerat convallis tempor
            elementum aliquam. Risus congue orci justo in. Leo diam dolor
            scelerisque imperdiet.
          </p>
        </div>
      </div>
      {/* Character Developement */}
      <h1 className="mt-6 text-6xl font-black text-center">
        Character Developement
      </h1>
      <div className="container relative mx-auto mt-10 lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center lg:flex-row ">
          <p className="px-4 text-center lg:left-0 lg:top-0 lg:absolute lg:max-w-sm lg:text-left">
            Upon your ascension to The Sanctuary, your consciousness will be
            placed into a basic synthetic vessel. In your fight with the other
            ascended champions, you will earn and collect the means to shape
            your character into any form that you desire. Synthetic DNA can be
            captured and assimilated from different lifeforms that have ascended
            from across the multiverse. This allows you to create a truly unique
            creature that could have a combination of Cartoon, Alien, Human,
            Monster or whatever creature you harvest synthetic DNA from.
          </p>
          <Image src={character} alt="character" />
          <p className="px-4 mb-4 text-center lg:right-0 lg:bottom-0 lg:absolute lg:max-w-sm lg:text-left">
            Upon your ascension to The Sanctuary, your consciousness will be
            placed into a basic synthetic vessel. In your fight with the other
            ascended champions, you will earn and collect the means to shape
            your character into any form that you desire. Synthetic DNA can be
            captured and assimilated from different lifeforms that have ascended
            from across the multiverse. This allows you to create a truly unique
            creature that could have a combination of Cartoon, Alien, Human,
            Monster or whatever creature you harvest synthetic DNA from.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="container relative flex flex-col items-center justify-around py-16 mx-auto my-12 bg-gray-200 rounded-2xl sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <Image src={footer_logo} alt="footer_logo" />
          <span className="max-w-xs text-sm ml-9">
            If you are experiencing any issues, please, use the recommended web
            browser. Recommended web browser: Google Chrome.
          </span>
        </a>

        <div className="flex flex-col">
          <p className="mt-4 text-sm text-gray-500">
            © 2021
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              Ascendance Games. All rights reserved.
            </a>
          </p>
          <span className="inline-flex justify-start mt-4">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
