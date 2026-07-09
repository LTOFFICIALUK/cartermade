"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type KeyboardEvent } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-walnut/10 bg-ivory/90 backdrop-blur-md"
          : "bg-ivory/70 backdrop-blur-sm"
      }`}
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-espresso transition-opacity hover:opacity-80 sm:text-2xl"
          aria-label="CarterMade home"
        >
          Carter
          <span className="text-walnut">Made</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV.filter((item) => item.href !== "/").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-espresso"
                    : "text-charcoal/70 hover:text-espresso"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <WhatsAppButton
            variant="ghost"
            label="WhatsApp"
            className="hidden px-4 py-2 text-xs sm:inline-flex"
          />
          <Link
            href="/contact"
            className="hidden rounded-sm border border-walnut/20 px-4 py-2 text-xs font-medium text-espresso transition-colors hover:border-walnut/40 hover:bg-walnut/5 sm:inline-flex"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-sm text-espresso md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={handleToggle}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          className="border-t border-walnut/10 bg-ivory md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm px-3 py-3 text-base ${
                    active
                      ? "bg-parchment text-espresso"
                      : "text-charcoal hover:bg-parchment/70"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 px-1">
              <WhatsAppButton className="w-full" />
              <p className="mt-3 text-center text-xs text-charcoal/60">
                {BUSINESS.phoneDisplay}
              </p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
