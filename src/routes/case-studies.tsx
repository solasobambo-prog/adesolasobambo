import { createFileRoute } from "@tanstack/react-router";

import superstoreImage1 from "@/assets/superstore-image1.jpg.asset.json";
import superstoreImage2 from "@/assets/superstore-image2.jpg.asset.json";
import churnImage1 from "@/assets/churn-image1.jpg.asset.json";
import churnImage2 from "@/assets/churn-image2.jpg.asset.json";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Adesola Sobambo" },
      {
        name: "description",
        content:
          "Recent analytics work by Adesola Sobambo: sales dashboards, customer churn analysis, and business intelligence projects.",
      },
      { property: "og:title", content: "Case Studies — Adesola Sobambo" },
      {
        property: "og:description",
        content:
          "Recent analytics work by Adesola Sobambo: sales dashboards, customer churn analysis, and business intelligence projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Section 1 — Page intro */}
        <section className="mb-16 text-center sm:mb-20">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Case Studies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A look at recent analytics work — the business question, what I found, and what I delivered.
          </p>
        </section>

        {/* Section 2 — Case Study 1: Superstore (featured, most visual weight) */}
        <section className="mb-12 sm:mb-16">
          <article className="overflow-hidden rounded-xl border border-border/30 bg-card text-card-foreground shadow-sm">
            <div className="bg-brand-accent/10 px-6 py-3 sm:px-8">
              <span className="font-display text-xs font-semibold tracking-widest text-brand-text">
                FEATURED PROJECT
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-full bg-background/10 px-3 py-1">Power BI</span>
                <span className="rounded-full bg-background/10 px-3 py-1">Power Query</span>
                <span className="rounded-full bg-background/10 px-3 py-1">Word</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-brand-text sm:text-3xl">
                Superstore Sales Performance Dashboard
              </h2>

              <ul className="mt-4 space-y-2 text-sm text-card-foreground/80">
                <li>
                  <span className="font-semibold">Project type:</span> AnalystLab Africa Internship Project
                </li>
                <li>
                  <span className="font-semibold">Role:</span> Data Analytics Intern
                </li>
                <li>
                  <span className="font-semibold">Data source:</span> Public dataset (Superstore, Kaggle), used for internship training
                </li>
                <li>
                  <span className="font-semibold">Scope:</span> Dashboard development (Power BI), sales/profit analysis
                </li>
              </ul>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text">The problem</h3>
                  <p className="mt-2 leading-relaxed">
                    Management had no single place to see sales performance, profitability, customer segments, and regional results — decisions were being made on partial information.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text">What I did</h3>
                  <p className="mt-2 leading-relaxed">
                    Built a 3-page interactive Power BI dashboard from a 9,994-row, 4-year transaction dataset: KPI cards, regional and category breakdowns, top-product analysis, and a fully cross-filterable executive summary.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text">What I found</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                    <li>The West Region leads in both sales ($0.73M) and profit ($0.11M).</li>
                    <li>Technology is the most profitable category; Furniture consistently underperforms.</li>
                    <li>Profit is concentrated in a small number of top products.</li>
                    <li>Sales climb sharply every Q4, a clear seasonal pattern.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text">Deliverables</h3>
                  <p className="mt-2 leading-relaxed">
                    A Business Intelligence Overview Report and a one-page Executive Summary. A static preview is available; the full interactive dashboard is in the .pbix file, plus 6 recommendations covering regional strategy, product mix, and discount discipline.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/solasobambo-prog/AnalystLab--Africa/tree/main/SuperStore%20Sales%20Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View project repo
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Section 3 — Case Study 2: Customer Churn */}
        <section>
          <article className="rounded-xl border border-border/30 bg-card text-card-foreground p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="rounded-full bg-background/10 px-3 py-1">Excel</span>
              <span className="rounded-full bg-background/10 px-3 py-1">Power Query</span>
              <span className="rounded-full bg-background/10 px-3 py-1">Word</span>
              <span className="rounded-full bg-background/10 px-3 py-1">PowerPoint</span>
            </div>

            <h2 className="font-display text-2xl font-bold text-brand-text">
              Customer Churn Analysis
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-card-foreground/80">
              <li>
                <span className="font-semibold">Project type:</span> AnalystLab Africa Internship Project
              </li>
              <li>
                <span className="font-semibold">Role:</span> Data Analytics Intern
              </li>
              <li>
                <span className="font-semibold">Data source:</span> Public dataset (Telco Customer Churn, Kaggle), used for internship training
              </li>
              <li>
                <span className="font-semibold">Scope:</span> Data cleaning, churn analysis, insight reporting
              </li>
            </ul>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-brand-text">The problem</h3>
                <p className="mt-2 leading-relaxed">
                  Internship analysis of a telecom dataset revealed a 26.5% customer churn rate, with no clear indication at the outset of which features or behaviors were responsible.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-brand-text">What I did</h3>
                <p className="mt-2 leading-relaxed">
                  Cleaned and inspected a 7,000+ row customer dataset, then built out a full churn analysis — contract type, service type, payment method, tenure, and billing all cross-examined against churn rate.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-brand-text">What I found</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Month-to-month contracts churn at 42.7%, vs. 2.8% for two-year contracts.</li>
                  <li>Fiber optic customers churn at 41.9% — more than double the DSL rate.</li>
                  <li>Electronic check payers have the highest churn of any payment method (45.3%).</li>
                  <li>Nearly half of all churn happens in a customer's first 12 months.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-brand-text">Deliverables</h3>
                <p className="mt-2 leading-relaxed">
                  A Business Understanding & Data Inspection report, a full Excel analysis workbook, and a stakeholder-ready presentation — 5 insights, 3 risks, 3 opportunities, and 5 concrete recommendations tied directly to revenue protection. Because this was internship training work on a public dataset, no live organisation implemented these recommendations — operational feasibility and business impact remain unmeasured.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/solasobambo-prog/AnalystLab--Africa/tree/main/Customer%20Churn%20Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 font-display text-sm font-semibold text-foreground transition-colors hover:bg-accent/10"
              >
                View project repo
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
