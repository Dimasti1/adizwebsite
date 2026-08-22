import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Start a Project
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Punya bisnis yang ingin terlihat lebih profesional?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ceritakan kebutuhan website bisnis Anda. Saya akan membantu
            menentukan solusi yang paling sesuai.
          </p>

          <div className="mt-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Konsultasi Sekarang</Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
