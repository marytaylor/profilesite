import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

const skills = [
  { category: "AI / ML", items: ["LLMs & NLP", "Conversational AI Agents", "Model Evaluation", "Human-in-the-Loop", "Agentic Systems", "MCP & Orchestration"] },
  { category: "Product", items: ["Product Strategy", "0-to-1 Launches", "OKRs & Roadmapping", "User Research", "A/B Testing", "Pricing & GTM"] },
  { category: "Technical", items: ["Python", "SQL", "JavaScript", "AWS (Certified)", "Claude Code", "Cursor", "Vercel", "Supabase"] },
  { category: "Governance", items: ["ISO 42001", "EU AI Act", "NIST RMF", "AI Ethics Policy", "SSPA Certification"] },
  { category: "Data & BI", items: ["Tableau", "Power BI", "Jupyter Notebooks", "Pendo"] },
];

const education = [
  {
    degree: "M.S. Data Science (AI Specialization)",
    school: "Northwestern University",
  },
  {
    degree: "Product Strategy Executive Program",
    school: "Northwestern Kellogg School of Management",
  },
  {
    degree: "B.S. Physics, Minor Mathematics",
    school: "East Carolina University",
  },
  {
    degree: "AWS Cloud Practitioner Certification",
    school: "Amazon Web Services",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title="Mary Taylor" />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* Bio + photo */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
          <div className="space-y-5 text-base text-foreground leading-relaxed">
            <p className="text-lg">
              I&apos;m a Principal AI Product Manager with 12+ years shipping AI products, from conversational agents to LLM-powered platforms to agentic systems. I&apos;m known for bridging technical teams and business stakeholders, and for actually understanding what I&apos;m building.
            </p>
            <p>
              My background is unusual for a PM: I started with a B.S. in Physics, moved into data science, and came to product management through hands-on work with ML systems. That path gives me real technical depth. I prototype with Claude Code and Cursor, write Python and SQL, and have shipped evaluation frameworks that handle millions of model outputs.
            </p>
            <p>
              Currently I lead the AI product line across four domains at UserTesting, where I&apos;ve contributed to $21.4M in revenue, led EU AI Act compliance efforts, and defined criteria for an MCP server enabling integrations across Figma, ChatGPT, Slack, and Claude.
            </p>
            <p>
              I also founded <span className="font-medium">ProductShift</span>, an AI product consultancy for early-stage startups, and I&apos;m building <span className="font-medium">OpenSprouts</span>, a side project I&apos;m developing from zero users up, specifically to learn GTM and marketing strategy firsthand.
            </p>
          </div>

          {/* Photo */}
          <div className="space-y-4">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/headshot.jpg"
                alt="Mary Taylor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/marytaylor5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-foreground text-background text-sm font-medium px-4 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                LinkedIn ↗
              </a>
            </div>
            <a
              href="/resume.pdf"
              download
              className="block text-center text-sm text-muted hover:text-foreground transition-colors py-1"
            >
              Download resume (PDF) ↓
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-border pt-16">
          <h2
            className="text-2xl font-bold text-foreground mb-10"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p
                  className="text-xs font-medium text-muted uppercase tracking-widest mb-3"
                >
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="border-t border-border pt-16">
          <h2
            className="text-2xl font-bold text-foreground mb-10"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Education
          </h2>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.degree} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <p
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {ed.degree}
                </p>
                <p className="text-sm text-muted">{ed.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Artwork section */}
        <div className="border-t border-border pt-16">
          <h2
            className="text-2xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Outside work
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8 max-w-2xl">
            I draw with pencil and paint with oil paint. I also compete in pistol shooting competitions, which is one of the few activities that demands complete presence. And I have over 100 houseplants (yea I know its crazy 😅).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-xl overflow-hidden">
                <img
                  src={`/painting-${n}.jpg`}
                  alt={`Artwork ${n}`}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-16">
          <p className="text-base text-muted mb-6 max-w-xl">
            I&apos;m open to AI PM roles, speaking invitations, and early conversations about OpenSprouts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              See my work
            </Link>
            <a
              href="https://linkedin.com/in/marytaylor5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:border-foreground transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Get in touch
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
