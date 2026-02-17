"use client";

import { MessageCircle } from "lucide-react";


export default function WhatsAppButton() {
  const phoneNumber = "447592507043"; // UK format for WhatsApp
  const message = "Hi Chris, I need help with plumbing/heating. Can you assist?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
