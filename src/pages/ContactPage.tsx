import { Instagram, Twitter, Mail } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Say Hello"
        title="Contact"
        subtitle="Whether it's a commercial project, a collaboration, or simply a conversation about light — I'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Info panel */}
          <div ref={infoRef} className="scroll-reveal md:col-span-2">
            <div className="mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-4">
                Based In
              </p>
              <p className="font-display text-xl text-[var(--text-primary)]">
                Rome, Italy
              </p>
              <p className="font-sans text-sm text-[var(--text-muted)] mt-1">
                Available worldwide
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-4">
                Response Time
              </p>
              <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                I respond to all inquiries within 48 hours. For time-sensitive projects,
                mention it in your message.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-sans mb-4">
                Social
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Mail, href: 'mailto:luca@example.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="scroll-reveal md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
