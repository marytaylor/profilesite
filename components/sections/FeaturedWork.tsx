import Link from "next/link";

const featuredWork = [
  {
    slug: "red-hat",
    company: "Red Hat",
    title: "Saving $30M/year with ML-powered self-service",
    description:
      "Redesigned the Customer Portal's support experience using ML and user research. Reduced 2.4M support tickets per year and won the ASP Top Ten Support Websites award.",
    tags: ["Machine Learning", "A/B Testing", "User Research"],
    stat: "$30M saved / year",
    year: "2018",
    thumbnail: "/logo-red-hat.png",
  },
  {
    slug: "lisa",
    company: "AppFolio",
    title: "Scaling an AI leasing assistant from 63% to 93% automation",
    description:
      "Led product strategy for Lisa, AppFolio's conversational AI assistant. Cut onboarding by 2 weeks, reduced churn from 20% to 3%, and launched a CRM integration with 456 customers in 3 months.",
    tags: ["Conversational AI", "LLM Orchestration", "Onboarding"],
    stat: "Churn 20% → 3%",
    year: "2022",
    thumbnail: "/logo-lisa.jpg",
  },
  {
    slug: "leasing-domain",
    company: "AppFolio",
    thumbnail: "/logo-appfolio.png",
    title: "Running a vision sprint across 6 product teams",
    description:
      "When AppFolio's leasing products couldn't scale, I led a cross-functional sprint with 20+ collaborators and discovered the need for an entirely new Revenue Management product.",
    tags: ["Product Strategy", "Vision Sprint", "Cross-functional"],
    stat: "New product line",
    year: "2023",
  },
];

export default function FeaturedWork() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className="flex items-baseline justify-between mb-12">
        <h2
          className="text-3xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Selected projects
        </h2>
        <Link href="/projects" className="text-sm text-muted hover:text-foreground transition-colors">
          All projects →
        </Link>
      </div>

      <div className="space-y-6">
        {featuredWork.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid sm:grid-cols-[280px_1fr] gap-0 border border-border rounded-2xl overflow-hidden hover:border-foreground transition-colors"
          >
            {/* Thumbnail */}
            <div className="bg-surface aspect-[4/3] sm:aspect-auto flex items-center justify-center relative min-h-[160px] overflow-hidden">
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.company} className="w-2/3 h-2/3 object-contain" />
              ) : (
                <span className="text-subtle text-xs">Project screenshot {i + 1}</span>
              )}
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    {project.company}
                  </span>
                  <span className="text-xs text-subtle">· {project.year}</span>
                </div>
                <h3
                  className="text-xl font-semibold text-foreground mb-3 group-hover:text-muted transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{project.description}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted bg-surface px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="text-sm font-semibold text-foreground whitespace-nowrap ml-4"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {project.stat}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
