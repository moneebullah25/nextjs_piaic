import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import OurServices from "./components/OurServices";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <OurServices />
      <Hero2 />
      <Hero3 />
      <Testimonials />
      <ContactUs />
      <Footer />

    </>
  );
}
