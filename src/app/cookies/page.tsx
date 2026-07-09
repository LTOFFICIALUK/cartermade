import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Cookie policy",
  description: `Cookie policy for ${BUSINESS.name}.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section className="bg-ivory px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="font-display text-4xl tracking-tight text-espresso">
            Cookie policy
          </h1>
          <p className="mt-4 text-sm text-charcoal/60">
            Last updated: July 2026
          </p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
            <p>
              This site currently uses only essential cookies required for the
              site to function (if any). We may introduce analytics cookies in
              future; if we do, this page will be updated and a consent choice
              provided where required.
            </p>
            <p>
              See also our{" "}
              <Link
                href="/privacy"
                className="text-walnut underline underline-offset-2"
              >
                privacy policy
              </Link>
              . Contact{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-walnut underline underline-offset-2"
              >
                {BUSINESS.email}
              </a>{" "}
              with questions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
