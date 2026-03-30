import PageHeader from "@/components/ui/PageHeader";

const webinars = [
  {
    title: "A Guide To Automated Customer Support and Self-Service",
    host: "BrightTALK",
    date: "Dec 14, 2021",
    description: "Joined a BrightTALK panel to discuss how AI is reshaping automated customer support and self-service, drawing on work building Lisa, AppFolio's AI leasing assistant.",
    link: "https://www.brighttalk.com/webcast/19218/520227?utm_source=Intercom&utm_medium=brighttalk&utm_campaign=520227",
    type: "Webinar",
    thumbnail: "/brighttalk-customer-support.webp",
  },
  {
    title: "How AI is Powering the Move to a Hybrid Workforce",
    host: "BrightTALK",
    date: "Nov 16, 2021",
    description: "Spoke on AI's role in enabling hybrid work models, drawing on experience building AI-powered personalization at Movable Ink.",
    link: "https://www.brighttalk.com/webcast/19039/503496?utm_source=brighttalk-portal&utm_medium=web&utm_campaign=channel-page&utm_content=recorded",
    type: "Webinar",
    thumbnail: "/brighttalk-marytaylor.png",
  },
];

const talks = [
  {
    title: "The ROI of AI",
    event: "Managed Chaos Podcast",
    date: "Oct 16, 2024",
    description: "Guest on the Managed Chaos Podcast discussing how to measure and communicate the return on AI investments, from evaluation frameworks to business impact.",
    link: "https://www.youtube.com/watch?v=j1CapLop_Eg&t=8s",
    type: "Podcast",
    thumbnail: "https://img.youtube.com/vi/j1CapLop_Eg/maxresdefault.jpg",
  },
];

const writing = [
  {
    title: "Addressing Bias and Fairness in AI Products",
    publication: "Medium",
    date: "Jun 29, 2024",
    description: "Co-written with Ashutosh Malaviya. A practical look at how product teams can identify, measure, and reduce bias in AI-powered features.",
    link: "https://ash-ai.medium.com/addressing-bias-and-fairness-in-ai-products-368b3c345ca1",
    type: "Co-written",
    thumbnail: "",
  },
  {
    title: "Balancing User Needs by Simplifying AI Features",
    publication: "Medium",
    date: "Apr 12, 2024",
    description: "Co-written with Ashutosh Malaviya. Explores how AI PMs can cut through feature complexity to deliver clearer, more useful AI experiences.",
    link: "https://ash-ai.medium.com/balancing-user-needs-by-simplifying-ai-features-insights-from-an-ai-product-manager-and-an-ai-e3a7a152494e",
    type: "Co-written",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/0*qwNF5oC1G8erBgHq",
  },
];

type AppearanceType = "Webinar" | "Talk" | "Podcast" | "Guest Post" | "Co-written";

const typeColors: Record<AppearanceType, string> = {
  Webinar: "bg-blue-50 text-blue-700",
  Talk: "bg-purple-50 text-purple-700",
  Podcast: "bg-pink-50 text-pink-700",
  "Guest Post": "bg-green-50 text-green-700",
  "Co-written": "bg-orange-50 text-orange-700",
};

const placeholderColors: Record<AppearanceType, string> = {
  Webinar: "bg-blue-50",
  Talk: "bg-purple-50",
  Podcast: "bg-pink-50",
  "Guest Post": "bg-green-50",
  "Co-written": "bg-orange-50",
};

function AppearanceCard({
  item,
}: {
  item: { title: string; host?: string; event?: string; publication?: string; date: string; description: string; link: string; type: string; thumbnail: string };
}) {
  const colorClass = typeColors[item.type as AppearanceType] ?? "bg-surface text-muted";
  const placeholderBg = placeholderColors[item.type as AppearanceType] ?? "bg-surface";
  const venue = item.host ?? item.event ?? item.publication;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7 border-b border-border last:border-0 hover:bg-surface -mx-4 px-4 rounded-lg transition-colors"
    >
      <div className="sm:w-48 flex-shrink-0 flex flex-col gap-2">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit ${colorClass}`}>
          {item.type}
        </span>
        {item.date && <p className="text-xs text-muted">{item.date}</p>}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-1">{venue}</p>
        <h3
          className="text-base font-semibold text-foreground mb-2 group-hover:text-muted transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {item.title} →
        </h3>
        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
      </div>
      <div className="hidden md:flex flex-shrink-0 w-44 h-[99px] rounded-lg overflow-hidden items-center justify-center">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${placeholderBg}`}>
            <span className="text-xs font-medium text-muted px-3 text-center">{venue}</span>
          </div>
        )}
      </div>
    </a>
  );
}

export default function SpeakingPage() {
  const allItems = [
    ...talks,
    ...writing,
    ...webinars,
  ];

  return (
    <>
      <PageHeader
        label="Appearances"
        title="Speaking"
        description="Webinars, panels, talks, and guest writing I've contributed to for other companies and publications."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Invite prompt */}
        <div className="bg-surface rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p
              className="text-sm font-semibold text-foreground mb-1"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Want me on your podcast, panel, or webinar?
            </p>
            <p className="text-sm text-muted">I speak on AI product strategy, LLM evaluation, AI governance, and 0-to-1 product development.</p>
          </div>
          <a
            href="https://linkedin.com/in/marytaylor5"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Get in touch
          </a>
        </div>

        {/* All appearances */}
        <div>
          {allItems.map((item, i) => (
            <AppearanceCard key={i} item={item} />
          ))}
        </div>

      </div>
    </>
  );
}
