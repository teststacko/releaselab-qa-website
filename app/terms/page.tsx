import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Terms & Conditions" };

// Placeholder: replace the body with your real terms (paste in your existing /terms content).
export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <section className="wrap mt-8 max-w-3xl">
        <div className="card space-y-4 p-6 leading-7 text-gray-300 sm:p-8">
          <p>
            The content on this site is provided for general information. Projects labelled
            &ldquo;Demo project&rdquo; or &ldquo;Prototype&rdquo; are built by ReleaseLab QA for
            demonstration and are not client work.
          </p>
          <p>
            Engagements are governed by a written agreement agreed before work begins.
          </p>
          <p className="text-sm text-gray-500">
            Placeholder text. Replace with your full terms before launch.
          </p>
        </div>
      </section>
    </>
  );
}
