import type { Metadata } from "next";
import { Check } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { pillars, techStrip } from "@/lib/content";
import TechMarquee from "@/components/sections/TechMarquee";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Services",
  description: "Quality engineering, AI reliability and workflow automation for growing software teams.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Compact Header */}
      <section className="wrap pt-12 pb-4">
        <div className="max-w-5xl">
          {/* <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Services</p> */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
            Your dedicated quality engineering arm.
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:text-lg">
            We plug into your stack to eliminate release bottlenecks, automate complex regressions, and validate AI systems.
          </p>
        </div>
      </section>

      {/* Service Pillars / Cards */}
      {pillars.map((p, i) => (
        <section key={p.id} id={p.id} className="wrap mt-10 scroll-mt-28">
          <div className="card p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold text-blue-400">0{i + 1}</p>
            <h2 className="h2 mt-1">{p.title}</h2>
            <p className="mt-1 text-lg text-blue-400">{p.heading}</p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Sound familiar?
                </p>
                <p className="mt-2 text-xl italic text-gray-200">{p.problem}</p>
                <p className="mt-5 leading-7 text-gray-400">{p.summary}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  What we do
                </p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-gray-300">
                      <Check size={18} className="mt-1 shrink-0 text-blue-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Tools We Work With Section */}
      <section className="wrap mt-16 overflow-hidden">
        <div className="card p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Tools we work with</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-400">
            Technology supports the solution; it is not the solution. We pick tools to fit your stack.
          </p>

          <TechMarquee />
        </div>
      </section>

      <CTA />
      <Testimonials />
    </>
  );
}