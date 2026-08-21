"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-12 w-64 rounded-xl border bg-background p-2 shadow-lg"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}