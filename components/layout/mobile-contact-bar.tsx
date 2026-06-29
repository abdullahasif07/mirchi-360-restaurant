"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/constants/site";
import { telHref, whatsappHref } from "@/lib/utils";

/**
 * Sticky bottom contact bar (mobile only) with Call + WhatsApp, plus a
 * floating "Order Now" pill. Appears after the user scrolls past the hero.
 */
export function MobileContactBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
        >
          <div className="glass-strong grid grid-cols-2 gap-2 border-t border-white/10 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <a
              href={telHref(SITE.primaryPhone)}
              className="flex items-center justify-center gap-2 rounded-full bg-fire-animated py-3 text-sm font-bold text-white"
            >
              <Phone className="size-4" /> Call to Order
            </a>
            <a
              href={whatsappHref(SITE.whatsapp, "Hi Mirchi 360, I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-black"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
