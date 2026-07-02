import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  loadingLabel?: ReactNode;
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const baseClassName =
  "relative inline-flex select-none items-center justify-center gap-[var(--space-1)] whitespace-nowrap rounded-[var(--radius-md)] border border-transparent font-[var(--font-jp)] font-semibold leading-[var(--leading-tight)] transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-[var(--duration-normal)] ease-[var(--ease-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:transform-none";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-white)] shadow-[var(--shadow-sm)] enabled:hover:-translate-y-px enabled:hover:shadow-[var(--shadow-md)]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-[var(--shadow-sm)] enabled:hover:bg-[var(--color-white)] enabled:hover:shadow-[var(--shadow-md)]",
  ghost:
    "bg-transparent text-[var(--color-primary)] border-[var(--color-gray-300)] enabled:hover:bg-[var(--color-gray-50)] enabled:hover:border-[var(--color-gray-500)]",
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "min-h-[var(--size-button-sm)] px-[var(--space-2)] text-[var(--text-sm)]",
  md: "min-h-[var(--size-button-md)] px-[var(--space-3)] text-[var(--text-base)]",
  lg: "min-h-[var(--size-button-lg)] px-[var(--space-4)] text-[var(--text-lg)]",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className,
  children,
  loadingLabel = "Loading...",
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cx(
        baseClassName,
        variantClassNames[variant],
        sizeClassNames[size],
        loading && "pointer-events-none",
        className,
      )}
      {...props}
    >
      {loading ? (
        <span
          className="h-[var(--space-2)] w-[var(--space-2)] animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : null}
      <span className="inline-flex items-center">{loading ? loadingLabel : children}</span>
    </button>
  );
}
