import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="AdizWebsite - Beranda"
    >
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
      >
        A
      </span>

      <span className="font-semibold tracking-tight">
        AdizWebsite
      </span>
    </Link>
  );
}