import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Privacy policy",
  description: `Privacy policy for ${BUSINESS.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-ivory px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="font-display text-4xl tracking-tight text-espresso">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-charcoal/60">
            Last updated: July 2026
          </p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
            <p>
              CarterMade (&quot;we&quot;, &quot;us&quot;) respects your privacy. This
              site is a portfolio for {BUSINESS.founder}. Contact details you
              share via WhatsApp, email, or phone are used only to respond to
              your enquiry and deliver related services.
            </p>
            <p>
              We do not sell personal data. Analytics may be added later to
              understand site usage in aggregate; any cookies used for that
              purpose will be described on the{" "}
              <Link
                href="/cookies"
                className="text-walnut underline underline-offset-2"
              >
                cookies
              </Link>{" "}
              page.
            </p>
            <p>
              Questions:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-walnut underline underline-offset-2"
              >
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
