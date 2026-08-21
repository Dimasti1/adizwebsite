import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/portofolio";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Services />
      </main>
    </>
  );
}