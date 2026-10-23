import { Check } from "lucide-react";
import { industries } from "@/lib/industries";

export default function Industries() {
  return (
    <section id="industries" className="wrap mt-20 scroll-mt-28">
      <h2 className="h2 text-center">Testing focus by industry</h2>
          {/* <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
            Where we concentrate in each domain. This describes our approach, not client results.
          </p> */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {industries.map((ind) => (
          <article key={ind.id} id={ind.id} className="card card-hover flex flex-col p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">{ind.title}</h3>
            <p className="mt-3 leading-7 text-gray-400">{ind.description}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Where we focus
            </p>
            <ul className="mt-3 space-y-3">
              {ind.scenarios.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm leading-6 text-gray-300">
                  <Check size={18} className="mt-0.5 shrink-0 text-blue-500" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}