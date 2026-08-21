import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/portofolio";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
      </main>
    </>
  );
}