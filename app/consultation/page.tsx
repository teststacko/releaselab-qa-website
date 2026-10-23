import type { Metadata } from "next";
import { CalendarDays, Check, Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { assessments, processSteps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consultation",
  description: "Have an engineering problem? Let's understand it first.",
};

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Have an engineering problem? Let's understand it first."
        subtitle="We start with your problem, not our services. You get value from the conversation and the findings, even if you decide to implement everything yourself."
      >
        <Button href={site.calendly} external>
          <CalendarDays size={18} />
          <span>Book a 30-min call</span>
        </Button>
        <Button href="#contact-form" variant="secondary">
          <Mail size={18} />
          <span>Send us a message</span>
        </Button>
      </PageHeader>

      <section className="wrap mt-14">
        <h2 className="h2 mb-2 text-center">Focused assessments</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-400">
          Each assessment is scoped to one real problem: a product area, a feature or a workflow.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {assessments.map((a) => (
            <div key={a.title} className="card card-hover flex flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{a.forWho}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                You receive
              </p>
              <ul className="mt-2 space-y-2">
                {a.gets.map((g) => (
                  <li key={g} className="flex gap-2 text-gray-300">
                    <Check size={18} className="mt-1 shrink-0 text-blue-500" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap mt-14">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white">How it works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <div key={s.title}>
                <p className="text-sm font-semibold text-blue-400">Step {i + 1}</p>
                <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm defaultType={type} />
    </>
  );
}
