import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Engineering tools we build to sharpen our delivery.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        //eyebrow="Our Products"
        title="We build our own engineering tools."
        //subtitle="Projects show what we can build for you. Products are the capability we build for ourselves, to make our delivery sharper over time."
      />

      <section className="wrap mt-12">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          {/* <p className="text-sm text-gray-600 dark:text-gray-400">
            Built in-house, battle-tested in production. These aren't theoretical SaaS concepts—they are the engines powering our client deliverables.
          </p> */}
        </div>

        {/* 2x2 Grid Layout for Products */}
        <div className="grid gap-8 lg:grid-cols-2">
          {tools.map((t) => (
            <div key={t.name} className="card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">{t.name}</h2>
                  {/* Focus label styled consistently with clean high-contrast presentation */}
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {t.focus}
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {t.text}
                </p>

                {t.categories && t.categories.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                      Key Capabilities
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {t.categories.map((c) => (
                        <div
                          key={c}
                          className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500">Proprietary internal tooling</span>
                <Button 
                  href={`/consultation?type=Product-${encodeURIComponent(t.name)}#contact-form`} 
                  variant="primary"
                >
                  I&apos;m Interested
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap / Coming Soon Note */}
      <section className="wrap mt-16 text-center">
        <div className="card max-w-xl mx-auto p-6 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
          <p className="text-sm font-medium text-gray-900 dark:text-white">More internal tooling in active development</p>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            We continuously build and refine new automation capabilities as our engineering engagements evolve.
          </p>
        </div>
      </section>
    </>
  );
}