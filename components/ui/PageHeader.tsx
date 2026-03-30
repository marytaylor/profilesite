interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 border-b border-border">
      {label && (
        <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h1
        className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}
