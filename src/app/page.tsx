import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OceanWorld } from "@/components/ocean/OceanWorld";
import { Hero } from "@/components/sections/Hero";
import { Aktuelles } from "@/components/sections/Aktuelles";
import { Courses } from "@/components/sections/Courses";
import { WhyUs } from "@/components/sections/WhyUs";
import { SwimProcess } from "@/components/sections/SwimProcess";
import { Team } from "@/components/sections/Team";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <OceanWorld />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Aktuelles />
        <Courses />
        <WhyUs />
        <SwimProcess />
        <Team />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
