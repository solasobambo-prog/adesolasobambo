import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adesola Sobambo" },
      {
        name: "description",
        content:
          "Get in touch with Adesola Sobambo, BI and Data Analyst. Discuss your data cleaning, dashboard, and business intelligence projects.",
      },
      { property: "og:title", content: "Contact — Adesola Sobambo" },
      {
        property: "og:description",
        content:
          "Get in touch with Adesola Sobambo, BI and Data Analyst. Discuss your data cleaning, dashboard, and business intelligence projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Section 1 — Headline */}
        <section className="mb-6 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let's talk about your data.
          </h1>
        </section>

        {/* Section 2 — Subhead */}
        <section className="mb-12 text-center sm:mb-16">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether it's a messy spreadsheet that needs cleaning up or a dashboard your team actually wants to open every morning, I'd like to hear what you're working with.
          </p>
        </section>

        {/* Section 3 — Contact form */}
        <section className="mb-12 sm:mb-16">
          <div className="mx-auto max-w-2xl rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-text">
                  Company <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your company or organisation"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-brand-text">
                  What are you looking to do with your data?
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Describe your project, challenge, or goal..."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-brand-text">
                  Budget / timeline <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="e.g., £500–£1,000, within 2 weeks"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Contact me to discuss your data analytics project
              </button>
            </form>
          </div>
        </section>

        {/* Section 4 — Direct contact */}
        <section className="mb-12 text-center sm:mb-16">
          <p className="text-sm text-muted-foreground">Or reach me directly at</p>
          <a
            href="mailto:solasobambo@gmail.com"
            className="mt-2 inline-block font-display text-lg font-semibold text-brand-accent transition-colors hover:text-foreground"
          >
            solasobambo@gmail.com
          </a>
        </section>

        {/* Section 5 — Closing CTA */}
        <section className="text-center">
          <a
            href="mailto:solasobambo@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Contact me to discuss your data analytics project
          </a>
        </section>
      </main>
    </div>
  );
}
