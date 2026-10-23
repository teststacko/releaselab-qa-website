"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { nav, primaryCta } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`whitespace-nowrap transition hover:text-blue-400 ${
                isActive(item.href) ? "text-blue-400" : "text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={primaryCta.href}>
              <MessageSquare size={18} />
              <span>{primaryCta.label}</span>
            </Button>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/10 bg-black lg:hidden">
          <div className="flex flex-col px-6 py-6 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-white/10 py-4 text-lg hover:text-blue-400 ${
                  isActive(item.href) ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8">
              <Button href={primaryCta.href} className="w-full">
                <MessageSquare size={18} />
                <span>{primaryCta.label}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}