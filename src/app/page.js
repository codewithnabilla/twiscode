import Hero from "@/components/hero";
import About from "@/components/about-us";
import Product from "@/components/product";
import Testimonial from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Product />
      <Testimonial />
    </div>
  );
}
