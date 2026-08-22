import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "./logo";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col gap-10 py-12 sm:py-16 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Website profesional untuk membantu bisnis membangun kehadiran
              digital yang lebih terpercaya.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-medium">Navigation</p>

            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AdizWebsite. All rights reserved.</p>

          <p>Built with Next.js</p>
        </div>
      </Container>
    </footer>
  );
}
