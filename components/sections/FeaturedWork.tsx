import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { featuredProjects } from "@/lib/content";

export default function FeaturedWork() {
  return (
    <section className="wrap mt-20">
      <h2 className="h2 mb-8 text-center">Our Work</h2>
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
                /* Fallback if no image is defined */
                <div className="flex h-full items-center justify-center">
                  <span aria-hidden="true" className="text-5xl opacity-30">
                    {p.slug.startsWith("health") ? "✚" : "◎"}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mb-5 text-gray-400">{p.summary}</p>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-2">
                {p.evidence.map((e) => (
                  <span key={e} className="text-sm font-medium text-blue-400">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/work" variant="secondary">
          <span>Show More Work</span>
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}