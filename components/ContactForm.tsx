"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { MessageSquare, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const subjects = [
  "General Inquiry",
  "Vendor Support",
  "Technical Support",
  "Partnership",
  "Media Inquiry",
  "Bug Report",
  "Other"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contact_leads"), {
        ...formData,
        timestamp: serverTimestamp(),
        status: "new"
      });

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy hover:bg-navy/90 text-white py-4 text-lg font-medium"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}