import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Capabilities />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
