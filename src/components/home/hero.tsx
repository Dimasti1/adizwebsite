import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroPreview } from "./hero-preview";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Website Development for Construction
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Website profesional untuk kontraktor yang ingin terlihat lebih terpercaya.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Tampilkan perusahaan, proyek, dan layanan Anda dengan website yang cepat,
              profesional, dan dirancang untuk membangun kepercayaan calon klien.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact">
                <Button size="lg">
                  Konsultasi Gratis
                </Button>
              </Link>

              <Link href="#work">
                <Button variant="outline" size="lg">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </div>

          <HeroPreview/>
        </div>
      </Container>
    </Section>
  );
}