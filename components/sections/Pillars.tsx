import Link from "next/link";
import { pillars } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="wrap mt-20">
      <h2 className="h2 mb-8 text-center">Three problems we solve</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => (
          <Link
            key={p.id}
            href={`/services#${p.id}`}
            className="card card-hover flex flex-col p-6"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-blue-400">{p.heading}</p>
            <p className="mt-4 italic text-gray-400">{p.problem}</p>
            <ul className="mt-5 space-y-2 text-gray-300">
              {p.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  {c}
                </li>
              ))}
            </ul>
            <span className="mt-6 text-sm font-medium text-blue-400">See details →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
