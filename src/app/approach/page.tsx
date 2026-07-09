import { APPROACH_STEPS } from "@/lib/constants";
import { PageSection, PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { HomeCta } from "@/components/home/Sections";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Approach",
  description:
    "How CarterMade builds websites — brief, design, build, launch. Clear process for small local businesses.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageShell>
        <PageSection withCtaBelow>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
              Approach
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-espresso sm:text-5xl">
              A calm process. A sharp result.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/75">
              No mystery. No endless decks. We agree what &ldquo;done&rdquo; looks like,
              then build toward it — one phase at a time.
            </p>
          </Reveal>

          <ol className="mt-16 space-y-0">
            {APPROACH_STEPS.map((step, index) => (
              <Reveal key={step.step} delayMs={index * 60} as="li">
                <div className="grid gap-4 border-t border-walnut/15 py-10 sm:grid-cols-12 sm:gap-8">
                  <p className="font-display text-brass sm:col-span-2">
                    {step.step}
                  </p>
                  <h2 className="font-display text-2xl text-espresso sm:col-span-3 sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="text-base leading-relaxed text-charcoal/75 sm:col-span-7">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </PageSection>
      </PageShell>
      <HomeCta />
    </>
  );
}
