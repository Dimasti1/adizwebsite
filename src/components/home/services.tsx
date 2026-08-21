import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const services = [
  {
    number: "01",
    title: "Company Website",
    description:
      "Website profesional untuk memperkenalkan bisnis, membangun kepercayaan, dan membantu calon client memahami layanan Anda.",
    features: [
      "Company profile",
      "Responsive design",
      "Contact & inquiry",
    ],
  },
  {
    number: "02",
    title: "Project Showcase",
    description:
      "Tampilkan proyek, hasil pekerjaan, dan portofolio bisnis dengan cara yang lebih menarik dan mudah dipercaya.",
    features: [
      "Project gallery",
      "Project details",
      "Image-focused layout",
    ],
  },
  {
    number: "03",
    title: "Custom Website",
    description:
      "Website yang dirancang berdasarkan kebutuhan khusus bisnis Anda, bukan sekadar menggunakan template.",
    features: [
      "Custom UI",
      "Custom functionality",
      "Scalable architecture",
    ],
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Website yang dibuat untuk kebutuhan bisnis Anda.
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            Dari company profile hingga website custom, kami membantu bisnis
            membangun kehadiran digital yang profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="bg-background p-6 sm:p-8"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {service.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-8 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}