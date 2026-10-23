"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

const inquiryTypes = [
  "Project inquiry",
  "Release Reliability Assessment",
  "AI Feature Reliability Assessment",
  "Automation Opportunity Assessment",
  "Partnership",
  "Something else",
];

export default function ContactForm({ defaultType = "Project inquiry" }: { defaultType?: string }) {
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 8000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = e.currentTarget;

    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  const initial = inquiryTypes.includes(defaultType) ? defaultType : "Project inquiry";

  return (
    <section id="contact-form" className="wrap mt-20 scroll-mt-28">
      <div className="card p-6 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Tell us about your problem</h2>
          <p className="lead mt-4">
            A few lines is enough. We will reply with questions or next steps, not a sales deck.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input type="text" name="name" placeholder="Your name" required className="input" />
            <input type="email" name="email" placeholder="Email address" required className="input" />
            <input type="text" name="company" placeholder="Company (optional)" className="input" />
            <select name="inquiry_type" defaultValue={initial} className="input">
              {inquiryTypes.map((t) => (
                <option key={t} value={t} className="bg-black">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <textarea
            rows={6}
            name="message"
            placeholder="What is going wrong, or what would you like to improve?"
            required
            className="input"
          />

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div aria-live="polite" className="min-h-6 text-sm">
              {status === "success" && (
                <p className="font-medium text-green-400">
                  ✓ Message sent. Thank you, we will get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="font-medium text-red-400">
                  Something went wrong. Please try again or email {site.email}.
                </p>
              )}
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
