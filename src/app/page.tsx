import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/portofolio";
import { Services } from "@/components/home/services";
import { Benefits } from "@/components/home/benefits";
import { Process } from "@/components/home/process";
import { About } from "@/components/home/about";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Benefits />
        <Process />
        <About />
      </main>
    </>
  );
}