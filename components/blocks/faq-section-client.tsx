"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export default function FAQSectionClient({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-black/10 border border-black/10 rounded-xl overflow-hidden bg-white">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const contentId = `faq-content-${idx}`;
        const buttonId = `faq-trigger-${idx}`;
        return (
          <li key={idx} className="">
            <button
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-6 hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
            >
              <span className="text-[15px] font-medium tracking-[-0.005em] pr-6">
                {item.q}
              </span>
              <ChevronDown
                className={`mt-0.5 size-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-[14px] text-black/70 leading-[1.7] border-t border-black/10">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
