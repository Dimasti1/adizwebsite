import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectPreview } from "./project-preview";

const projects = [
  {
    title: "Buildora Construction",
    category: "Construction Company",
    variant: "construction" as const,
    featured: true,
    description:
      "Website company profile modern untuk menampilkan layanan, proyek, dan kredibilitas perusahaan konstruksi.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Arsitek Studio",
    category: "Architecture",
    variant: "architecture" as const,
    featured: false,
    description:
      "Portfolio website untuk studio arsitektur dengan fokus pada visual proyek dan pengalaman pengguna.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Nusantara Property",
    category: "Property",
    variant: "property" as const,
    featured: false,
    description:
      "Website properti yang dirancang untuk menampilkan project dan membantu calon pembeli menemukan informasi dengan cepat.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export function Portfolio() {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);
  return (
    <Section id="work">
      <Container>
        {/* Portfolio content */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Website yang dirancang untuk membuat bisnis terlihat lebih
            profesional.
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            Beberapa contoh konsep website yang kami bangun untuk bisnis
            konstruksi, properti, dan profesional.
          </p>
        </div>
        <div className="mt-12">
          {featuredProject && (
            <article className="overflow-hidden rounded-2xl border">
              <ProjectPreview variant={featuredProject.variant} />

              <div className="p-6 sm:p-8">
                <p className="text-sm text-muted-foreground">
                  {featuredProject.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border"
            >
              <ProjectPreview variant={project.variant} />

              <div className="p-6">
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
