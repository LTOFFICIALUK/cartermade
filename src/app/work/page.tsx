import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { PageSection, PageShell } from "@/components/layout/PageShell";
import { HomeCta } from "@/components/home/Sections";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Work",
  description:
    "Selected websites by CarterMade — Cassia Accountancy, Benza Autos, Big Dragons Gym, Polyblock, Successful Streamer.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageShell>
        <PageSection withCtaBelow>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
              Work
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-espresso sm:text-5xl">
              Live sites. Real businesses. Proof over pitch decks.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/75">
              Every project below is live. Filter by type, click through — the
              work speaks louder than a case-study template.
            </p>
          </Reveal>
          <div className="mt-16">
            <ProjectShowcase showFilters />
          </div>
        </PageSection>
      </PageShell>
      <HomeCta />
    </>
  );
}
