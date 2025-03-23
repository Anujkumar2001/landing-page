import Navbar from "@/sections/header";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logo-ticker";
import ProductShowcase from "@/sections/product-showcase";
import Pricing from "@/sections/pricing";
import Testimonial from "@/sections/testimonial";
import CallToAction from "@/sections/callToAction";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>  <Navbar /><Hero /><LogoTicker /><ProductShowcase /> <Pricing /> <Testimonial /> <CallToAction /> <Footer />
    </>);
}
