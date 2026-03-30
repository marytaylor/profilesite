import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p
            className="text-sm font-medium text-foreground mb-1"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Mary Taylor
          </p>
          <p className="text-xs text-muted">AI Product Manager</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {[
            { href: "/projects", label: "Projects" },
            { href: "/speaking", label: "Speaking" },
            { href: "/now", label: "Now" },
            { href: "/about", label: "About" },
            { href: "https://linkedin.com/in/marytaylor5", label: "LinkedIn", external: true },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
