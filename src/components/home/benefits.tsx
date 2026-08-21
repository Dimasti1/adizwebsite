import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const benefits = [
  {
    number: "01",
    title: "Built around your business",
    description:
      "Website dirancang berdasarkan kebutuhan dan karakter bisnis Anda, bukan sekadar mengganti isi template.",
  },
  {
    number: "02",
    title: "Professional by design",
    description:
      "Tampilan yang rapi dan profesional membantu bisnis memberikan kesan pertama yang lebih meyakinkan.",
  },
  {
    number: "03",
    title: "Fast and responsive",
    description:
      "Website dibuat agar tetap nyaman digunakan di berbagai ukuran layar, dari smartphone hingga desktop.",
  },
  {
    number: "04",
    title: "Ready to grow",
    description:
      "Struktur website disiapkan agar dapat dikembangkan ketika kebutuhan bisnis Anda semakin besar.",
  },
];

export function Benefits() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Why AdizWebsite
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Bukan hanya website. Kami membangun digital presence untuk bisnis Anda.
            </h2>

            <p className="mt-4 text-muted-foreground sm:text-lg">
              Setiap website dirancang dengan mempertimbangkan bagaimana bisnis
              Anda ingin dilihat oleh calon client.
            </p>
          </div>

          <div className="divide-y rounded-2xl border">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="grid gap-4 p-6 sm:grid-cols-[64px_1fr] sm:p-8"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {benefit.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}