'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './landing.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

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

  const bullets = [
    'Find out which brands AI already recommends in your category — and exactly why yours may not be one of them',
    'Understand the 3 structural factors that drive AI brand visibility: citation depth, content surface area, and third-party validation',
    'Platform-by-platform breakdown across ChatGPT, Gemini, and Perplexity — with sector-level data across Insurance, Healthcare, E-Commerce, Travel, and SaaS',
    'Walk away with a clear picture of what actually moves the needle — and a framework you can act on immediately',
  ];

  const stats = [
    { num: '1,530+', label: 'Structured prompts run' },
    { num: '90.4%', label: 'Average brand overlap, logged-in vs. anonymous' },
    { num: '6', label: 'Industries benchmarked' },
    { num: '3', label: 'AI platforms tested' },
  ];

  return (
    <>
      {/* NAV */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.logoWrap}>
            <span className={s.logoText}>Ad<span className={s.logoOrange}>Li</span>ft</span>
            <span className={s.logoTagline}>Acquire. Amplify. Advance.</span>
          </a>
          <div className={s.navLinks}>
            {['SERVICES','ABOUT US','PRESS','BLOGS','CLIENTS','AWARDS'].map(l => (
              <a key={l} href={`https://www.adlift.com/${l.toLowerCase().replace(' ','-')}/`} target="_blank" rel="noreferrer" className={s.navLink}>{l}</a>
            ))}
            <a href="https://www.adlift.com/contact-us/" target="_blank" rel="noreferrer" className={s.navLink}>CONTACT US</a>
            <a href="https://tesseract.adlift.com" target="_blank" rel="noreferrer" className={s.tesseractBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Tesseract
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          {/* LEFT */}
          <div className={s.heroLeft}>
            <h1 className={s.h1}>
              Your competitors are already showing up in AI search.<br />
              <span className={s.h1Orange}>Do you know if you are?</span>
            </h1>
            <p className={s.subhead}>
              AdLift ran 1,530+ structured prompts across ChatGPT, Gemini, and Perplexity to find out what actually drives AI brand recommendations. The answer isn&apos;t ad spend or session data — it&apos;s structural authority built into the model at training time. Most brands aren&apos;t building it.
            </p>
            <p className={s.subhead}>
              This free research report gives CMOs and marketing leaders a clear, data-backed picture of who is winning in AI search — and what you can actually do about it.
            </p>
            <ul className={s.bullets}>
              {bullets.map((b, i) => (
                <li key={i} className={s.bullet}>
                  <span className={s.bulletCheck}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: FORM */}
          <div className={s.heroRight}>
            <div className={s.coverThumb}>
              <div className={s.coverGradient}>
                <div className={s.coverLogoText}>AdLi<span>ft</span></div>
                <div className={s.coverHeading}>WHO&apos;S WINNING<br />IN AI SEARCH</div>
                <div className={s.coverSub}>LLM Brand Consistency Research · 2026</div>
              </div>
            </div>

            <div className={s.formBox}>
              {submitted ? (
                <div className={s.success}>
                  <div className={s.successCheck}>✓</div>
                  <h3 className={s.successTitle}>Your copy is on its way</h3>
                  <p className={s.successBody}>Check your inbox — the PDF will arrive in a few minutes. Check your spam if you don&apos;t see it.</p>
                </div>
              ) : (
                <>
                  <h2 className={s.formTitle}>Download the paper</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <input type="text" placeholder="FIRST NAME*" className={`${s.input} ${errors.firstName ? s.inputErr : ''}`} {...register('firstName', { required: true })} />
                    <input type="text" placeholder="LAST NAME*" className={`${s.input} ${errors.lastName ? s.inputErr : ''}`} {...register('lastName', { required: true })} />
                    <input type="email" placeholder="YOUR EMAIL*" className={`${s.input} ${errors.email ? s.inputErr : ''}`} {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                    <input type="text" placeholder="COMPANY*" className={`${s.input} ${errors.company ? s.inputErr : ''}`} {...register('company', { required: true })} />
                    <input type="text" placeholder="JOB TITLE*" className={`${s.input} ${errors.jobTitle ? s.inputErr : ''}`} {...register('jobTitle', { required: true })} />
                    <button type="submit" className={s.submitBtn} disabled={loading}>
                      {loading ? 'SENDING...' : 'GET IT NOW'}
                    </button>
                    {error && <p className={s.errMsg}>{error}</p>}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={s.statsBar}>
        <div className={s.statsInner}>
          {stats.map(st => (
            <div key={st.num} className={s.statItem}>
              <span className={s.statNum}>{st.num}</span>
              <span className={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHT */}
      <section className={s.insight}>
        <div className={s.insightInner}>
          <h2 className={s.insightH2}>
            Login state doesn&apos;t drive AI recommendations.<br />
            <span className={s.orange}>Training-time authority does.</span>
          </h2>
          <p className={s.insightBody}>
            Across 1,237 paired observations — logged-in vs. anonymous sessions — the average Overlap Coefficient was 90.4%. Nine out of ten brands recommended to a logged-in user were also recommended to an anonymous one. What determines whether your brand is mentioned has nothing to do with cookies, retargeting, or ad spend. It&apos;s what the model learned at training time — driven by citation depth, content surface area, and third-party validation.
          </p>
          <blockquote className={s.quote}>
            &ldquo;If you want to change what brands an AI recommends, you need to change what the model has learned — not try to optimise for the session.&rdquo;
            <cite className={s.quoteAttr}>— AdLift LLM Brand Consistency Research, 2026</cite>
          </blockquote>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={s.bottomCta}>
        <div className={s.bottomInner}>
          <h2 className={s.bottomH2}>Your brand is either in the room when a buyer asks AI — or it isn&apos;t.</h2>
          <p className={s.bottomP}>Find out which side you&apos;re on. Download the free research and see what drives AI brand visibility in your category.</p>
          <button className={s.bottomBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            DOWNLOAD THE FREE RESEARCH
          </button>
          <p className={s.bottomFine}>Free download · No credit card required · PDF delivered to your inbox</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <span className={s.footerLogo}>Ad<span className={s.orange}>Li</span>ft</span>
          <div className={s.footerLinks}>
            <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.footerLink}>adlift.com</a>
            <a href="https://tesseract.adlift.com" target="_blank" rel="noreferrer" className={s.footerLink}>Tesseract</a>
            <a href="https://www.adlift.com/privacy-policy/" target="_blank" rel="noreferrer" className={s.footerLink}>Privacy Policy</a>
          </div>
          <span className={s.footerCopy}>© 2026 AdLift. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
