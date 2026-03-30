export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
        {/* Working photo */}
        <div className="order-2 lg:order-1">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="/conference-booth.jpg"
              alt="Mary Taylor at AppFolio conference"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <h2
            className="text-3xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            About me
          </h2>
          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              I started out studying physics, which is really just learning to ask precise questions about complex systems. That instinct followed me into data science, and eventually into product management.
            </p>
            <p>
              For the past decade, I&apos;ve worked on AI products at companies ranging from startups to enterprise SaaS, building conversational agents, designing evaluation frameworks for LLMs, and shipping agentic systems. I currently lead the AI product line across four domains at UserTesting.
            </p>
            <p>
              I&apos;m also the founder of <span className="text-foreground font-medium">ProductShift</span>, a consultancy helping early-stage startups go from idea to launch, and I&apos;m building <span className="text-foreground font-medium">OpenSprouts</span>, learning GTM and marketing from the ground up.
            </p>
            <p>
              Outside work: I paint and draw, compete in pistol shooting, and maintain over 100 houseplants (send help 🪴). Based in Cary, NC.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-border">
            {[
              { value: "12+", label: "Years in AI/PM" },
              { value: "20+", label: "Products shipped" },
              { value: "$30M", label: "Cost savings driven" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
