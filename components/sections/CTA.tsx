import { CalendarDays, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import { site, primaryCta } from "@/lib/site";

export default function CTA() {
  return (
    <section className="wrap relative z-10 mt-20">
      <div className="band rounded-3xl border border-white/10 px-5 py-10 text-center sm:px-8 lg:px-12">
        <h2 className="h2">Tell us what&apos;s slowing your releases down.</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Start with a conversation. No pitch, just an honest look at the problem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Button href={primaryCta.href}>
            <MessageSquare size={18} />
            <span>{primaryCta.label}</span>
          </Button>
          <Button href={site.calendly} external variant="secondary">
            <CalendarDays size={18} />
            <span>Book a 30-min call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}