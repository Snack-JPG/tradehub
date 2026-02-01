"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    tradeType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with actual Web3Forms key
          subject: `New TradeHub Enquiry from ${formData.businessName}`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          businessName: "",
          contactName: "",
          phone: "",
          tradeType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
          Business Name *
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          value={formData.businessName}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
        />
      </div>

      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
          Your Name *
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          value={formData.contactName}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
        />
      </div>

      <div>
        <label htmlFor="tradeType" className="block text-sm font-medium text-gray-700">
          Trade Type *
        </label>
        <select
          id="tradeType"
          name="tradeType"
          required
          value={formData.tradeType}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
        >
          <option value="">Select your trade...</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Roofer">Roofer</option>
          <option value="Builder">Builder</option>
          <option value="Gas Engineer">Gas Engineer</option>
          <option value="Landscaper">Landscaper</option>
          <option value="Plasterer">Plasterer</option>
          <option value="Painter">Painter & Decorator</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Locksmith">Locksmith</option>
          <option value="Handyman">Handyman</option>
          <option value="Tiler">Tiler</option>
          <option value="Fencing Contractor">Fencing Contractor</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
          placeholder="Tell us a bit about your business and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-trust px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-center text-sm text-green-800">
          Thanks! We'll be in touch within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-800">
          Something went wrong. Please try calling us instead: 07718 132878
        </div>
      )}
    </form>
  );
}
