import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

// Placeholder: replace the body with your real policy (paste in your existing /privacy content).
export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="wrap mt-8 max-w-3xl">
        <div className="card space-y-4 p-6 leading-7 text-gray-300 sm:p-8">
          <p>
            When you contact us through the form on this site, we collect the details you submit
            (name, email, company and message) and use them only to respond to your inquiry.
          </p>
          <p>
            Form submissions are processed by Formspree. We do not sell your information. To
            request deletion of your data, email {site.email}.
          </p>
          <p className="text-sm text-gray-500">
            Placeholder text. Replace with your full privacy policy before launch.
          </p>
        </div>
      </section>
    </>
  );
}
