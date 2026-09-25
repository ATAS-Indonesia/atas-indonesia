"use client";

import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import { FAQ_DATA } from "./constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const formatNumber = (index: number) => String(index + 1).padStart(2, "0");

export const Faq = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedFaq = selectedIndex === null ? null : FAQ_DATA[selectedIndex];

  return (
    <div>
      <div className="max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Daftar pertanyaan yang sering ditanyakan kepada mimin ATAS Indonesia
        </p>
      </div>
      <ul className="mt-10 pt-10 border-t border-gray-200 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FAQ_DATA.map(({ question, answer }, index) => (
          <li key={index} className="h-full">
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:border-atas-primary-300 hover:shadow-xl hover:shadow-atas-primary-100",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-atas-primary focus-visible:ring-offset-2"
              )}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.15] bg-gradient-to-r from-atas-primary-500 to-atas-primary-800 transition-transform duration-300 group-hover:scale-x-100"
              />
              <MessageCircleQuestion
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 text-atas-primary-50 transition-colors duration-300 group-hover:text-atas-primary-100"
              />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-atas-primary-50 text-atas-primary-700 transition-colors duration-300 group-hover:bg-atas-primary group-hover:text-white">
                  <MessageCircleQuestion aria-hidden className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm font-semibold text-gray-300 transition-colors group-hover:text-atas-primary-400">
                  {formatNumber(index)}
                </span>
              </div>

              <h3 className="relative mt-5 line-clamp-3 text-lg font-semibold leading-snug text-gray-900">
                {question}
              </h3>
              <div
                inert
                className="relative mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500"
              >
                {answer}
              </div>

              <span className="relative mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-atas-primary-700">
                Baca selengkapnya
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Dialog
        open={selectedFaq !== null}
        onOpenChange={open => !open && setSelectedIndex(null)}
      >
        <DialogContent className="w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-2xl p-0">
          {selectedFaq && selectedIndex !== null && (
            <>
              <div className="h-1.5 w-full bg-gradient-to-r from-atas-primary-500 to-atas-primary-800" />
              <DialogHeader className="space-y-4 px-6 pb-6 pt-4 text-left sm:px-8 sm:pb-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-atas-primary text-white">
                    <MessageCircleQuestion aria-hidden className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-atas-primary-400">
                    FAQ #{formatNumber(selectedIndex)}
                  </span>
                </div>
                <DialogTitle className="pr-6 text-xl leading-snug text-gray-900 sm:text-2xl">
                  {selectedFaq.question}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  {selectedFaq.answer}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
