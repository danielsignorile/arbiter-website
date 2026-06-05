'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ENDPOINT = '/api/hubspot';

export default function DemoModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    jobtitle: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset form state after modal fully closes
  useEffect(() => {
    if (!isOpen && submitted) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setForm({ firstname: '', lastname: '', email: '', company: '', jobtitle: '', phone: '', message: '' });
        setError('');
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const fields = [
      { name: 'firstname', value: form.firstname },
      { name: 'lastname', value: form.lastname },
      { name: 'email', value: form.email },
      { name: 'company', value: form.company },
      { name: 'jobtitle', value: form.jobtitle },
      { name: 'phone', value: form.phone },
      { name: 'message', value: form.message },
    ];

    const payload = {
      fields,
      context: {
        pageUri: 'https://www.arbiter-completions.com',
        pageName: 'Arbiter Website',
      },
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await res.text();
      if (!res.ok) throw new Error(`Status ${res.status}: ${body}`);
      setSubmitted(true);
    } catch (err) {
      console.error('[HubSpot] Submission error:', err);
      setError('Something went wrong. Please try again or email us at info@contendo.ca.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-arbiter-border">
          <div>
            <h2 className="text-xl font-bold text-arbiter-dark">Book Your Demo</h2>
            <p className="text-sm text-arbiter-muted mt-0.5">
              We'll be in touch within one business day.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1.5 rounded-lg text-arbiter-muted hover:text-arbiter-dark hover:bg-arbiter-gray-bg transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-arbiter-green/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-arbiter-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-arbiter-dark mb-2">You&apos;re all set!</h3>
            <p className="text-arbiter-muted">
              Thanks. We&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  required
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  required
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Energy Ltd."
                className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobtitle"
                required
                value={form.jobtitle}
                onChange={handleChange}
                placeholder="Project Manager"
                className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arbiter-dark mb-1.5">
                Message / Project Description{' '}
                <span className="text-arbiter-muted font-normal">(optional)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your project or what you'd like to see..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-arbiter-border text-sm text-arbiter-dark placeholder-arbiter-muted/50 focus:outline-none focus:ring-2 focus:ring-arbiter-green/25 focus:border-arbiter-green transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 px-3.5 py-2.5 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-arbiter-green text-white font-semibold py-3 rounded-full hover:bg-arbiter-green-dark transition-all duration-200 shadow-lg shadow-arbiter-green/25 hover:shadow-arbiter-green/35 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending…' : 'Book My Demo'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
