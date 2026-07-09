import Image from "next/image";
import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url: string;
  className?: string;
};

export const BrowserFrame = ({
  children,
  url,
  className = "",
}: BrowserFrameProps) => (
  <div
    className={`overflow-hidden rounded-sm border border-walnut/15 bg-parchment shadow-[0_12px_40px_-24px_rgba(44,33,24,0.35)] ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-walnut/10 bg-ivory/80 px-3 py-2.5">
      <div className="flex gap-1.5" aria-hidden>
        <span className="size-2 rounded-full bg-walnut/15" />
        <span className="size-2 rounded-full bg-walnut/15" />
        <span className="size-2 rounded-full bg-walnut/15" />
      </div>
      <p className="min-w-0 flex-1 truncate rounded-sm bg-parchment px-3 py-1 text-[11px] text-charcoal/55">
        {url.replace(/^https?:\/\/(www\.)?/, "")}
      </p>
    </div>
    {children}
  </div>
);

type BrowserScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export const BrowserScreenshot = ({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
}: BrowserScreenshotProps) => (
  <div className={`relative aspect-[16/10] overflow-hidden bg-parchment ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover object-top"
    />
  </div>
);
