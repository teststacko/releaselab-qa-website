import Link from "next/link";
import ThemedImage from "@/components/ui/ThemedImage";
import { site } from "@/lib/site";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="ReleaseLab QA home"
      className="inline-flex w-[130px] shrink-0 items-center sm:w-[150px]"
    >
      <ThemedImage
        src={site.logo.src}
        lightSrc={site.logoLight || undefined}
        alt="ReleaseLab QA"
        width={site.logo.width}
        height={site.logo.height}
        priority
        sizes="(min-width: 640px) 150px, 130px"
        className="block !h-auto max-h-16 w-full object-contain"
      />
    </Link>
  );
}