"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/speaking", label: "Speaking" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-foreground hover:text-muted transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Mary Taylor
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/marytaylor5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-foreground text-background px-4 py-1.5 rounded-full hover:bg-accent-hover transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let&apos;s talk
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/marytaylor5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
