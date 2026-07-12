'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './landing.module.css';

type FormData = {
  firstName: string;
  email: string;
  company: string;
  jobTitle: string;
};

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setError('Something went wrong. Please try again.');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { num: '90.4%', label: 'average brand overlap across logged-in and anonymous sessions' },
    { num: '1,530+', label: 'structured prompts run across ChatGPT, Gemini, and Perplexity' },
    { num: '6', label: 'industries: Insurance, Healthcare, E-Commerce, Travel, SaaS & B2B' },
  ];

  const bullets = [
    { title: 'Know exactly what drives AI brand visibility', body: 'Not opinion — controlled data from 1,237 paired observations across three AI platforms and six industries.' },
    { title: 'See which sectors are most at risk', body: 'Healthcare Overlap Coefficients dropped to 77.9% on Gemini. Find out what that means for your category.' },
    { title: 'Understand the three structural factors that matter', body: 'Citation depth, content surface area, and third-party validation — and what you can actually do about each.' },
    { title: 'Benchmark your brand against competitors', body: 'Find out whether you are already in the room when a buyer asks an AI for a recommendation — or not.' },
  ];

  const testimonials = [
    { name: 'Lomit Patel', role: 'Chief Marketing & Growth Officer', company: 'Tynker', quote: "SEO traffic increased over 50% in the first four months, and it's continued to increase month over month beyond that." },
    { name: 'Kaushik Patel', role: 'VP, Demand Generation', company: 'ThoughtSpot', quote: "We've been working with AdLift for 3 years. We've grown 165% with new unique users growing upwards of 250%." },
    { name: 'Tommy Griffith', role: 'SEO Manager', company: 'PayPal', quote: "Super responsive, got a lot of great work done, and incredibly helpful. We increased traffic substantially." },
  ];

  const sectors = [
    { name: 'Insurance', icon: '🛡️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'E-Commerce', icon: '🛒' },
    { name: 'Travel & Hospitality', icon: '✈️' },
    { name: 'SaaS & B2B', icon: '💻' },
    { name: 'More inside', icon: '📄' },
  ];

  return (
    <>
      {/* NAV */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.logoText}>
            Ad<span className={s.logoDot}>Lift</span>
          </a>
          <span className={s.navBadge}>New Research · 2026</span>
        </div>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <div className={s.eyebrow}>
              <span className={s.eyebrowDot} />
              LLM Brand Consistency Research — 2026
            </div>
            <h1 className={s.h1}>
              AI is already recommending your competitors.<br />
              <em className={s.h1Em}>Here&apos;s why.</em>
            </h1>
            <p className={s.subhead}>
              We ran 1,530+ structured prompts across ChatGPT, Gemini, and Perplexity to find out what really drives AI brand recommendations. The answer isn&apos;t personalisation — it&apos;s structural authority. Most brands aren&apos;t building it.
            </p>
            <div className={s.proofStrip}>
              {['1,530+ prompts', '6 industries', '3 AI platforms', '1,237 paired observations'].map(t => (
                <span key={t} className={s.proofItem}>
                  <span className={s.check}><CheckIcon /></span>
                  {t}
                </span>
              ))}
            </div>
            <ul className={s.bullets}>
              {bullets.map(b => (
                <li key={b.title} className={s.bullet}>
                  <span className={s.bulletIcon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2">
                      <polyline points="3,8 6,11 13,4" />
                    </svg>
                  </span>
                  <div>
                    <div className={s.bulletTitle}>{b.title}</div>
                    <div className={s.bulletBody}>{b.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* FORM */}
          <div>
            <div className={s.formCard}>
              {submitted ? (
                <div className={s.successState}>
                  <div className={s.successIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                      <polyline points="4,12 9,17 20,6" />
                    </svg>
                  </div>
                  <div className={s.successTitle}>Research on its way</div>
                  <p className={s.successBody}>Check your inbox — the PDF will arrive within a few minutes. If you don&apos;t see it, check your spam folder.</p>
                </div>
              ) : (
                <>
                  <div className={s.formTitle}>Download the research — free</div>
                  <div className={s.formSub}>Complete the form and we&apos;ll send the PDF straight to your inbox.</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {[
                      { id: 'firstName' as const, label: 'First name', placeholder: 'Sarah', type: 'text' },
                      { id: 'email' as const, label: 'Work email', placeholder: 'sarah@company.com', type: 'email' },
                      { id: 'company' as const, label: 'Company', placeholder: 'Acme Inc.', type: 'text' },
                      { id: 'jobTitle' as const, label: 'Job title', placeholder: 'VP of Marketing', type: 'text' },
                    ].map(f => (
                      <div key={f.id} className={s.field}>
                        <label className={s.fieldLabel}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className={`${s.fieldInput} ${errors[f.id] ? s.fieldInputErr : ''}`}
                          {...register(f.id, {
                            required: 'Required',
                            ...(f.id === 'email' ? { pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' } } : {}),
                          })}
                        />
                        {errors[f.id] && <div className={s.fieldError}>{errors[f.id]?.message}</div>}
                      </div>
                    ))}
                    <button className={s.submitBtn} type="submit" disabled={loading}>
                      {loading ? <span className={s.spinner} /> : <>Get the research <ArrowRight /></>}
                    </button>
                    {error && <div className={s.errorMsg}>{error}</div>}
                  </form>
                  <p className={s.formFine}>By submitting, you agree to AdLift&apos;s privacy policy. Unsubscribe anytime.</p>
                </>
              )}
            </div>
            <div className={s.formCover}>
              <div className={s.coverThumb}>
                <span className={s.coverThumbLabel}>AdLift</span>
                <div className={s.coverThumbLine} />
                <div className={s.coverThumbLine} />
                <div className={s.coverThumbLine} />
              </div>
              <div>
                <div className={s.coverLabel}>LLM Brand Consistency Research</div>
                <div className={s.coverMeta}>AdLift · 2026 · 6 Industries · 3 AI Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={s.statsSection}>
        <div className={s.statsInner}>
          <div className={s.statsGrid}>
            {stats.map(st => (
              <div key={st.num} className={s.statCard}>
                <span className={s.statNum}>{st.num}</span>
                <span className={s.statLabel}>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className={s.insightSection}>
        <div className={s.insightInner}>
          <div className={s.sectionTag}>The core finding</div>
          <h2 className={s.sectionTitle}>Login state doesn&apos;t matter.<br />Training-time authority does.</h2>
          <p className={s.sectionBody}>
            Across 1,237 paired observations — logged-in vs. anonymous — the average Overlap Coefficient was 90.4%. In plain English: nine out of ten brands recommended to a logged-in user were also recommended to an anonymous one. What actually drives whether your brand is mentioned is what was embedded into the model at training time — citation depth, content surface area, and third-party validation.
          </p>
          <div className={s.quoteBlock}>
            <p className={s.quoteText}>
              &ldquo;LLMs are not search engines. They do not look your brand up in real time and check its latest reviews or current ad spend. They were trained, at a fixed point in time, on enormous quantities of web content. If you want to change what brands an AI recommends, you need to change what the model has learned — not try to optimise for the session.&rdquo;
            </p>
            <div className={s.quoteAttr}>— AdLift LLM Brand Consistency Research, 2026</div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className={s.sectorsSection}>
        <div className={s.sectorsInner}>
          <div className={s.sectionTag}>Research coverage</div>
          <h2 className={s.sectionTitle}>Six industries. One consistent pattern.</h2>
          <p className={s.sectionBody}>The research covers industries where AI-driven recommendation risk is highest — from high-consideration B2B purchases to price-sensitive consumer categories.</p>
          <div className={s.sectorsGrid}>
            {sectors.map(sec => (
              <div key={sec.name} className={s.sectorCard}>
                <span className={s.sectorIcon}>{sec.icon}</span>
                <span className={s.sectorName}>{sec.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={s.testimonials}>
        <div className={s.testimonialsInner}>
          <div className={s.sectionTag}>Client speak</div>
          <h2 className={s.sectionTitle}>Trusted by marketing leaders at PayPal, ThoughtSpot, and beyond.</h2>
          <div className={s.testiGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={s.testiCard}>
                <p className={s.testiQuote}>{t.quote}</p>
                <div className={s.testiName}>{t.name}</div>
                <div className={s.testiRole}>{t.role}</div>
                <div className={s.testiCo}>{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={s.bottomCta}>
        <div className={s.bottomCtaInner}>
          <h2 className={s.bottomCtaH2}>Your brand is either in the room or it isn&apos;t.</h2>
          <p className={s.bottomCtaP}>Find out what the data says — and what structural changes actually move the needle on AI brand visibility.</p>
          <button className={s.ctaBtnLarge} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Download the free research <ArrowRight />
          </button>
          <p className={s.bottomCtaFine}>Free download · No credit card required · PDF delivered to your inbox</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <span className={s.footerLogo}>Ad<span className={s.footerLogoDot}>Lift</span></span>
          <div className={s.footerLinks}>
            <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.footerLink}>adlift.com</a>
            <a href="https://tesseract.adlift.com" target="_blank" rel="noreferrer" className={s.footerLink}>Tesseract</a>
            <a href="https://www.adlift.com/privacy-policy" target="_blank" rel="noreferrer" className={s.footerLink}>Privacy policy</a>
          </div>
          <span className={s.footerCopy}>© 2026 AdLift. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
