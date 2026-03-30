import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedWork />
      <About />
      <Timeline />
      <Contact />
    </>
  );
}
