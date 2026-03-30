"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const titles = [
  "AI Product Manager",
  "Builder",
  "Founder",
  "AI Governance Lead",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % titles.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="grid lg:grid-cols-[1fr_460px] gap-12 items-start">
        {/* Left: text */}
        <div>
          <h1
            className="text-6xl sm:text-7xl font-bold text-foreground leading-none tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Mary Taylor
          </h1>

          {/* Rotating title */}
          <div className="h-9 mb-8 overflow-hidden">
            <p
              className="text-2xl font-medium text-muted transition-all duration-300"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {titles[index]}
            </p>
          </div>

          <p className="text-lg text-foreground leading-relaxed max-w-xl mb-4">
            I&apos;ve spent 12+ years turning complex AI capabilities into products people actually use: conversational agents, LLM-powered systems, agentic workflows, and the governance frameworks that make them safe to ship.
          </p>
          <p className="text-base text-muted leading-relaxed max-w-xl mb-10">
            Leading AI product at UserTesting. Building OpenSprouts on the side — starting from zero users.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              View projects
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

          {/* Press */}
          <div className="mt-10">
            <p className="text-xs font-medium text-subtle uppercase tracking-widest mb-4">As featured in</p>
            <div className="flex items-center gap-8">
              <a href="https://www.msn.com/en-us/money/technology/top-10-ai-entrepreneurs-making-an-impact-in-2025/ar-AA1L2dYP" target="_blank" rel="noopener noreferrer" title="Top 10 AI Entrepreneurs Making an Impact in 2025" className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/2024_new_msn_logo.svg" alt="MSN" className="h-9 w-auto" />
              </a>
              <a href="https://ncidea.org/meet-founders/meet-our-founders-mary-taylor/" target="_blank" rel="noopener noreferrer" title="Meet Our Founders: Mary Taylor" className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <img src="https://ncidea.org/wp-content/uploads/2021/06/NCIDEA_Logo.svg" alt="NC IDEA" className="h-9 w-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Right: headshot */}
        <div className="hidden lg:block">
          <div className="w-full aspect-[4/5] rounded-2xl flex items-end p-4 overflow-hidden relative">
            <img
              src="/headshot.jpg"
              alt="Mary Taylor"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="relative z-10 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 w-full">
              <p className="text-xs text-muted">Currently</p>
              <p className="text-sm font-medium text-foreground">Product Line Manager, AI · UserTesting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
