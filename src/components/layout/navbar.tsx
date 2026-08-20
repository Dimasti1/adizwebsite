import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "./mobile-menu";

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
          <Link
            href="/"
            className="font-semibold tracking-tight"
            aria-label="AdizWebsite - Beranda"
          >
            AdizWebsite
          </Link>

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

            <Link href="#contact">
              <Button>Start a Project</Button>
            </Link>
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
