export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className="max-w-2xl">
        <h2
          className="text-3xl font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Let&apos;s talk
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-2">
          I&apos;m open to AI leadership roles, helping startups with AI product strategy, speaking invitations, and early conversations about OpenSprouts.
        </p>
        <p className="text-sm text-muted mb-10">
          Best way to reach me is LinkedIn. I read everything.
        </p>

        <a
          href="https://linkedin.com/in/marytaylor5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-accent-hover transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Connect on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
