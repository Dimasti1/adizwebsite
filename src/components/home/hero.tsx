import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl py-20 text-center sm:py-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Web Development for Business
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Website profesional untuk bisnis yang ingin tumbuh lebih cepat.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Saya membantu bisnis membangun website yang modern, cepat, dan
            terpercaya—dirancang untuk memperkuat brand dan mengubah pengunjung
            menjadi calon pelanggan.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Konsultasi Gratis</Button>
            </a>

            <Link href="#work">
              <Button size="lg" variant="outline">
                Lihat Portfolio
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            <span>✓ Responsive Design</span>
            <span>✓ Fast & Modern</span>
            <span>✓ Built for Business</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
