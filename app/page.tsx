'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import s from './landing.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

type ChatMsg = { from: 'bot' | 'user'; text: string };

const QUICK_REPLIES = ['Tell me about the report', 'Talk to the team', 'AI search trends'];

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes('report') || lower.includes('research') || lower.includes('pdf'))
    return 'The AdLift LLM Brand Consistency Research analyzed 1,530+ prompts across ChatGPT, Gemini, and Perplexity. Fill the form on the right to get the full PDF — it\'s free and arrives instantly in your inbox. 📊';
  if (lower.includes('team') || lower.includes('contact') || lower.includes('talk'))
    return 'Our team would love to connect! Fill in the short form and we\'ll reach out within one business day. You can also email hello@adlift.com 📧';
  if (lower.includes('ai') || lower.includes('search') || lower.includes('brand') || lower.includes('trend'))
    return 'AI search is reshaping how brands get discovered. Our research found a 90.4% brand overlap coefficient — meaning the same brands surface consistently across platforms. Download the report to see who\'s winning in your industry. 🔍';
  if (lower.includes('price') || lower.includes('cost') || lower.includes('free'))
    return 'The research report is completely free! Just fill in your details in the form and we\'ll email you the PDF immediately. No credit card needed. ✅';
  return 'Great question! Our research uncovered some surprising patterns in AI brand visibility. Download the free report to see the full findings — fill the form and it arrives in your inbox instantly. 📥';
}

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([
    { from: 'bot', text: 'Hi! 👋 Ask me about our LLM Brand Consistency Research or anything about AI search visibility.' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatTyping, setChatTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatTyping]);

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

  const sendChat = (text?: string) => {
    const msg = (text ?? chatInput).trim();
    if (!msg) return;
    setChatMessages(prev => [...prev, { from: 'user', text: msg }]);
    setChatInput('');
    setChatTyping(true);
    setTimeout(() => {
      setChatTyping(false);
      setChatMessages(prev => [...prev, { from: 'bot', text: getBotReply(msg) }]);
    }, 800);
  };

  const bullets = [
    { icon: '📊', text: 'Which brands AI recommends in your category — and why' },
    { icon: '🔍', text: 'Platform breakdown: ChatGPT vs Gemini vs Perplexity' },
    { icon: '🏭', text: 'Sector analysis: Insurance, Healthcare, E-Commerce, Travel, SaaS' },
    { icon: '⚡', text: 'The 3 structural factors that actually drive AI visibility' },
  ];

  const stats = [
    { num: '1,530+', label: 'Prompts run' },
    { num: '90.4%', label: 'Avg brand overlap' },
    { num: '3', label: 'AI platforms' },
    { num: '6', label: 'Industries' },
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

          {/* LEFT COLUMN */}
          <div className={s.leftCol}>

            {/* Copy */}
            <div className={s.copyBlock}>
              <div className={s.badge}>
                <span className={s.badgeDot} />
                2026 RESEARCH REPORT
              </div>
              <h1 className={s.h1}>
                Who&apos;s Winning<br />
                in <span className={s.h1Orange}>AI Search?</span>
              </h1>
              <p className={s.subhead}>
                We tested ChatGPT, Gemini, and Perplexity to see which brands dominate recommendations. Here&apos;s what actually drives visibility today.
              </p>
              <button className={s.scrollBtn} onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
                Download the Free Report &nbsp;→
              </button>
            </div>

            {/* Cover image */}
            <div className={s.coverImage}>
              <div className={s.coverGradient}>
                <div className={s.coverBrain}>
                  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.brainSvg}>
                    <circle cx="150" cy="150" r="140" fill="url(#bg)" opacity="0.3"/>
                    <circle cx="150" cy="120" r="70" fill="none" stroke="rgba(180,120,255,0.6)" strokeWidth="1.5"/>
                    <circle cx="150" cy="120" r="50" fill="none" stroke="rgba(180,120,255,0.4)" strokeWidth="1"/>
                    <circle cx="150" cy="120" r="30" fill="rgba(140,80,255,0.3)"/>
                    {[[80,80],[220,80],[60,150],[240,150],[100,200],[200,200],[150,60],[110,110],[190,110]].map(([cx,cy],i) => (
                      <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(200,150,255,0.8)"/>
                    ))}
                    <line x1="80" y1="80" x2="150" y2="120" stroke="rgba(180,120,255,0.3)" strokeWidth="1"/>
                    <line x1="220" y1="80" x2="150" y2="120" stroke="rgba(180,120,255,0.3)" strokeWidth="1"/>
                    <line x1="60" y1="150" x2="150" y2="120" stroke="rgba(180,120,255,0.3)" strokeWidth="1"/>
                    <line x1="240" y1="150" x2="150" y2="120" stroke="rgba(180,120,255,0.3)" strokeWidth="1"/>
                    <line x1="80" y1="80" x2="220" y2="80" stroke="rgba(180,120,255,0.2)" strokeWidth="1"/>
                    <line x1="60" y1="150" x2="240" y2="150" stroke="rgba(180,120,255,0.2)" strokeWidth="1"/>
                    <defs>
                      <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#9333EA"/>
                        <stop offset="100%" stopColor="#4C1D95"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className={s.coverLogoText}>AdLi<span>ft</span></div>
                <div className={s.coverHeading}>WHO&apos;S WINNING<br />IN AI SEARCH:</div>
                <div className={s.coverSubText}>Top Websites Visible in AI Search Across Industries</div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className={s.testimonialSection}>
              <div className={s.testimonialLabel}>CLIENT SPEAK</div>
              <div className={s.testimonialCard}>
                <div className={s.testimonialQuoteMark}>&ldquo;</div>
                <p className={s.testimonialText}>
                  We&apos;ve seen a huge improvement in our SEO since working with AdLift. The biggest impact was following the roadmap they created — within the first four months, SEO traffic increased over 50% and has continued to grow month over month beyond that.
                </p>
                <div className={s.testimonialPerson}>
                  <div className={s.testimonialAvatar}>LP</div>
                  <div className={s.testimonialInfo}>
                    <div className={s.testimonialName}>Lomit Patel</div>
                    <div className={s.testimonialRole}>Chief Marketing &amp; Growth Officer</div>
                    <div className={s.testimonialCompany}>Tynker</div>
                  </div>
                  <div className={s.testimonialStars}>★★★★★</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className={s.rightCol}>

            {/* Form */}
            <div className={s.formBox} id="form">
              <div className={s.formTopAccent} />
              <div className={s.formBadge}>100% FREE · INSTANT DELIVERY</div>
              {submitted ? (
                <div className={s.success}>
                  <div className={s.successCheck}>✓</div>
                  <h3 className={s.successTitle}>Your copy is on its way!</h3>
                  <p className={s.successBody}>Check your inbox — the PDF will arrive in a few minutes.</p>
                </div>
              ) : (
                <>
                  <h2 className={s.formTitle}>Get the Full Research Report</h2>
                  <p className={s.formSubtitle}>Find out which brands AI recommends — and what they&apos;re doing differently.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <div className={s.inputRow}>
                      <input type="text" placeholder="FIRST NAME*" className={`${s.input} ${errors.firstName ? s.inputErr : ''}`} {...register('firstName', { required: true })} />
                      <input type="text" placeholder="LAST NAME*" className={`${s.input} ${errors.lastName ? s.inputErr : ''}`} {...register('lastName', { required: true })} />
                    </div>
                    <input type="email" placeholder="WORK EMAIL*" className={`${s.input} ${errors.email ? s.inputErr : ''}`} {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                    <input type="text" placeholder="COMPANY NAME*" className={`${s.input} ${errors.company ? s.inputErr : ''}`} {...register('company', { required: true })} />
                    <input type="text" placeholder="JOB TITLE*" className={`${s.input} ${errors.jobTitle ? s.inputErr : ''}`} {...register('jobTitle', { required: true })} />
                    <button type="submit" className={s.submitBtn} disabled={loading}>
                      {loading ? 'SENDING...' : 'GET THE FREE REPORT →'}
                    </button>
                    {error && <p className={s.errMsg}>{error}</p>}
                    <p className={s.formDisclaimer}>🔒 No spam. Unsubscribe anytime. Your data is safe with us.</p>
                  </form>
                </>
              )}
            </div>

            {/* What's inside */}
            <div className={s.insideBox}>
              <div className={s.insideTitle}>What&apos;s inside</div>
              <ul className={s.bullets}>
                {bullets.map((b, i) => (
                  <li key={i} className={s.bullet}>
                    <span className={s.bulletIcon}>{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className={s.statsRow}>
                {stats.map(st => (
                  <div key={st.num} className={s.statItem}>
                    <span className={s.statNum}>{st.num}</span>
                    <span className={s.statLabel}>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
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

      {/* CHATBOT WIDGET */}
      <div className={s.chatWidget}>
        {chatOpen && (
          <div className={s.chatPanel}>
            <div className={s.chatHeader}>
              <div className={s.chatHeaderInfo}>
                <div className={s.chatBotAvatar}>AL</div>
                <div>
                  <div className={s.chatBotName}>AdLift Assistant</div>
                  <div className={s.chatBotStatus}><span className={s.chatOnlineDot} />Online</div>
                </div>
              </div>
              <button className={s.chatClose} onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div className={s.chatMessages}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={msg.from === 'bot' ? s.chatMsgBot : s.chatMsgUser}>
                  {msg.text}
                </div>
              ))}
              {chatTyping && (
                <div className={s.chatMsgBot}>
                  <span className={s.chatTypingDots}><span /><span /><span /></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className={s.chatQuickReplies}>
              {QUICK_REPLIES.map(r => (
                <button key={r} className={s.chatQuickBtn} onClick={() => sendChat(r)}>{r}</button>
              ))}
            </div>
            <div className={s.chatInputRow}>
              <input
                className={s.chatInputField}
                placeholder="Ask anything..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendChat()}
              />
              <button className={s.chatSendBtn} onClick={() => sendChat()}>→</button>
            </div>
          </div>
        )}
        <button className={s.chatBubble} onClick={() => setChatOpen(o => !o)}>
          {chatOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          )}
        </button>
      </div>
    </>
  );
}
