import PageHeader from "@/components/ui/PageHeader";

// Update this date whenever you update the page
const LAST_UPDATED = "March 2026";

export default function NowPage() {
  return (
    <>
      <PageHeader
        label="Now"
        title="What I'm up to"
        description={`A snapshot of what I'm focused on right now. Last updated ${LAST_UPDATED}.`}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-2xl space-y-12">

          {/* Work */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Work
            </h2>
            <div className="space-y-4 text-base text-foreground leading-relaxed">
              <p>
                Leading the AI product line across four domains at <span className="font-medium">UserTesting</span>: Networks, Testing, Insights, and AI. Currently deep in agentic system design and LLM evaluation frameworks.
              </p>
              <p>
                Running <span className="font-medium">ProductShift</span>, my AI product consultancy, on the side. Working with early-stage startups on product strategy and MVP launches.
              </p>
            </div>
          </div>

          {/* Building */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Building
            </h2>
            <div className="space-y-4 text-base text-foreground leading-relaxed">
              <p>
                Working on <span className="font-medium">OpenSprouts</span>, my own 0-to-1 side project. Got a grant, found a cofounder, and now building from the ground up. Learning GTM and marketing by actually doing it, starting from zero users.
              </p>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Learning
            </h2>
            <div className="space-y-4 text-base text-foreground leading-relaxed">
              <p>
                Going deep on agentic AI architecture, specifically MCP, tool orchestration, and how to design evaluation frameworks for systems that operate autonomously.
              </p>
              <p>
                Learning more about early-stage GTM and marketing strategy. Most of my career has been in growth-stage or enterprise SaaS, and building from 0 users is a genuinely different skill set. I&apos;m enjoying figuring it out.
              </p>
            </div>
          </div>

          {/* Job search */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Open to
            </h2>
            <div className="space-y-4 text-base text-foreground leading-relaxed">
              <p>
                AI leadership roles and helping startups with AI product strategy.
              </p>
              <p>
                Speaking invitations on AI product strategy, LLM evaluation, AI governance, or 0-to-1 product development.
              </p>
              <p>
                Early conversations about <a href="https://opensprouts.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">OpenSprouts</a>: potential users, collaborators, or people who&apos;ve built in a similar space.
              </p>
            </div>
          </div>

          {/* Personal */}
          <div>
            <h2
              className="text-xs font-medium text-muted uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Personal
            </h2>
            <div className="space-y-4 text-base text-foreground leading-relaxed">
              <p>
                Drawing with pencil and painting with oil paint. I&apos;ve been working on a few pieces I&apos;m actually happy with, which doesn&apos;t happen as often as I&apos;d like.
              </p>
              <p>
                Competing in pistol shooting. It&apos;s one of the few things I do that requires complete presence. You can&apos;t be thinking about product roadmaps and shoot well.
              </p>
              <p>
                Tending to my 100+ houseplants (yea I know its crazy 😅).
              </p>
            </div>
          </div>

          <p className="text-xs text-subtle pt-4 border-t border-border">
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">now page</a>. Last updated {LAST_UPDATED}.
          </p>
        </div>
      </div>
    </>
  );
}
