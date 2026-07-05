"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
    variant === "primary" && "bg-forest text-ivory hover:bg-forest-dark",
    variant === "secondary" && "border border-rule bg-beige/50 text-forest hover:border-champagne hover:bg-beige",
    variant === "ghost" && "text-muted hover:text-forest",
    className
  );

  const frame = variant !== "ghost" && (
    <span className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.span
        className="absolute left-0 top-0 h-px bg-champagne/80"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute right-0 top-0 w-px bg-champagne/80"
        animate={{ height: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute bottom-0 right-0 h-px bg-champagne/80"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-px bg-champagne/80"
        animate={{ height: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <a
        href={href}
        className={classes}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
      >
        {frame}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {frame}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
