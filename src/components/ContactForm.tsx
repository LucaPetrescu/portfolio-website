import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-transparent border-b py-3 text-[var(--text-primary)] font-sans text-sm placeholder-[var(--text-muted)] outline-none transition-colors duration-300 focus:border-[var(--gold)] ${
      errors[field] ? 'border-red-500/60' : 'border-[var(--border)]'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle size={40} className="text-[var(--gold)]" />
        <h3 className="font-display text-3xl text-[var(--text-primary)]">Message Sent</h3>
        <p className="font-sans text-[var(--text-secondary)] text-sm max-w-xs">
          Thank you for reaching out. I'll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 max-w-lg mx-auto">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass('name')}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass('email')}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1 font-sans">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1 font-sans">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 border border-[var(--gold)] text-[var(--gold)] py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-[var(--gold)] hover:text-black transition-all duration-500 disabled:opacity-50"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
