export function HeroPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border bg-background shadow-2xl">
        <div className="flex h-10 items-center gap-2 border-b px-4">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />

          <div className="ml-4 h-5 flex-1 rounded-md bg-muted" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Construction Company
          </div>

          <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
            Building spaces that move business forward.
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            A professional digital presence designed to showcase projects,
            services, and company expertise.
          </p>

          <div className="mt-6 flex gap-3">
            <div className="h-9 w-28 rounded-md bg-foreground" />
            <div className="h-9 w-24 rounded-md border" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="aspect-4/3 rounded-lg bg-muted" />
            <div className="aspect-4/3 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 hidden rounded-xl border bg-background p-4 shadow-lg sm:block">
        <p className="text-xs text-muted-foreground">Projects completed</p>

        <p className="mt-1 text-lg font-semibold">24+</p>
      </div>
    </div>
  );
}
