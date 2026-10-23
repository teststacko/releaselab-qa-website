import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base";

// text-[#ffffff] (not text-white) so the label stays white on the blue button in light theme too.
const variants: Record<Variant, string> = {
  primary: "bg-blue-600 text-[#ffffff] hover:bg-blue-700",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-blue-500/40 hover:bg-blue-500/10",
};

type LinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: undefined;
  variant?: Variant;
};

export default function Button(props: LinkProps | ButtonProps) {
  if (props.href !== undefined) {
    const { href, external, variant = "primary", className = "", children } = props;
    const cls = `${base} ${variants[variant]} ${className}`;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", className = "", children, ...rest } = props;
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}