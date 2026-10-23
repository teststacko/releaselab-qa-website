import ThemedImage from "@/components/ui/ThemedImage";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="wrap overflow-x-hidden pb-12 pt-10">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-center lg:col-span-6 lg:items-start">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-blue-400 lg:text-left">
            Engineering Quality, Automation &amp; AI Reliability
          </p>
          <h1 className="break-words text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl lg:text-left">
            Ship reliably.
            <br />
            Trust your AI.
            <br />
            <span className="text-blue-500">Eliminate repetitive work.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400 sm:text-xl lg:mt-8 lg:text-left">
            ReleaseLab QA is a quality engineering partner for growing software teams, covering
            test automation, AI reliability and engineering automation.
          </p>
        </div>

        {/* Width is capped, height is "auto": the illustration keeps its own proportions. */}
        <div className="flex items-center justify-center lg:col-span-6 lg:justify-end">
          <ThemedImage
            src={site.hero.src}
            lightSrc={site.heroLight || undefined}
            alt="ReleaseLab QA quality engineering illustration"
            width={site.hero.width}
            height={site.hero.height}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full max-w-[640px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}