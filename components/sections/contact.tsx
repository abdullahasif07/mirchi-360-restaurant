"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { EmberParticles } from "@/components/effects/ember-particles";
import { IMG } from "@/data/images";
import { SITE } from "@/constants/site";
import { telHref, whatsappHref } from "@/lib/utils";

export function Contact() {
  const details = [
    { icon: Phone, label: "Call us", value: SITE.primaryPhone, href: telHref(SITE.primaryPhone) },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE.whatsapp,
      href: whatsappHref(SITE.whatsapp, "Hi Mirchi 360, I'd like to place an order."),
    },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: "Hours", value: SITE.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMG.nightView}
          alt="Mirchi 360 restaurant at night"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/90" />
      </div>
      <EmberParticles count={10} />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
        {/* CTA copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            <span className="h-px w-8 bg-secondary/60" /> Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.1] text-ink md:text-6xl">
            Call Now <span className="text-fire">to Order</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-muted">
            Call us for takeaway &amp; delivery. Our team is ready to serve up
            fresh, flame-grilled flavour — dine-in, takeaway or delivered hot to
            your door.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic>
              <Button asChild size="lg">
                <a href={telHref(SITE.primaryPhone)}>
                  <Phone /> Call Now to Order
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={whatsappHref(
                    SITE.whatsapp,
                    "Hi Mirchi 360, I'd like to place an order.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> WhatsApp Us
                </a>
              </Button>
            </Magnetic>
          </div>
        </Reveal>

        {/* Details card */}
        <Reveal direction="left">
          <div className="glass rounded-[var(--radius-xl2)] p-7 sm:p-9">
            <h3 className="font-heading text-2xl font-semibold text-ink">
              Reach Mirchi 360°
            </h3>
            <ul className="mt-6 space-y-4">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ink-muted">
                        {d.label}
                      </p>
                      <p className="font-medium text-ink">{d.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="block rounded-2xl p-1 transition-colors hover:bg-white/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-1">{content}</div>
                    )}
                  </li>
                );
              })}
              <li className="flex items-center gap-4 p-1">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-muted">
                    Branches
                  </p>
                  <p className="font-medium text-ink">
                    {SITE.branchesCount}+ across Pakistan —{" "}
                    <a href="#branches" className="text-secondary hover:underline">
                      see all
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
