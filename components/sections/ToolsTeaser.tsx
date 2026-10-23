import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { tools } from "@/lib/content";

export default function ToolsTeaser() {
  return (
    <section className="wrap mt-20">
      <h2 className="h2 mb-2 text-center">Our Products</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-400">
        Engineering tools that make our delivery sharper.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {tools.map((t) => (
          <Link key={t.name} href="/tools" className="card card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <Badge tone="gray">{t.focus}</Badge>
              </div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">{t.text}</p>
            </div>
            <span className="mt-6 text-sm font-medium text-blue-400">Explore tool →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}