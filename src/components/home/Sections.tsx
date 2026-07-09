import { ArrowRight } from "lucide-react";
import { APPROACH_STEPS, SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import Link from "next/link";

export const HomeServices = () => (
  <section className="border-y border-walnut/10 bg-parchment px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
          What I build
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-espresso sm:text-4xl">
          Everything a local business site needs — nothing it doesn&apos;t.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delayMs={index * 70}>
            <div className="h-full border-t border-walnut/15 pt-6">
              <h3 className="font-display text-xl text-espresso">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {service.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const HomeWork = () => (
  <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
          Selected work
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-espresso sm:text-4xl">
          Sites that earn trust before the first call.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-charcoal/70">
          Live client sites — framed, categorised, and one click away. Proof
          beats promises.
        </p>
      </Reveal>
      <div className="mt-14">
        <ProjectShowcase editorial showAllLink />
      </div>
    </div>
  </section>
);

export const HomeFor = () => (
  <section className="grain border-y border-walnut/10 bg-parchment px-5 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
            Who it&apos;s for
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-espresso sm:text-4xl">
            Small local businesses that need to look like they mean it.
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
          {[
            {
              title: "Service businesses",
              body: "Garages, accountants, gyms, trades — anyone whose reputation lives or dies on the first impression online.",
            },
            {
              title: "Owners, not committees",
              body: "You want a clear site, a WhatsApp that rings, and zero agency theatre. That’s the brief.",
            },
            {
              title: "UK-wide",
              body: "Based in the North West. Building for businesses across the UK — wherever your customers search.",
            },
            {
              title: "Built to convert",
              body: "Phone, booking, enquiry — every page has one job. Design that serves the outcome, not the other way round.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <h3 className="font-display text-xl text-espresso">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const HomeWhy = () => (
  <section className="bg-espresso px-5 py-20 text-ivory sm:px-8 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass/80">
          Why CarterMade
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
          Craft you can feel. Performance you can measure.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {[
          {
            title: "Brand-first",
            body: "Your name carries the first viewport. No generic hero that could belong to anyone else.",
          },
          {
            title: "Quiet motion",
            body: "Animations that lock in like puzzle pieces — never bounce, never float, never distract.",
          },
          {
            title: "Ready to rank",
            body: "SEO and local foundations baked in from day one, so the site works after launch — not just at launch.",
          },
        ].map((item, index) => (
          <Reveal key={item.title} delayMs={index * 90}>
            <div className="border-t border-brass/30 pt-6">
              <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const HomeProcess = () => (
  <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
            Approach
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-espresso sm:text-4xl">
            Simple from brief to launch.
          </h2>
        </Reveal>
        <Reveal delayMs={100}>
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 text-sm text-walnut underline decoration-brass/50 underline-offset-4 hover:decoration-brass"
          >
            Full approach
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Reveal>
      </div>
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {APPROACH_STEPS.map((step, index) => (
          <Reveal key={step.step} delayMs={index * 80} as="li">
            <p className="font-display text-sm text-brass">{step.step}</p>
            <h3 className="mt-3 font-display text-xl text-espresso">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export const HomeCta = () => (
  <section className="grain border-t border-walnut/10 bg-parchment px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <h2 className="font-display text-3xl tracking-tight text-espresso sm:text-4xl">
          Ready for a site that feels handmade?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-charcoal/75 sm:text-base">
          Tell me about your business on WhatsApp. No forms maze — just a
          conversation about what you need.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton label="Start on WhatsApp" />
          <a
            href={`mailto:luke@cartermade.co.uk`}
            className="text-sm text-walnut underline decoration-brass/50 underline-offset-4 hover:decoration-brass"
          >
            luke@cartermade.co.uk
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
