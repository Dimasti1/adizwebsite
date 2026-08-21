import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CTA() {
  return (
    <Section id="contact">
      <Container>
        <div className="overflow-hidden rounded-3xl border bg-foreground px-6 py-16 text-background sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              Start a Project
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Siap membuat bisnis Anda terlihat lebih profesional?
            </h2>

            <p className="mt-6 max-w-2xl text-background/70 sm:text-lg">
              Ceritakan kebutuhan website Anda dan mari diskusikan bagaimana
              AdizWebsite dapat membantu.
            </p>

            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-background px-6 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-background/90"
              >
                Mulai Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
