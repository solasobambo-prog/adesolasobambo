import { createFileRoute } from "@tanstack/react-router";

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

        {/* Section 4 — Proof snapshots */}
        <section className="section-padding">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-lg border border-border/30 bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand-text">
                26.5% churn diagnosed
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Internship analysis of a telecom dataset identified the exact contract, service, and payment patterns driving customer loss, and delivered 5 recommendations a telecom business could evaluate and test.
              </p>
            </article>

            <article className="rounded-lg border border-border/30 bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand-text">
                $2.3M in sales made visible
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Built a fully interactive Power BI dashboard giving management real-time visibility into sales, profit, and regional performance across a 4-year retail dataset.
              </p>
            </article>

            <article className="rounded-lg border border-border/30 bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand-text">
                Every number verified
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                No AI-invented figures. Every formula, chart, and insight is checked against the source data to guarantee absolute accuracy.
              </p>
            </article>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section className="section-padding text-center">
          <div className="mx-auto max-w-3xl">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Contact me to discuss your data analytics project
            </a>
          </div>
        </section>




      </main>
    </div>
  );
}
