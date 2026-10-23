"use client";

import CTA from "@/components/sections/CTA";
import { testimonials } from "@/lib/content";
import { Target, Eye, Layers, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const coreServices = [
    "Manual & Functional Testing",
    "Test Automation Architecture",
    "API & Microservices Testing",
    "Performance & Load Testing",
    "AI & LLM Model Validation",
    "Autonomous AI-Agent Testing",
    "Security & Vulnerability Scans",
    "Mobile App Testing (iOS & Android)",
    "Cross-Browser Compatibility",
    "CI/CD Quality Gates Integration",
    "Data Integrity & ETL Testing",
    "QA Strategy & Executive Consulting",
  ];

  return (
    <>
      {/* 1. Introduction / Overview */}
      {/* 1. Introduction / Overview (Full-width natural flow) */}
      <section className="wrap pt-12 pb-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About ReleaseLab QA
          </p>
          {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mt-2">
            Engineering software quality with certainty and scale.
          </h1> */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            ReleaseLabQA helps startups and businesses build, test, and release reliable software with confidence. We act as a dedicated quality engineering extension to your development team, eliminating costly production bugs and streamlining deployment cycles. By integrating modern automation pipelines and intelligent test frameworks directly into your workflow, we remove delivery bottlenecks and keep your releases fast and dependable. Whether modernizing legacy systems or launching high-velocity AI platforms, we ensure your engineering team ships clean code that drives user trust.
          </p>
        </div>
      </section>

      {/* 2. What We Do (Moved Above Mission & Vision) */}
      <section className="wrap mt-10">
        <div className="card p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Layers size={22} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">What we do</h2>
          </div>
          
          {/* <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 max-w-4xl">
            We provide software quality engineering and QA consulting across Web, Mobile, APIs, Performance, Automation, and AI-powered applications.
          </p> */}

          <div className="mt-8">
            { <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              Comprehensive QA & Consulting Solutions
            </p> }
            {/* 4 columns x 3 rows grid on desktop */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {coreServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3.5 py-3 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-white/5 pt-6">
            We focus on finding critical risks before they reach production, improving regression efficiency, and helping teams release with greater confidence.
          </p>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="wrap mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission Card */}
          <div className="card p-6 sm:p-8 relative overflow-hidden border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Target size={22} />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
              To engineer, automate, and deliver robust software quality solutions that protect our clients' release velocity, eliminating production regressions and accelerating their time-to-market. Delivering dependable test architecture that meets the highest standards of reliability, performance, and automation excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="card p-6 sm:p-8 relative overflow-hidden border-l-4 border-blue-400">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Eye size={22} />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
              To empower engineering teams and growing businesses through intelligent quality engineering, transforming testing from a release bottleneck into a strategic competitive advantage. We envision a future where autonomous test intelligence and modern development seamlessly unite, enabling teams to deploy complex software with absolute confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Marquee */}
      {testimonials.length > 0 && (
        <section className="wrap mt-16 overflow-hidden">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl mb-8 text-center">What clients say</h2>
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-marquee gap-6 py-2">
              {[...testimonials, ...testimonials].map((t, index) => (
                <figure
                  key={index}
                  className="card flex flex-col justify-between p-6"
                  style={{ width: "380px", flexShrink: 0 }}
                >
                  <blockquote className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {t.name} <span className="text-gray-500 font-normal">— {t.role}, {t.country}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>
      )}

      {/* 5. CTA Section */}
      <div className="mt-16">
        <CTA />
      </div>
    </>
  );
}