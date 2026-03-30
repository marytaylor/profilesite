import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

const projects = [
  {
    slug: "red-hat",
    company: "Red Hat",
    title: "Saving $30M/year with ML-powered self-service",
    description:
      "Redesigned the Customer Portal's support experience using ML and user research. Reduced 2.4M support tickets per year and won the ASP Top Ten Support Websites award.",
    tags: ["Machine Learning", "A/B Testing", "User Research"],
    stat: "$30M saved / year",
    year: "2017–2019",
    thumbnail: "/logo-red-hat.png",
  },
  {
    slug: "lisa",
    company: "AppFolio",
    title: "Scaling an AI leasing assistant from 63% to 93% automation",
    description:
      "Led product strategy for Lisa, AppFolio's conversational AI assistant for property management. Cut onboarding by 2 weeks, reduced churn from 20% to 3%, and launched a CRM integration with 456 customers in 3 months.",
    tags: ["Conversational AI", "LLM Orchestration", "Onboarding"],
    stat: "Churn 20% → 3%",
    year: "2021–2023",
    thumbnail: "/logo-lisa.jpg",
  },
  {
    slug: "leasing-domain",
    company: "AppFolio",
    thumbnail: "/logo-appfolio.png",
    title: "Running a vision sprint across 6 product teams",
    description:
      "When AppFolio's leasing products couldn't scale to enterprise clients, I led a cross-functional vision sprint with 20+ collaborators to map the gap and uncovered the need for an entirely new Revenue Management product.",
    tags: ["Product Strategy", "Vision Sprint", "Cross-functional"],
    stat: "New product line",
    year: "2022–2023",
  },
  {
    slug: "data-mapper",
    company: "PrecisionHawk",
    thumbnail: "/logo-datamapper.png",
    title: "Accelerating a drone imagery SaaS by 75%",
    description:
      "Led product prioritization for Data Mapper, a SaaS platform for high-resolution aerial imagery in agriculture and insurance. Streamlined cross-team communication and launched the Algorithm Marketplace.",
    tags: ["SaaS", "Drone Tech", "Hardware + Software"],
    stat: "75% faster dev",
    year: "2014–2016",
  },
  {
    slug: "gotransit",
    company: "GoTransit",
    thumbnail: "/logo-go-triangle.png",
    title: "Modernizing transit for four NC cities",
    description:
      "Built transit planning websites for Raleigh, Cary, Durham, and Chapel Hill with real-time Google Maps integration, managing 150+ bus routes and a flexible CMS for non-technical staff.",
    tags: ["GIS", "Google Maps", "CMS"],
    stat: "4 cities · 150+ routes",
    year: "2014–2016",
  },
  {
    slug: "sparkplug",
    company: "SparkPlug",
    thumbnail: "/logo-sparkplug.webp",
    title: "Taking an AI alumni platform from idea to pitch",
    description:
      "Defined vision, conducted market research, managed prototype development, and developed pricing and GTM strategy for an AI-powered university alumni engagement tool.",
    tags: ["AI", "GTM", "Startup Consulting"],
    stat: "0 → funded startup",
    year: "2024",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Projects"
        description="A selection of products I've led, shipped, and learned from over 12+ years in AI and product management."
      />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid sm:grid-cols-[240px_1fr] border border-border rounded-2xl overflow-hidden hover:border-foreground transition-colors"
            >
              {/* Thumbnail */}
              <div className="bg-surface aspect-[4/3] sm:aspect-auto min-h-[140px] flex items-center justify-center overflow-hidden">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.company} className="w-2/3 h-2/3 object-contain" />
                ) : (
                  <span className="text-subtle text-xs">Project image {i + 1}</span>
                )}
              </div>
              {/* Text */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-muted uppercase tracking-wider">
                      {project.company}
                    </span>
                    <span className="text-xs text-subtle">· {project.year}</span>
                  </div>
                  <h2
                    className="text-lg font-semibold text-foreground mb-2 group-hover:text-muted transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted bg-surface px-2.5 py-1 rounded-full">
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
      </div>
    </>
  );
}
