import Link from "next/link";
import { BUSINESS, NAV, PROJECTS } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

export const Footer = () => (
  <footer className="border-t border-walnut/10 bg-espresso text-ivory/80">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="font-display text-3xl tracking-tight text-ivory">
          Carter<span className="text-brass">Made</span>
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
          Websites for small local businesses — crafted to look serious and
          convert. UK-wide.
        </p>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-brass transition-colors hover:text-brass-light"
          aria-label="Message Luke on WhatsApp"
        >
          <WhatsAppIcon className="size-4" />
          Message on WhatsApp
        </a>
      </div>

      <div className="md:col-span-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/45">
          Pages
        </p>
        <ul className="mt-4 space-y-2.5">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-ivory/70 transition-colors hover:text-ivory"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/45">
          Selected work
        </p>
        <ul className="mt-4 space-y-2.5">
          {PROJECTS.slice(0, 4).map((project) => (
            <li key={project.slug}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ivory/70 transition-colors hover:text-ivory"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-1 text-sm">
          <a
            href={`mailto:${BUSINESS.email}`}
            className="block text-ivory/70 transition-colors hover:text-ivory"
          >
            {BUSINESS.email}
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="block text-ivory/70 transition-colors hover:text-ivory"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-ivory/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-ivory/70">
            Privacy
          </Link>
          <Link href="/cookies" className="hover:text-ivory/70">
            Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
