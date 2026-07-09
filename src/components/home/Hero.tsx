import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS, SERVICES, STUDIO_NOTES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => (
  <section className="grain relative min-h-svh overflow-hidden bg-ivory">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(196,165,116,0.22),transparent_55%),radial-gradient(ellipse_at_85%_100%,rgba(92,64,51,0.08),transparent_50%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-walnut/20 to-transparent"
      aria-hidden
    />

    <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-32 sm:px-8">
      <div className="lg:col-span-7">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-walnut/70">
            UK-wide · small local businesses
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <p
            className="mt-6 font-display text-[clamp(3.25rem,10vw,6.25rem)] leading-[0.88] tracking-tight text-espresso"
            aria-label="CarterMade"
          >
            Carter
            <span className="text-walnut">Made</span>
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="mt-8 h-px w-16 bg-brass" aria-hidden />
        </Reveal>

        <Reveal delayMs={200}>
          <h1 className="mt-8 max-w-xl text-xl leading-snug text-charcoal sm:text-2xl sm:leading-snug">
            {BUSINESS.tagline}
          </h1>
        </Reveal>

        <Reveal delayMs={280}>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70 sm:text-base">
            {BUSINESS.supporting}
          </p>
        </Reveal>

        <Reveal delayMs={360}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton />
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-sm font-medium text-walnut underline decoration-brass/50 underline-offset-4 transition-colors hover:text-espresso hover:decoration-brass"
            >
              See our work
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={120} className="lg:col-span-5">
        <aside className="border border-walnut/10 bg-parchment/60 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
            The studio
          </p>
          <dl className="mt-6 space-y-5">
            {STUDIO_NOTES.map((note) => (
              <div
                key={note.label}
                className="flex items-baseline justify-between gap-4 border-b border-walnut/10 pb-5 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-charcoal/60">{note.label}</dt>
                <dd className="text-right text-sm font-medium text-espresso">
                  {note.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-charcoal/70">
            One-person studio. Every site is built by hand — design, code, and
            launch — with the same care I&apos;d want for my own business.
          </p>
        </aside>
      </Reveal>
    </div>
  </section>
);
