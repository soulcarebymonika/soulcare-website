"use client";

import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_day: "",
    preference: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // ── Web3Forms ───────────────────────────────────────────────────────────
      // Submissions land in Monika's email inbox.
      // Replace YOUR_WEB3FORMS_ACCESS_KEY with the key from:
      //   https://web3forms.com → sign up free → copy your Access Key
      // ────────────────────────────────────────────────────────────────────
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1077b809-3b76-499c-872b-1168bb4c8aa5",
          subject: `New Session Inquiry from ${formData.name}`,
          from_name: "Soulcare Website",
          ...formData,
        }),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.message || "Failed to submit booking inquiry.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Booking submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-white text-center md:text-left py-8 md:py-16">
        <h2 className="font-heading text-3xl sm:text-4xl mb-4 leading-tight">
          Thank you!
        </h2>
        <p className="text-white/80 font-serif italic mb-6">
          Your inquiry has been received.
        </p>
        <div className="w-12 h-px bg-white/30 mb-8 mx-auto md:mx-0"></div>
        <p className="text-base sm:text-lg mb-10 leading-relaxed text-white/90">
          Monika will review your message and reach out to you at{" "}
          <span className="font-semibold text-white">{formData.email}</span> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              preferred_day: "",
              preference: "",
              message: "",
            });
          }}
          className="bg-[#FAF9F6] text-[#7180A6] hover:bg-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-12 py-4 transition-colors rounded-sm cursor-pointer shadow-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* NAME */}
      <div className="flex flex-col sm:flex-row sm:items-center border-b border-white/30 pb-2">
        <label
          htmlFor="name"
          className="w-48 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shrink-0 mb-2 sm:mb-0"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="First/Last Name"
          className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white placeholder-white/50 focus:ring-0 p-0"
          required
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col sm:flex-row sm:items-center border-b border-white/30 pb-2">
        <label
          htmlFor="email"
          className="w-48 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shrink-0 mb-2 sm:mb-0"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white placeholder-white/50 focus:ring-0 p-0"
          required
        />
      </div>

      {/* PHONE */}
      <div className="flex flex-col sm:flex-row sm:items-center border-b border-white/30 pb-2">
        <label
          htmlFor="phone"
          className="w-48 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shrink-0 mb-2 sm:mb-0"
        >
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white placeholder-white/50 focus:ring-0 p-0"
        />
      </div>

      {/* PREFERENCE */}
      <div className="flex flex-col sm:flex-row sm:items-center border-b border-white/30 pb-2 relative">
        <label className="w-48 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shrink-0 mb-2 sm:mb-0 leading-tight">
          Appointment Preference:
        </label>
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <select
            id="preferred_day"
            name="preferred_day"
            value={formData.preferred_day}
            onChange={handleChange}
            className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white focus:ring-0 p-0 cursor-pointer [&>option]:text-black"
          >
            <option value="" disabled className="text-gray-500">
              Select Day
            </option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>

          <select
            id="preference"
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white focus:ring-0 p-0 cursor-pointer [&>option]:text-black"
          >
            <option value="" disabled className="text-gray-500">
              Select Time
            </option>
            <option value="10:00 AM">10:00 AM - 10:45 AM</option>
            <option value="10:45 AM">10:45 AM - 11:30 AM</option>
            <option value="11:30 AM">11:30 AM - 12:15 PM</option>
            <option value="12:15 PM">12:15 PM - 1:00 PM</option>
            <option value="2:00 PM">2:00 PM - 2:45 PM</option>
            <option value="2:45 PM">2:45 PM - 3:30 PM</option>
            <option value="3:30 PM">3:30 PM - 4:15 PM</option>
            <option value="4:15 PM">4:15 PM - 5:00 PM</option>
            <option value="5:00 PM">5:00 PM - 5:45 PM</option>
            <option value="5:45 PM">5:45 PM - 6:30 PM</option>
            <option value="6:30 PM">6:30 PM - 7:15 PM</option>
            <option value="7:15 PM">7:15 PM - 8:00 PM</option>
            <option value="8:00 PM">8:00 PM - 8:45 PM</option>
            <option value="8:45 PM">8:45 PM - 9:30 PM</option>
            <option value="9:30 PM">9:30 PM - 10:15 PM</option>
            <option value="10:15 PM">10:15 PM - 11:00 PM</option>
            <option value="11:00 PM">11:00 PM - 11:45 PM</option>
            <option value="flexible">Flexible / Other</option>
          </select>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col sm:flex-row sm:items-start border-b border-white/30 pb-2">
        <label
          htmlFor="message"
          className="w-48 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shrink-0 mb-2 sm:mb-0 mt-2"
        >
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what's bringing you here or anything else you'd like me to know."
          className="flex-1 bg-transparent border-none outline-none text-sm md:text-base text-white placeholder-white/50 focus:ring-0 p-0 resize-none mt-1 sm:mt-0"
          required
        ></textarea>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="text-red-300 text-xs font-serif italic mt-4 bg-red-950/20 border border-red-500/20 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <div className="pt-8">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FAF9F6] text-[#7180A6] hover:bg-white disabled:opacity-50 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-12 py-4 transition-colors rounded-sm cursor-pointer shadow-sm hover:shadow"
        >
          {loading ? "Sending..." : "Let's Connect"}
        </button>
      </div>
    </form>
  );
}
