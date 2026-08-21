type ProjectPreviewProps = {
    variant?: "construction" | "architecture" | "property";
  };
  
  export function ProjectPreview({
    variant = "construction",
  }: ProjectPreviewProps) {
    const content = {
      construction: {
        label: "Construction Company",
        title: "Building spaces that move business forward.",
        button: "View Projects",
      },
      architecture: {
        label: "Architecture Studio",
        title: "Designing spaces with purpose and character.",
        button: "Explore Work",
      },
      property: {
        label: "Property",
        title: "Find a place built for the way you live.",
        button: "View Properties",
      },
    };
  
    const current = content[variant];
  
    return (
      <div className="overflow-hidden rounded-2xl border bg-background">
        {/* Browser bar */}
        <div className="flex h-10 items-center gap-2 border-b px-4">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
  
          <div className="ml-4 h-5 flex-1 rounded-md bg-muted" />
        </div>
  
        {/* Website */}
        <div className="p-6 sm:p-10">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">
              ADIZ
            </div>
  
            <div className="hidden gap-4 text-xs text-muted-foreground sm:flex">
              <span>About</span>
              <span>Projects</span>
              <span>Contact</span>
            </div>
          </div>
  
          <div className="py-12 sm:py-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {current.label}
            </p>
  
            <h3 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              {current.title}
            </h3>
  
            <div className="mt-6 h-10 w-32 rounded-md bg-foreground" />
          </div>
  
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-4/3 rounded-lg bg-muted" />
            <div className="aspect-4/3 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    );
  }