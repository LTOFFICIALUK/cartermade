import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { Mail, Phone } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with CarterMade on WhatsApp or email — websites for small local businesses, UK-wide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="grain min-h-[80svh] bg-ivory px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-walnut/70">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-espresso sm:text-5xl">
              Let’s talk about your site.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/75">
              WhatsApp is the quickest way. Tell me what you do, who you serve,
              and what you need the site to achieve — I’ll come back with clear
              next steps.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Message on WhatsApp" />
            </div>
          </Reveal>

          <Reveal delayMs={120} className="lg:col-span-5 lg:col-start-8">
            <ul className="space-y-6 border-t border-walnut/15 pt-8">
              <li>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  aria-label="Open WhatsApp chat"
                >
                  <span className="mt-0.5 flex size-10 items-center justify-center rounded-sm bg-parchment text-walnut transition-colors group-hover:bg-walnut group-hover:text-ivory">
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-walnut/60">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-lg text-espresso">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group flex items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  aria-label="Email Luke"
                >
                  <span className="mt-0.5 flex size-10 items-center justify-center rounded-sm bg-parchment text-walnut transition-colors group-hover:bg-walnut group-hover:text-ivory">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-walnut/60">
                      Email
                    </span>
                    <span className="mt-1 block text-lg text-espresso">
                      {BUSINESS.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="group flex items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  aria-label="Call Luke"
                >
                  <span className="mt-0.5 flex size-10 items-center justify-center rounded-sm bg-parchment text-walnut transition-colors group-hover:bg-walnut group-hover:text-ivory">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-walnut/60">
                      Call
                    </span>
                    <span className="mt-1 block text-lg text-espresso">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-10 text-sm text-charcoal/60">
              Serving businesses UK-wide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
