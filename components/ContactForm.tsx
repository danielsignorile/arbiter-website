'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-arbiter-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Copy */}
          <div className="lg:pt-4">
            <p className="text-xs font-bold text-arbiter-green tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arbiter-dark tracking-tight leading-tight mb-5">
              Ready to see Arbiter in action?
            </h2>
            <p className="text-lg text-arbiter-muted leading-relaxed mb-8">
              Book a 30-minute demo with our completions team. We will walk you through how
              Arbiter performs on your specific project type and answer any questions you have.
            </p>
            <ul className="space-y-4">
              {[
                'Up and running in minutes, not months',
                'No IT department required',
                'Works offline in remote locations',
                'Proven across 300+ capital projects',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-arbiter-muted">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-arbiter-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-arbiter-green" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-arbiter-border">
              <p className="text-xs text-arbiter-muted mb-1 font-medium">Prefer to reach us directly?</p>
              <a href="tel:+15062371818" className="text-sm font-semibold text-arbiter-dark hover:text-arbiter-green transition-colors">
                +1 506-237-1818
              </a>
              <span className="mx-2 text-arbiter-border">·</span>
              <a href="mailto:info@contendo.ca" className="text-sm font-semibold text-arbiter-dark hover:text-arbiter-green transition-colors">
                info@contendo.ca
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-arbiter-border rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-arbiter-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-arbiter-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-arbiter-dark mb-2">Thanks, we will be in touch.</h3>
                <p className="text-sm text-arbiter-muted">Someone from our team will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                      First Name <span className="text-arbiter-green">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                      Last Name <span className="text-arbiter-green">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                    Email Address <span className="text-arbiter-green">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                    Company Name <span className="text-arbiter-green">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Energy Ltd."
                    className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                      Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="Project Manager"
                      className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-arbiter-border bg-arbiter-gray-bg text-sm text-arbiter-dark placeholder:text-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/30 focus:border-arbiter-green transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-arbiter-green text-white font-semibold py-3.5 rounded-xl hover:bg-arbiter-green-dark transition-all duration-200 shadow-md shadow-arbiter-green/20 hover:shadow-arbiter-green/30 mt-2"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-xs text-arbiter-muted/60 pt-1">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
