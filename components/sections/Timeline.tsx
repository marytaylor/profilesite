const experiences = [
  {
    year: "2024 – Now",
    role: "Principal PM, AI",
    company: "UserTesting",
    description:
      "Leading AI product across Networks, Testing, Insights, and AI domains. Contributed to $21.4M in revenue. Built LLM evaluation frameworks and led EU AI Act + ISO 42001 compliance.",
  },
  {
    year: "2024 – Now",
    role: "Founder & Fractional PM",
    company: "ProductShift",
    description:
      "AI product consultancy advising early-stage startups on strategy, customer discovery, and MVP launches. Built POCs with Claude Code and Cursor, deployed via Vercel and Supabase.",
  },
  {
    year: "2021 – 2023",
    role: "Senior PM, AI",
    company: "AppFolio",
    description:
      "Led Lisa, an AI leasing assistant. Improved automation from 63% to 88%, cut churn from 20% to 3%, and launched a CRM integration generating 456 customers in 3 months.",
  },
  {
    year: "2020 – 2021",
    role: "Senior PM, AI",
    company: "Movable Ink",
    description:
      "Collaborated daily with CEO and CTO. Unstuck a stalled AI product in the first month. Built the AI, Innovation, and Product teams from scratch.",
  },
  {
    year: "2019 – 2020",
    role: "Data Scientist",
    company: "Bioclinica",
    description:
      "Owned Data Science roadmap for 8+ products. Built dashboards, automated workflows saving 10,000+ staff-hours per year.",
  },
  {
    year: "2017 – 2019",
    role: "Product Data Analyst",
    company: "Red Hat",
    description:
      "Designed A/B testing framework saving $30M/year and cutting 200K+ support tickets monthly across the Customer Portal.",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <h2
        className="text-3xl font-bold text-foreground mb-12"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        Career
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-foreground bg-background" />

              <div className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8">
                <p className="text-sm text-muted pt-0.5">{exp.year}</p>
                <div>
                  <p
                    className="text-base font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {exp.role}
                    <span className="font-normal text-muted"> · {exp.company}</span>
                  </p>
                  <p className="text-sm text-muted leading-relaxed mt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
