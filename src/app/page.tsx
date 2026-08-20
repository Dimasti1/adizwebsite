import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const page = () => {
  return (
    <main>
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold">
            Adizwebsite
          </h1>

          <p className="mt-4 text-muted-foreground">
            Profressional websites for construction businesses.
          </p>
        </Container>
      </Section>
    </main>
  )
}

export default page
