import type { HTMLAttributes, KeyboardEvent, MouseEvent } from "react";

export type CardVariant = "default" | "elevated" | "outline";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  interactive?: boolean;
  disabled?: boolean;
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const baseClassName =
  "rounded-[var(--radius-lg)] bg-[var(--color-white)] p-[var(--space-4)] font-[var(--font-jp)] text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-gray-900)] transition-[box-shadow,border-color,transform,opacity] duration-[var(--duration-normal)] ease-[var(--ease-default)]";

const variantClassNames: Record<CardVariant, string> = {
  default: "border border-transparent shadow-[var(--shadow-sm)]",
  elevated: "border border-transparent shadow-[var(--shadow-md)]",
  outline: "border border-[var(--color-gray-300)] shadow-[var(--shadow-sm)]",
};

const interactiveClassName =
  "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-0";

const interactiveHoverClassNames: Record<CardVariant, string> = {
  default: "hover:shadow-[var(--shadow-md)] hover:-translate-y-px",
  elevated: "hover:shadow-[var(--shadow-md)] hover:-translate-y-px",
  outline:
    "hover:border-[var(--color-gray-500)] hover:shadow-[var(--shadow-md)] hover:-translate-y-px",
};

export function Card({
  variant = "default",
  interactive = false,
  disabled = false,
  className,
  onKeyDown,
  onClick,
  tabIndex,
  role,
  children,
  ...props
}: CardProps) {
  const isInteractive = interactive || Boolean(onClick);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || !isInteractive || disabled || !onClick) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(event as unknown as MouseEvent<HTMLDivElement>);
    }
  }

  return (
    <div
      role={isInteractive ? role ?? "button" : role}
      tabIndex={isInteractive ? (disabled ? -1 : tabIndex ?? 0) : tabIndex}
      aria-disabled={isInteractive && disabled ? true : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      className={cx(
        baseClassName,
        variantClassNames[variant],
        isInteractive && interactiveClassName,
        isInteractive && !disabled && interactiveHoverClassNames[variant],
        disabled && "pointer-events-none opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
