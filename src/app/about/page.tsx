import { BUSINESS } from "@/lib/constants";
import { PageSection, PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HomeCta } from "@/components/home/Sections";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Luke Carter builds websites for small local businesses across the UK — craft, clarity, and conversion.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageShell>
        <PageSection withCtaBelow>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
                About
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-tight text-espresso sm:text-5xl">
                {BUSINESS.founder}
              </h1>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-walnut/60">
                Founder · CarterMade
              </p>
            </Reveal>

            <div className="space-y-6 text-base leading-relaxed text-charcoal/80 lg:col-span-7">
              <Reveal delayMs={80}>
                <p>
                  I build websites for small local businesses — the kind where
                  the owner answers the phone, knows every customer, and needs
                  a site that looks as serious as the work they do.
                </p>
              </Reveal>
              <Reveal delayMs={140}>
                <p>
                  CarterMade is the stamp on that work: handmade attention with
                  modern execution. Walnut-desk craft, not café kitsch. Quiet
                  motion. Brand first. Enquiries that actually arrive.
                </p>
              </Reveal>
              <Reveal delayMs={200}>
                <p>
                  Based in the North West, working UK-wide. If you want a
                  conversation about your next site, WhatsApp is the fastest
                  door in.
                </p>
              </Reveal>
              <Reveal delayMs={260}>
                <div className="pt-4">
                  <WhatsAppButton label="Message Luke on WhatsApp" />
                </div>
              </Reveal>
            </div>
          </div>
        </PageSection>
      </PageShell>
      <HomeCta />
    </>
  );
}
