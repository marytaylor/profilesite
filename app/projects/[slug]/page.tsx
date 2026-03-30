import Link from "next/link";
import { notFound } from "next/navigation";

const projects: Record<string, {
  company: string;
  title: string;
  year: string;
  tags: string[];
  stat: string;
  role: string;
  overview: string;
  background: string;
  myRole: string;
  outcomes: string[];
  heroImage?: string;
  contentImage?: string;
  video?: string;
  logos?: { src: string; alt: string }[];
  next: { slug: string; title: string };
}> = {
  "red-hat": {
    company: "Red Hat",
    heroImage: "/project-red-hat-hero.png",
    title: "Saving $30M/year with ML-powered self-service",
    year: "2017–2019",
    tags: ["Machine Learning", "A/B Testing", "User Research", "Portal Optimization"],
    stat: "$30M saved annually",
    role: "Product Data Analyst",
    overview:
      "The Red Hat Customer Portal served over 1 million users seeking technical support. Response times were slow, service margins were low, and the team was spending heavily on human support. I was brought in to find a better way.",
    background:
      "Users faced multi-week turnaround times for technical issue resolution. The cost of maintaining a large human support team was unsustainable, and satisfaction scores reflected it. The portal had the information users needed, but they couldn't find it on their own.",
    myRole:
      "I led user research to identify where the self-service experience broke down, then ran a vision sprint to define a new approach. I implemented a machine learning algorithm to surface relevant solutions earlier in the support journey, redesigned the UI for self-resolution, and built an A/B testing framework that was later adopted across all Red Hat web teams. I also became the company SME for Pendo (user behavior analytics) and built data pipelines in Python, SQL, and JavaScript.",
    outcomes: [
      "Saved Red Hat $30M annually through reduced support overhead",
      "Cut 200,000+ support tickets per month (2.4M per year)",
      "25 thank-you emails from users in the first release week",
      "Won the ASP Top Ten Support Websites award in 2019",
      "A/B testing framework adopted across all Red Hat web teams",
    ],
    next: { slug: "lisa", title: "Lisa AI Leasing Assistant" },
  },
  "lisa": {
    company: "AppFolio",
    heroImage: "/project-lisa-hero.jpg",
    contentImage: "/project-lisa-section.jpg",
    video: "/project-lisa-video.mp4",
    title: "Scaling an AI leasing assistant from 63% to 93% automation",
    year: "2021–2023",
    tags: ["Conversational AI", "LLM Orchestration", "Onboarding", "Churn Reduction"],
    stat: "-5% → 30% profitability",
    role: "Senior Product Manager, AI",
    overview:
      "Lisa is AppFolio's AI-powered virtual leasing assistant that handles prospect inquiries for property managers. When I joined, AppFolio had recently acquired the product and it was losing money. My job was to turn it into a profitable, scalable product that could grow into the enterprise market.",
    background:
      "The numbers told a clear story: only 63% of messages were automated, leaving the rest to human Operators and creating inconsistent experiences. The product was running at -5% profitability. Less than 1% of customers were enterprise clients, which meant Lisa was running out of customers to sell to. On the user side, leasing agents didn't trust Lisa, found her too rigid, and showings weren't optimized for how their teams actually worked. The original classification-based ML model couldn't handle the nuance needed to fix any of this.",
    myRole:
      "I led the product strategy for transitioning Lisa from a classification-based ML model to an LLM architecture. I designed a Skill Router that classified incoming messages and routed them to purpose-built LLM skills, which gave Lisa the flexibility and personalization agents needed to actually trust her. I coordinated across Engineering, Machine Learning, Design, Marketing, Operators, the CRM team, and business stakeholders to execute a phased deployment timed to the AppFolio Customer Conference. I also redesigned onboarding to cut time-to-value. One of the biggest bets I made was the CRM integration: rather than relying on background Operators to monitor and correct Lisa's responses, I built the tooling directly into the AppFolio CRM so property managers could see exactly how Lisa had responded, get a high-level summary of the conversation, review key details about the prospective tenant, and step in to take over the conversation whenever they wanted. This shifted control from a separate Operator layer to the property managers themselves, which reduced costs and made the product far more trustworthy.",
    outcomes: [
      "Improved automation from 63% to 93%, eliminating the need for most background Operator intervention",
      "Turned product profitability from -5% to 30% within the first 2 months",
      "Cut churn from 20% to 3%",
      "Reduced onboarding time by 2 weeks",
      "Expanded enterprise client acquisition with packaged pricing across 3 leasing products",
      "CRM integration generated 456 paying customers in the first 3 months ($50/month upsell)",
    ],
    next: { slug: "leasing-domain", title: "AppFolio Leasing Domain" },
  },
  "leasing-domain": {
    company: "AppFolio",
    title: "Running a vision sprint across 6 product teams",
    year: "2022–2023",
    tags: ["Product Strategy", "Vision Sprint", "Cross-functional", "Revenue Management"],
    stat: "New product line created",
    role: "Senior Product Manager, AI",
    overview:
      "AppFolio's leasing domain was struggling to attract enterprise clients with 500,000+ units. Multiple product teams were working in silos, and there was no shared vision for where the products needed to go.",
    background:
      "The leasing products worked for smaller property managers, but couldn't scale. The teams knew something was wrong but hadn't identified a root cause. I was asked to lead a diagnosis and strategic alignment effort across 6 product teams.",
    myRole:
      "I facilitated a vision sprint with 20+ collaborators: product, design, engineering, and business leaders. I ran customer research and built a user flow map that revealed a critical gap: there was no revenue management system, which was blocking enterprise deals. I used that finding to build the case for a new team and product, and helped launch the Appfolio Revenue Management initiative.",
    outcomes: [
      "Aligned 6 product teams on a shared leasing domain strategy",
      "Discovered the missing Revenue Management product, a previously unknown gap",
      "Established foundation for AppFolio Revenue Management team and product",
      "Increased enterprise client acquisition post-launch",
    ],
    next: { slug: "data-mapper", title: "PrecisionHawk DataMapper" },
  },
  "data-mapper": {
    company: "PrecisionHawk",
    heroImage: "/project-datamapper-2.png",
    contentImage: "/project-datamapper-1.png",
    title: "Accelerating a drone imagery SaaS by 75%",
    year: "2014–2016",
    tags: ["SaaS", "Drone Tech", "Hardware + Software", "Agriculture"],
    stat: "75% faster development",
    role: "Technical Product Manager",
    overview:
      "Data Mapper is a SaaS platform for capturing and analyzing high-resolution aerial imagery, serving agriculture and insurance industries. It supports multiple image types, optimizes drone flight paths, and enables instant image upload for analysis.",
    background:
      "With teams across software, hardware, optics, and data science, Data Mapper was struggling with communication and requirement alignment. Diverse technical stakeholders were working toward different goals, slowing development to a crawl.",
    myRole:
      "I led product prioritization and streamlined requirements across all teams. I enhanced cross-team communication processes and automated task delegation, significantly reducing the coordination overhead that was blocking development. I also drove the launch of the Algorithm Marketplace, creating a new revenue stream.",
    outcomes: [
      "Enhanced product development speed by 75%",
      "Launched Algorithm Marketplace to expand revenue streams",
      "Improved team coordination across hardware, software, optics, and data science",
      "Streamlined internal processes for efficient task delegation",
    ],
    next: { slug: "gotransit", title: "GoTransit" },
  },
  "gotransit": {
    company: "GoTransit",
    heroImage: "/project-gotransit-hero.png",
    title: "Modernizing transit for four NC cities",
    year: "2014–2016",
    tags: ["GIS", "Google Maps", "CMS", "Transportation"],
    stat: "4 cities · 150+ routes",
    role: "Technical Product Lead",
    overview:
      "GoTransit aimed to modernize public transit systems across Raleigh, Cary, Durham, and Chapel Hill. Each city needed its own unique brand while sharing the same underlying platform.",
    background:
      "The existing transit websites were outdated, hard to maintain, and disconnected from real-time data. Riders had no reliable way to navigate across cities, and non-technical transit staff couldn't update schedules without going through a developer. Budget and timeline were tight, and each city had its own brand identity that needed to be preserved.",
    myRole:
      "I started by doing the research myself: I bought bus tickets and rode routes across the four cities to experience the navigation pain points firsthand. Riding the buses also gave me direct access to other transit users, and I used that time to interview riders and learn about their experiences navigating the system. I also crafted a survey that was distributed through the transit systems' social media channels and collected over 130 responses from real riders. That combination of field research and survey data gave me a clear picture of where the biggest UX gaps were and informed the information architecture and design of all four sites. From there I collaborated with transit leads in each city, built a clickable prototype, and designed a CMS-driven system so non-technical staff could manage schedules and content independently. I also integrated all four sites with Google Maps for real-time arrival data.",
    logos: [
      { src: "/logo-go-raleigh.png", alt: "Go Raleigh" },
      { src: "/logo-go-cary.png", alt: "Go Cary" },
      { src: "/logo-go-durham.png", alt: "Go Durham" },
      { src: "/logo-go-triangle.png", alt: "Go Triangle" },
    ],
    outcomes: [
      "Conducted field research by riding bus routes across all four cities to identify navigation pain points firsthand",
      "Collected 130+ rider responses via a social media survey to inform UX and information architecture",
      "Launched transit planning websites for all four cities",
      "Integrated real-time service updates with Google Maps",
      "Managed 150+ bus routes across four transit systems",
      "Enabled non-technical staff to manage schedules independently",
    ],
    next: { slug: "sparkplug", title: "SparkPlug" },
  },
  "sparkplug": {
    company: "SparkPlug",
    title: "Taking an AI alumni platform from idea to pitch",
    year: "2024",
    heroImage: "/project-sparkplug-hero.png",
    contentImage: "/project-sparkplug-content.png",
    tags: ["AI", "GTM", "Startup Strategy", "EdTech"],
    stat: "0 → funded startup",
    role: "Fractional Product Lead (ProductShift)",
    overview:
      "SparkPlug is an AI-powered tool designed to transform university alumni engagement, providing personalized connections, career pathways, and continuous learning opportunities. The founders had a strong vision but needed help turning it into a fundable product.",
    background:
      "Traditional alumni platforms suffer from stale data, low engagement, and generic outreach. SparkPlug's founders believed AI could fix this, but hadn't yet defined what the product would actually do or how it would reach the market.",
    myRole:
      "I helped define the product vision and features, conducted market research and competitive analysis, and evaluated feature feasibility. I managed prototype development with an external development firm, built the pricing model and go-to-market strategy, created the pitch deck, and coached the founders for investor presentations.",
    outcomes: [
      "Defined product vision and full feature set",
      "Completed market and competitive analysis",
      "Managed prototype development end-to-end",
      "Delivered pricing model and go-to-market strategy",
      "Coached founders through funding pitch preparation",
    ],
    next: { slug: "red-hat", title: "Red Hat Customer Portal" },
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          ← All projects
        </Link>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium text-muted uppercase tracking-wider">{project.company}</span>
          <span className="text-xs text-subtle">· {project.year}</span>
          <span className="text-xs text-subtle">· {project.role}</span>
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {project.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">{project.overview}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted bg-surface px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        {project.heroImage && (
          <img src={project.heroImage} alt={project.title} className="w-full rounded-2xl" />
        )}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="max-w-3xl space-y-16">

          {/* Background */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Background
            </h2>
            <p className="text-base text-foreground leading-relaxed">{project.background}</p>
          </div>

          {/* Content image */}
          {project.contentImage && (
            <img src={project.contentImage} alt="Project detail" className="w-2/3 rounded-xl" />
          )}

          {/* Video */}
          {project.video && (
            <div>
              <video
                src={project.video}
                controls
                className="w-full rounded-xl"
              />
              <p className="text-xs text-muted mt-3 leading-relaxed">Demo: Lisa working inside the AppFolio CRM. Property managers can see how Lisa responded, review a summary and key tenant details, and step in to take over the conversation at any point.</p>
            </div>
          )}

          {/* My role */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              My role
            </h2>
            <p className="text-base text-foreground leading-relaxed">{project.myRole}</p>
            {project.logos && (
              <div className="grid grid-cols-4 gap-6 mt-8">
                {project.logos.map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} className="w-full h-auto object-contain" />
                ))}
              </div>
            )}
          </div>

          {/* Outcomes */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Outcomes
            </h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-muted mt-1">·</span>
                  <span className="text-base text-foreground leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key stat callout */}
          <div className="border border-border rounded-2xl p-8 text-center">
            <p
              className="text-5xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {project.stat}
            </p>
            <p className="text-sm text-muted">Key outcome</p>
          </div>
        </div>

        {/* Next project */}
        <div className="max-w-3xl mt-20 pt-12 border-t border-border">
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Next project</p>
          <Link
            href={`/projects/${project.next.slug}`}
            className="group inline-flex items-center gap-3 text-xl font-semibold text-foreground hover:text-muted transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {project.next.title}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
