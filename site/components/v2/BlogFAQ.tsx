"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  faqs: FAQItem[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="mt-12 rounded-xl border-2 border-slate-200 bg-white p-8">
      <h2 className="font-serif text-3xl font-bold text-navy-950">
        Frequently Asked Questions
      </h2>
      <p className="mt-2 text-slate-600">
        Quick answers to common questions about this topic
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg border border-slate-200 transition-all hover:border-amber-600"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <h3 className="font-serif text-lg font-bold text-navy-950 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-amber-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-5 pt-4">
                  <p className="leading-relaxed text-slate-700">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
