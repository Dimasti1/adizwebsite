import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About AdizWebsite
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Website yang dibuat dengan perhatian terhadap detail.
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              AdizWebsite membantu bisnis membangun kehadiran digital melalui
              website yang profesional, modern, dan dirancang sesuai kebutuhan.
            </p>

            <p>
              Kami percaya bahwa website bukan hanya tentang tampilan.
              Website harus membantu bisnis terlihat lebih terpercaya,
              menyampaikan informasi dengan jelas, dan memudahkan calon client
              untuk mengambil langkah berikutnya.
            </p>

            <p>
              Setiap project dikerjakan dengan pendekatan yang sederhana:
              memahami kebutuhan, merancang solusi, membangun dengan teknologi
              modern, lalu memastikan semuanya siap digunakan.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}