"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        service: "",
        message: "",
        website: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch(
                "/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    success: true,
                    message:
                        "Your message has been sent successfully.",
                });

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    city: "",
                    service: "",
                    message: "",
                    website: "",
                });
            } else {
                setStatus({
                    success: false,
                    message:
                        data.error ||
                        "Failed to send message.",
                });
            }
        } catch {
            setStatus({
                success: false,
                message:
                    "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2
                id="form-heading"
                className="font-display text-xl font-bold text-[var(--navy)] mb-6"
            >
                Send Us a Message
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-5"
            >
                <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        Full Name *
                    </label>

                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        Mobile Number *
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        Email Address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="city"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        City
                    </label>

                    <input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Kolkata"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm"
                    />
                </div>

                <div className="md:col-span-2">
                    <label
                        htmlFor="service"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        Service Required *
                    </label>

                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm"
                    >
                        <option value="">Select a service...</option>

                        <option value="company-registration">
                            Company Registration
                        </option>

                        <option value="gst-services">
                            GST Services
                        </option>

                        <option value="gst-return-filing">
                            GST Return Filing
                        </option>

                        <option value="income-tax-return">
                            Income Tax Return
                        </option>

                        <option value="trademark-registration">
                            Trademark Registration
                        </option>

                        <option value="msme-udyam">
                            MSME / Udyam Registration
                        </option>

                        <option value="roc-compliance">
                            ROC Compliance
                        </option>

                        <option value="tds-return-filing">
                            TDS Return Filing
                        </option>

                        <option value="accounting-services">
                            Accounting Services
                        </option>

                        <option value="audit-assurance">
                            Audit & Assurance
                        </option>

                        <option value="business-consultation">
                            Business Consultation
                        </option>

                        <option value="payroll-services">
                            Payroll Services
                        </option>

                        <option value="fssai-food-license">
                            FSSAI Food License
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--navy)] mb-1.5"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm resize-none"
                    />
                </div>

                {status && (
                    <div className="md:col-span-2">
                        <div
                            className={`p-3 rounded-lg text-sm ${status.success
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                                }`}
                        >
                            {status.message}
                        </div>
                    </div>
                )}

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--navy)] text-white rounded-xl font-semibold disabled:opacity-60"
                    >
                        <Send size={16} />

                        {loading
                            ? "Sending..."
                            : "Submit Request"}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-3">
                        We respond within 2 business hours ·
                        Free 30-min consultation · No spam
                    </p>
                </div>
            </form>
        </div>
    );
}