import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <Container>
            <h1 className="text-4xl font-semibold">
              AdizWebsite
            </h1>

            <p className="mt-4 text-muted-foreground">
              Professional websites for construction businesses.
            </p>
          </Container>
        </Section>
      </main>
    </>
  );
}