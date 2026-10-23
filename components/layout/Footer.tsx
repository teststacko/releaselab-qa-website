import Link from "next/link";
import { Linkedin, Mail, MessageSquare } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { site, footerColumns } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="wrap mt-20">
      <div className="rounded-t-3xl border border-white/10 bg-black px-6 py-10 sm:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-gray-400">{site.tagline}</p>
            <p className="mt-4 max-w-sm leading-7 text-gray-300">
              A quality engineering partner for software teams that need to ship reliably, trust
              their AI features and automate repetitive work.
            </p>
            <div className="mt-6 flex gap-5 text-gray-300">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-blue-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="transition hover:text-blue-400"
              >
                <Mail size={24} />
              </a>
              <Link
                href="/consultation"
                aria-label="Start a conversation"
                className="text-blue-400 transition hover:text-blue-300"
              >
                <MessageSquare size={24} />
              </Link>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-lg font-semibold text-white">{col.title}</h3>
              <div className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-gray-300 transition hover:text-blue-400"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 lg:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
