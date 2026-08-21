import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Kami memahami bisnis, target audience, kebutuhan, dan tujuan website Anda.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Kami menyusun struktur dan visual website agar sesuai dengan karakter brand dan kebutuhan bisnis.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Desain kemudian dikembangkan menjadi website yang responsive, cepat, dan mudah digunakan.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Setelah melalui testing dan final review, website siap dipublikasikan dan digunakan.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Dari ide menjadi website yang siap digunakan.
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            Proses yang sederhana dan transparan, sehingga Anda selalu tahu
            apa yang sedang dikerjakan.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-y md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={[
                "p-6 sm:p-8",
                index !== 0 ? "border-t md:border-l md:border-t-0" : "",
              ].join(" ")}
            >
              <span className="text-sm font-medium text-muted-foreground">
                {step.number}
              </span>

              <h3 className="mt-10 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}