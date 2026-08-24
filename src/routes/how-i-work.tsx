import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/how-i-work")({
  head: () => ({
    meta: [
      { title: "How I Work — Adesola Sobambo" },
      {
        name: "description",
        content:
          "How Adesola Sobambo uses AI in her data analytics workflow: where it helps, where it doesn't, and the verification standard behind every deliverable.",
      },
      { property: "og:title", content: "How I Work — Adesola Sobambo" },
      {
        property: "og:description",
        content:
          "How Adesola Sobambo uses AI in her data analytics workflow: where it helps, where it doesn't, and the verification standard behind every deliverable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowIWorkPage,
});

function HowIWorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Section 1 — Page intro */}
        <section className="mb-16 text-center sm:mb-20">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How I Work
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I use AI to work faster. I don't use it to think for me. Here's exactly where AI fits into my process, and where it doesn't, because if you're trusting me with your business data, you should know the difference.
          </p>
        </section>

        {/* Section 2 — My process */}
        <section className="mb-16 sm:mb-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8">
              <span className="font-display text-sm font-semibold tracking-widest text-brand-accent">STEP 1</span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-text">Clean the data myself first</h2>
              <p className="mt-3 leading-relaxed">
                I go through the raw dataset by hand before anything else touches it; missing values, duplicates, inconsistent types, outliers. This is where I actually learn and understand the data.
              </p>
            </article>

            <article className="rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8">
              <span className="font-display text-sm font-semibold tracking-widest text-brand-accent">STEP 2</span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-text">Use AI to catch what I missed</h2>
              <p className="mt-3 leading-relaxed">
                Once I've cleaned it, I run a second pass with AI to flag anything I overlooked. Every flag gets resolved one of two ways: it's a real miss and I fix it, or it's a deliberate choice for a business reason, and I document which.
              </p>
            </article>

            <article className="rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8">
              <span className="font-display text-sm font-semibold tracking-widest text-brand-accent">STEP 3</span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-text">Delegate the mechanical work, with review</h2>
              <p className="mt-3 leading-relaxed">
                Formulas, DAX measures, and first-draft write-ups are rule-based once the data and the goal are defined; AI is fast and reliable here. I verify every formula does what I intended before it goes anywhere near a deliverable.
              </p>
            </article>

            <article className="rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8">
              <span className="font-display text-sm font-semibold tracking-widest text-brand-accent">STEP 4</span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-text">Keep the judgment calls mine</h2>
              <p className="mt-3 leading-relaxed">
                What to highlight on a dashboard, which insight matters most, how to frame a recommendation for your business, that's not something I outsource. AI can draft; it doesn't decide.
              </p>
            </article>

            <article className="rounded-xl border border-border/30 bg-card p-6 text-card-foreground shadow-sm sm:p-8 sm:col-span-2">
              <span className="font-display text-sm font-semibold tracking-widest text-brand-accent">STEP 5</span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-text">Verify before delivery</h2>
              <p className="mt-3 leading-relaxed">
                Every number, chart, and formula is spot-checked against the source data before submission. Nothing ships that I can't personally explain and defend.
              </p>
            </article>
          </div>
        </section>

        {/* Section 3 — The line I hold */}
        <section className="mb-16 sm:mb-20">
          <blockquote className="rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-8 text-center sm:p-12">
            <p className="font-display text-lg font-semibold text-foreground sm:text-xl md:text-2xl">
              "If I can't explain how a result was produced without re-reading an AI's explanation, it doesn't go in your report. That's the standard on every project."
            </p>
          </blockquote>
        </section>

        {/* Section 4 — Why this matters to you */}
        <section className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Why this matters to you</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            You're not getting a black box. You're getting analysis where a human being has verified every figure, made every judgment call, and can walk you through the reasoning behind every recommendation, with AI used to move faster, never to skip the thinking.
          </p>
        </section>
      </main>
    </div>
  );
}
