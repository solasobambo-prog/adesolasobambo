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
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Adesola Sobambo
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Business Intelligence / Data Analyst
        </p>
      </div>
    </main>
  );
}
