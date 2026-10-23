"use client";

import { techStrip } from "@/lib/content";

export default function TechMarquee() {
  return (
    <div className="relative mt-8 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex w-max animate-marquee gap-4 py-2">
        {/* Render techStrip twice to create a seamless infinite loop */}
        {[...techStrip, ...techStrip].map((t, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all hover:border-blue-500/40 hover:bg-blue-500/10"
            style={{ minWidth: "150px", justifyContent: "center" }}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-base">
              {t.icon}
            </span>
            <span className="whitespace-nowrap">{t.name}</span>
          </div>
        ))}
      </div>

      {/* Scoped CSS animation that runs guaranteed */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}