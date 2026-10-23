import type { Metadata } from "next";
import { Check, AlertTriangle, Cpu, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Partners",
  description: "Stop letting QA bottlenecks cap your agency's growth. White-label, overflow, and specialist quality engineering.",
};

const partnerPainPoints = [
  {
    title: "The Hiring Trap",
    text: "Recruiting senior automation engineers is expensive, slow, and leaves you exposed when client project volume fluctuates.",
    icon: AlertTriangle,
  },
  {
    title: "Release Firefights",
    text: "When your core developers spend hours manually verifying regressions instead of shipping features, delivery timelines slip and margins bleed.",
    icon: Cpu,
  },
  {
    title: "Missed Enterprise Bids",
    text: "Walking away from high-value, complex enterprise contracts simply because your internal team lacks dedicated test infrastructure.",
    icon: Layers,
  },
];

const partnerModels = [
  {
    title: "White-Label QE Infrastructure",
    text: "We operate entirely behind your brand. Your client relationship stays untouched; we handle the test architecture, execution, and reporting under your banner.",
  },
  {
    title: "Surge & Overflow Capacity",
    text: "Instant QA and automation bandwidth deployed precisely when your internal team is stretched across simultaneous client release sprints.",
  },
  {
    title: "Specialist Automation Sprints",
    text: "Targeted engineering support for complex requirements—such as Playwright test suites, API pipelines, or AI/LLM evaluation—without full-time overhead.",
  },
];

const partnerHow = [
  {
    t: "You Own the Client Relationship",
    d: "We adopt your communication style, tool stack, and project management rhythms seamlessly.",
  },
  {
    t: "Senior Engineers, Not Headcount",
    d: "You get deep automation and test architecture expertise, not interchangeable testers who file noisy bug reports.",
  },
  {
    t: "Strict Scope Discipline",
    d: "We establish clear acceptance criteria and automated quality gates upfront before a single line of test code is written.",
  },
];

const partnerFaqs = [
  {
    q: "How does the white-label arrangement work with our clients?",
    a: "We operate completely behind the scenes. We can use your company email domain for communication, attend client syncs as part of your team, and format all QA reports using your branding templates.",
  },
  {
    q: "What tools and CI/CD environments do you integrate with?",
    a: "We plug directly into your existing stack—whether that’s GitHub Actions, GitLab CI, Jenkins, or Bitbucket—writing native test automation using frameworks like Playwright and Selenium.",
  },
  {
    q: "How do you structure partnership engagements?",
    a: "We offer flexible models tailored to agency velocity: dedicated monthly capacity (retained engineering hours), project-based fixed scope for specific test suite builds, or flexible surge support.",
  },
  {
    q: "How quickly can engineers embed into our active project?",
    a: "Once scope and technical requirements are aligned, our engineers typically onboard into your repository and project management tools within 3 to 5 business days.",
  },
  {
    q: "Do you handle manual testing alongside automation?",
    a: "Yes. While our core depth is in automated regression and workflow validation, we execute rigorous exploratory and functional testing to guarantee total release confidence.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Compact Header matching Services & Work pattern */}
      {/* Compact Header with Right-Aligned CTA */}
      <section className="wrap pt-12 pb-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Agency Partnerships</p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
              Stop letting QA bottlenecks cap your agency's growth.
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:text-lg sm:whitespace-nowrap">
              High-performing development agencies don't need more junior testers—they need senior quality engineering muscle.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/consultation?type=Partnership#contact-form" variant="primary">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
      {/* The Operational Reality ("The Missing Piece") */}
      <section className="wrap mt-12">
        <h2 className="text-xl font-bold text-white sm:text-2xl mb-6">Why traditional agency growth hits a wall</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {partnerPainPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="wrap mt-16">
        <h2 className="text-xl font-bold text-white sm:text-2xl mb-6">How we integrate with your operation</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {partnerModels.map((m) => (
            <div key={m.title} className="card card-hover p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Standards */}
      <section className="wrap mt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerHow.map((h) => (
            <div key={h.t} className="card p-6">
              <h3 className="text-lg font-semibold text-white">{h.t}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner FAQ Section (Native Interactive Accordion) */}
      <section className="wrap mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center sm:text-3xl mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {partnerFaqs.map((faq, index) => (
              <details
                key={index}
                className="card group p-6 transition-all duration-200 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-white text-base select-none list-none">
                  {faq.q}
                  <span className="ml-4 transition-transform duration-200 group-open:rotate-45 text-blue-400 text-xl font-bold">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-gray-400 border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-16">
        <CTA />
      </div>
    </>
  );
}