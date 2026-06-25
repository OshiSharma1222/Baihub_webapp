"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site.config";
import { buildEnquiryWhatsAppUrl } from "@/lib/whatsapp";

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildEnquiryWhatsAppUrl({ name, role, city, hours });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-foreground">
          Your name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-brand-foreground">
          Helper type
        </label>
        <select
          id="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
        >
          <option value="">Select a role</option>
          {siteConfig.services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-brand-foreground">
          City
        </label>
        <input
          id="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          placeholder="e.g. Gurgaon"
        />
      </div>
      <div>
        <label htmlFor="hours" className="mb-1.5 block text-sm font-medium text-brand-foreground">
          Hours needed
        </label>
        <input
          id="hours"
          required
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          placeholder="e.g. 4 hours daily, part-time"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-primary font-semibold text-black hover:bg-brand-primary/90"
      >
        Send enquiry on WhatsApp
      </Button>
    </form>
  );
}
