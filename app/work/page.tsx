import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { featuredProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Projects with the evidence behind every capability.",
};

export default function WorkPage() {
  return (
    <>
      {/* Compact Header with single-line desktop subtitle */}
      <section className="wrap pt-12 pb-4">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Our Work</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
            Reference architectures and case studies.
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:text-lg sm:whitespace-nowrap">
            A look at how we embed with engineering teams to eliminate release bottlenecks, automate complex regressions, and secure production pipelines.
          </p>
        </div>
      </section>

      <section className="wrap mt-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="card card-hover flex flex-col overflow-hidden"
            >
              {/* Image Banner Area */}
              <div className="relative h-48 w-full bg-[#081321] overflow-hidden">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span aria-hidden="true" className="text-6xl opacity-30">
                      {p.slug.startsWith("health") ? "✚" : "◎"}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-3 text-xl font-semibold text-white">{p.title}</h2>
                <p className="mb-5 text-gray-400">{p.summary}</p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
                  {p.evidence.map((e) => (
                    <span key={e} className="text-sm font-medium text-blue-400">
                      {e}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-medium text-blue-400">View project →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Industries />

      <Testimonials />
      <CTA />
    </>
  );
}