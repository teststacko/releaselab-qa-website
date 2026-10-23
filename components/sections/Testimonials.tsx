"use client";

import { testimonials } from "@/lib/content";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="wrap mt-20 overflow-hidden">
      <h2 className="h2 mb-8 text-center text-gray-900 dark:text-white">What clients say</h2>

      {/* Marquee container with fade edges */}
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
  );
}