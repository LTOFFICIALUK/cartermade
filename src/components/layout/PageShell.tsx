import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  grain?: boolean;
};

/** Wraps inner pages so content clears the fixed header and fills space above the footer. */
export const PageShell = ({ children, grain = true }: PageShellProps) => (
  <div className={`flex flex-1 flex-col bg-ivory ${grain ? "grain" : ""}`}>
    {children}
  </div>
);

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  /** Use when a CTA band follows — less bottom padding on this section. */
  withCtaBelow?: boolean;
};

export const PageSection = ({
  children,
  className = "",
  narrow = false,
  withCtaBelow = false,
}: PageSectionProps) => (
  <section
    className={`mx-auto w-full flex-1 px-5 pt-32 sm:px-8 sm:pt-40 ${
      withCtaBelow ? "pb-16 sm:pb-20" : "pb-24 sm:pb-32 lg:pb-40"
    } ${narrow ? "max-w-2xl" : "max-w-6xl"} ${className}`}
  >
    {children}
  </section>
);
