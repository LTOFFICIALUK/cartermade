import { Hero } from "@/components/home/Hero";
import {
  HomeServices,
  HomeWork,
  HomeFor,
  HomeWhy,
  HomeProcess,
  HomeCta,
} from "@/components/home/Sections";
import { buildPageMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: BUSINESS.name,
  description: BUSINESS.supporting,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeWork />
      <HomeFor />
      <HomeWhy />
      <HomeProcess />
      <HomeCta />
    </>
  );
}
