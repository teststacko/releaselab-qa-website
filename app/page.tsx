import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import PartnerBand from "@/components/sections/PartnerBand";
import ToolsTeaser from "@/components/sections/ToolsTeaser";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedWork />
      <Process />
      <PartnerBand />
      <ToolsTeaser />
      <CTA />
      <Testimonials />
    </>
  );
}