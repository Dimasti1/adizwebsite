import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Start a Project
            </Link>
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
