'use client';

import { Send } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen px-6 md:px-20 py-20 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                We'd love to hear from you. Please fill out the form below or email us at castingagencyjaipur@gmail.com.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 outline-none transition-all"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 outline-none transition-all"
                        placeholder="hello@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 outline-none transition-all"
                        placeholder="+91 98765 43210"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 outline-none transition-all"
                        placeholder="Tell us about your project..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                    Send Message <Send size={20} />
                </button>
            </form>
        </main>
    );
}
