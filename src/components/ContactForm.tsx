"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    const serviceID = "service_gvztnqj";
    const templateID = "template_3x7ly54"; // main template
    const autoReplyID = "template_z81s80g"; // auto-reply template
    const publicKey = "xL0dt0qAqyVgNC2XT";

    // Send main email
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        // ✅ Only call auto-reply if form.current still exists
        if (form.current) {
          emailjs.sendForm(serviceID, autoReplyID, form.current, publicKey);
        }

        setStatus("success");
        setLoading(false);
        form.current?.reset();

        // Auto hide after 5s
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        setStatus("error");
        setLoading(false);

        // Auto hide after 5s
        setTimeout(() => setStatus(null), 5000);
      }
    );
  };

  return (
    <div className="relative">
      {/* Animated Status Banner */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`mb-6 p-4 rounded-lg text-center font-medium ${
              status === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {status === "success"
              ? "✅ Message sent successfully! We’ll be in touch soon."
              : "❌ Failed to send message. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-xl mx-auto space-y-6 text-left"
      >
        <h1 className="bg-gray-100 shadow-lg font-bold rounded-3xl p-5 max-w-xl mx-auto space-y-6 text-center"> Have a project in mind? Let’s build something amazing together.</h1>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        {/* Hidden field ensures mail always goes to your inbox */}
        <input
          type="hidden"
          name="to_email"
          value="nextrivetechnologies@gmail.com"
        />

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed text-white"
              : "bg-black hover:bg-gray-800 text-white"
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
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
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
