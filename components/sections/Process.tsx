import Link from "next/link";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="wrap mt-20">
      <div className="card p-6 sm:p-8 lg:p-10">
        <h2 className="h2 text-center">Let&apos;s make your next release more reliable.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <div key={s.title}>
              <p className="text-sm font-semibold text-blue-400">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/consultation" className="font-medium text-blue-400 hover:text-blue-300">
            See how assessments work →
          </Link>
        </div>
      </div>
    </section>
  );
}