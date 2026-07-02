import type { HTMLAttributes, ReactNode } from "react";

type HeroProps = Omit<HTMLAttributes<HTMLElement>, "title" | "children"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Hero({
  className,
  eyebrow,
  title,
  description,
  actions,
  children,
  ...props
}: HeroProps) {
  return (
    <section
      className={cx(
        "py-[var(--space-6)] md:py-[var(--space-8)]",
        className,
      )}
      {...props}
    >
      <div className="space-y-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--color-gray-300)] bg-[var(--color-white)] p-[var(--space-4)] shadow-[var(--shadow-sm)] md:p-[var(--space-6)]">
        {eyebrow ? (
          <p className="w-fit rounded-[var(--radius-full)] bg-[var(--color-secondary)] px-[var(--space-2)] py-[var(--space-1)] font-[var(--font-jp)] text-[var(--text-sm)] font-[var(--font-medium)] leading-[var(--leading-tight)] text-[var(--color-primary)]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="font-[var(--font-jp)] text-[var(--text-3xl)] font-[var(--font-semibold)] leading-[var(--leading-tight)] text-[var(--color-gray-900)]">
          {title}
        </h1>

        {description ? (
          <p className="max-w-[64ch] font-[var(--font-jp)] text-[var(--text-lg)] font-[var(--font-normal)] leading-[var(--leading-normal)] text-[var(--color-gray-700)]">
            {description}
          </p>
        ) : null}

        {actions ? (
          <div className="flex flex-wrap items-center gap-[var(--space-2)] pt-[var(--space-1)]">{actions}</div>
        ) : null}

        {children}
      </div>
    </section>
  );
}
