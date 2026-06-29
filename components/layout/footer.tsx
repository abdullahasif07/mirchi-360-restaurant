import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/brand/social-icons";
import { NAV_LINKS, SITE } from "@/constants/site";
import { BRANCHES } from "@/data/branches";
import { mapsHref, telHref } from "@/lib/utils";

const SOCIALS = [
  { icon: FacebookIcon, href: SITE.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: SITE.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bg-soft">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo showTagline />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            {SITE.description}
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="font-heading text-lg font-semibold text-ink">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Branches */}
        <nav aria-label="Branches">
          <h3 className="font-heading text-lg font-semibold text-ink">
            Branches
          </h3>
          <ul className="mt-5 space-y-3">
            {BRANCHES.slice(0, 6).map((b) => (
              <li key={b.id}>
                <a
                  href={mapsHref(b.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-secondary"
                >
                  <MapPin className="size-3.5 shrink-0" />
                  {b.city} — {b.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-ink">
            Contact
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={telHref(SITE.primaryPhone)}
                className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-secondary"
              >
                <Phone className="size-4 shrink-0 text-secondary" />
                {SITE.primaryPhone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-secondary"
              >
                <Mail className="size-4 shrink-0 text-secondary" />
                {SITE.email}
              </a>
            </li>
            <li className="text-sm text-ink-muted">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-center text-xs text-ink-muted sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>
            Crafted with fire &amp; flavour · Premium BBQ &amp; Fast Food
          </p>
        </div>
      </div>
    </footer>
  );
}
