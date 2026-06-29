"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";
import { whatsappHref } from "@/lib/utils";

/**
 * Floating WhatsApp click-to-chat button (desktop). On mobile the sticky
 * contact bar handles ordering, so this is hidden below `lg`.
 */
export function FloatingOrderCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappHref(SITE.whatsapp, "Hi Mirchi 360, I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order via WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-8 right-8 z-50 hidden size-14 place-items-center rounded-full bg-[#25D366] text-black shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] lg:grid"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
          <MessageCircle className="relative size-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
