import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "./constants";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
};

export const buildPageMetadata = ({
  title,
  description,
  path = "",
}: PageMetaInput): Metadata => {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title === BUSINESS.name ? title : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
};
