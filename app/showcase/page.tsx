import type { Metadata } from 'next';
import Link from 'next/link';
import s from '../pages.module.css';

export const metadata: Metadata = {
  title: 'AdLift Campaign Assignment — Overview',
  description: 'Lead-gen campaign for AdLift\'s "Who\'s Winning in AI Search?" research: landing page, email sequence, and LinkedIn posts.',
};

const brief = [
  { key: 'Client', val: <><strong>AdLift</strong> — global performance marketing & SEO agency</> },
  { key: 'Asset', val: <>The <strong>&ldquo;Who&apos;s Winning in AI Search?&rdquo;</strong> LLM Brand Consistency Research report (2026)</> },
  { key: 'Audience', val: <>CMOs, VPs & Heads of Marketing at mid-to-large brands</> },
  { key: 'Goal', val: <>Generate qualified leads by gating the research behind a form, then nurture them toward a Tesseract conversation</> },
  { key: 'Deliverables', val: <>A conversion-focused <strong>landing page</strong>, a <strong>3-email outreach sequence</strong>, and a <strong>LinkedIn launch post</strong></> },
];

const approach = [
  { num: '01', head: 'Lead with the tension', body: 'Every asset opens on the same insight — AI is already recommending brands, and most marketers can\'t see whether it\'s them or their competitor.' },
  { num: '02', head: 'One message, three surfaces', body: 'The landing page captures, the emails nurture, and LinkedIn drives awareness — all reinforcing a single narrative and CTA.' },
  { num: '03', head: 'Data as the hook', body: '1,530+ prompts, 90.4% brand overlap, 6 industries. Concrete numbers do the persuading instead of adjectives.' },
];

const deliverables = [
  {
    icon: '🖥️',
    num: '01',
    tag: 'LIVE',
    title: 'Landing Page',
    desc: 'A gated, conversion-optimized page with the report cover, lead-capture form, social proof, and an assistant chatbot.',
    href: '/',
    cta: 'View landing page',
  },
  {
    icon: '✉️',
    num: '02',
    tag: '3 EMAILS',
    title: 'Email Sequence',
    desc: 'A 3-email outreach flow that introduces the research, challenges the SEO-is-enough mindset, and drives the download.',
    href: '/emails',
    cta: 'View email sequence',
  },
  {
    icon: '💼',
    num: '03',
    tag: 'LINKEDIN',
    title: 'LinkedIn Post',
    desc: 'A launch post written for a marketing-leader feed — the campaign creative paired with a tight, CTA-driven caption.',
    href: '/linkedin',
    cta: 'View LinkedIn post',
  },
];

const stats = [
  { big: '3', small: 'Campaign assets' },
  { big: '3', small: 'Outreach emails' },
  { big: '1', small: 'LinkedIn post' },
  { big: '1', small: 'Unified narrative' },
];

export default function Showcase() {
  return (
    <div className={s.page}>
      {/* Top bar */}
      <div className={s.topbar}>
        <div className={s.topbarInner}>
          <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.logo}>Ad<span>Li</span>ft</a>
          <span className={s.backLink}>Campaign Assignment</span>
        </div>
      </div>

      <div className={s.wrap}>
        {/* Hero */}
        <div className={s.eyebrow}><span className={s.eyebrowDot} />MARKETING CAMPAIGN · 2026</div>
        <h1 className={s.pageTitle}>Launching AdLift&apos;s<br /><span>AI Search Research</span></h1>
        <p className={s.pageLede}>
          A complete lead-generation campaign built around AdLift&apos;s flagship research report — one message carried across a landing page, an email nurture sequence, and a LinkedIn series. Everything below is live and clickable.
        </p>

        <div className={s.statStrip}>
          {stats.map(st => (
            <div key={st.small} className={s.statCell}>
              <div className={s.statBig}>{st.big}</div>
              <div className={s.statSmall}>{st.small}</div>
            </div>
          ))}
        </div>

        {/* Brief */}
        <div className={s.section}>
          <div className={s.sectionLabel}>The Brief</div>
          <div className={s.briefCard}>
            {brief.map(b => (
              <div key={b.key} className={s.briefRow}>
                <div className={s.briefKey}>{b.key}</div>
                <div className={s.briefVal}>{b.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className={s.section}>
          <div className={s.sectionLabel}>My Approach</div>
          <div className={s.approachGrid}>
            {approach.map(a => (
              <div key={a.num} className={s.approachItem}>
                <div className={s.approachNum}>{a.num}</div>
                <div className={s.approachHead}>{a.head}</div>
                <div className={s.approachBody}>{a.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className={s.section}>
          <div className={s.sectionLabel}>The Deliverables</div>
          <div className={s.deliverGrid}>
            {deliverables.map(d => (
              <Link key={d.title} href={d.href} className={s.deliverCard} {...(d.href === '/' ? { target: '_blank' } : {})}>
                <span className={s.deliverNum}>{d.num}</span>
                <div className={s.deliverIcon}>{d.icon}</div>
                <span className={s.deliverTag}>{d.tag}</span>
                <div className={s.deliverTitle}>{d.title}</div>
                <div className={s.deliverDesc}>{d.desc}</div>
                <div className={s.deliverCta}>{d.cta} <span>→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={s.footer}>
        <p className={s.footerText}>
          Prepared for AdLift · Campaign assignment · <a href="https://www.adlift.com" target="_blank" rel="noreferrer">adlift.com</a>
        </p>
      </div>
    </div>
  );
}
