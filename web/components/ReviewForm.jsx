"use client";

import { useState } from "react";
import { Send, Star, CheckCircle, AlertCircle, Lock } from "lucide-react";

const ADMIN_URL = `${process.env.NEXT_PUBLIC_ADMIN_URL}/submit_review.php`;

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      setErrorMsg("Please select a star rating before submitting.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        ...formData,
        name: isAnonymous ? "Anonymous" : formData.name,
      };
      const res = await fetch(ADMIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        throw new Error("Unable to connect to backend server. Please upload submit_review.php to Hostinger admin folder.");
      }

      if (res.ok && data.status === "success") {
        setStatus("success");
        setFormData({ name: "", rating: 0, review: "" });
        setIsAnonymous(false);
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      setErrorMsg(
        err.message === "Failed to fetch"
          ? "Unable to reach server. Please ensure PHP backend files are uploaded to Hostinger."
          : err.message || "Unable to submit review. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-[var(--color-secondary)] min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Header & context ── */}
        <div className="lg:pt-6 flex flex-col justify-center">
          <span className="block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5 text-accent">
            Share Your Experience
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-navy mb-8">
            Leave a Review
          </h2>
          <p className="text-text/70 text-base sm:text-lg leading-relaxed max-w-sm mb-8">
            Your words can inspire someone else to take that first step toward healing.
            All reviews are shared anonymously and approved before publishing.
          </p>

          {/* Google Review Option */}
          <div>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#"}
              target={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ? "_blank" : undefined}
              rel={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL) {
                  e.preventDefault();
                }
              }}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-gray-300 text-xs sm:text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Drop a review on Google</span>
            </a>
          </div>
        </div>

        {/* ── Right: Form card ── */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-8 sm:p-10">
          {status === "success" ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle size={48} className="text-accent" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl text-navy">Thank you!</h3>
              <p className="text-text/70 text-sm leading-relaxed max-w-xs">
                Your review has been received. Once approved, it will appear in
                the testimonials section.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name / Anonymous toggle */}
              <div className="flex flex-col gap-3">

                {/* Toggle row */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy">
                      Your Name / Initials
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {isAnonymous ? "Posting anonymously" : "Posting with name"}
                    </p>
                  </div>

                  {/* Toggle switch */}
                  <button
                    type="button"
                    id="toggle-anonymous"
                    role="switch"
                    aria-checked={isAnonymous}
                    aria-label="Post anonymously"
                    onClick={() => setIsAnonymous((v) => !v)}
                    className={`relative inline-flex items-center h-6 w-11 flex-shrink-0 rounded-full border-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy/40 ${
                      isAnonymous
                        ? "bg-navy border-navy"
                        : "bg-gray-200 border-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${
                        isAnonymous ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>

                {/* Conditional name input */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isAnonymous ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
                  }`}
                >
                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Priya S. or A.M."
                    value={formData.name}
                    onChange={handleChange}
                    required={!isAnonymous}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text bg-[var(--color-secondary)]/40 placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>


              {/* Star Rating */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-navy">
                  Your Rating
                </span>
                <div className="flex gap-1" role="group" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, rating: star }))
                      }
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                    >
                      <Star
                        size={30}
                        strokeWidth={1.5}
                        className={`transition-colors duration-150 ${
                          star <= (hoverRating || formData.rating)
                            ? "fill-accent text-accent"
                            : "fill-transparent text-text-muted"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="review-text"
                  className="text-xs font-bold uppercase tracking-widest text-navy"
                >
                  Your Review
                </label>
                <textarea
                  id="review-text"
                  name="review"
                  rows={5}
                  placeholder="Share how your experience felt, what changed for you, or what you found most helpful…"
                  value={formData.review}
                  onChange={handleChange}
                  required
                  minLength={20}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text bg-[var(--color-secondary)]/40 placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-accent text-xs">
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                id="review-submit-btn"
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md bg-accent text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Review <Send size={13} />
                  </>
                )}
              </button>

              {/* Privacy note */}
              <p className="flex items-center gap-1.5 text-[11px] text-text-muted">
                <Lock size={11} />
                Your review is completely anonymous and will be approved before
                publishing.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
