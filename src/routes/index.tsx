import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adesola Sobambo — BI / Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Adesola Sobambo, Business Intelligence and Data Analyst.",
      },
      { property: "og:title", content: "Adesola Sobambo — BI / Data Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Adesola Sobambo, Business Intelligence and Data Analyst.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Section 1 — Navigation bar */}
      <header className="sticky top-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-wide text-foreground transition-colors hover:text-brand-accent"
          >
            Adesola Sobambo
          </Link>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <Link
              to="/"
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-foreground/70" }}
              activeOptions={{ exact: true }}
              className="transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <a
              href="/case-studies"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Case Studies
            </a>
            <a
              href="/how-i-work"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              How I Work
            </a>
            <a
              href="/contact"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Section 2 — Hero */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              I turn your tracking spreadsheets into business intelligence you can act on with confidence.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I clean messy business data, build dashboards that answer real questions, and hand you recommendations you can act on the same week — not a spreadsheet you have to interpret yourself.
            </p>
          </div>
        </section>

        {/* Section 3 — Service line */}
        <section className="py-10 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.15em] text-muted-foreground sm:text-base">
              Excel · Power BI · Data Cleaning · KPI Dashboards
            </p>
          </div>
        </section>


      </main>
    </div>
  );
}
