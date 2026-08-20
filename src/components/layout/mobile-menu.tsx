"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? "Close" : "Menu"}
      </Button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-16 border-b bg-background"
        >
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <Button className="w-full">
                Start a Project
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}