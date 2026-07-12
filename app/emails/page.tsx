import type { Metadata } from 'next';
import Link from 'next/link';
import s from '../pages.module.css';

export const metadata: Metadata = {
  title: 'Email Sequence — AdLift Campaign',
  description: 'A 3-email outreach sequence for AdLift\'s AI Search research campaign.',
};

export default function EmailsPage() {
  return (
    <div className={s.page}>
      <div className={s.topbar}>
        <div className={s.topbarInner}>
          <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.logo}>Ad<span>Li</span>ft</a>
          <Link href="/showcase" className={s.backLink}>← Back to overview</Link>
        </div>
      </div>

      <div className={s.wrapNarrow}>
        <div className={s.eyebrow}><span className={s.eyebrowDot} />DELIVERABLE 02</div>
        <h1 className={s.pageTitle}>Email <span>Nurture Sequence</span></h1>
        <p className={s.pageLede}>
          A 3-touch outreach flow that introduces the research, challenges the &ldquo;SEO is enough&rdquo; assumption, and drives the download before it hits their organic traffic — spaced over ~5 days.
        </p>

        <div className={s.emailStack}>

          {/* EMAIL 1 */}
          <div className={s.emailCard}>
            <div className={s.emailMeta}>
              <span className={s.emailStep}>EMAIL 1 · OUTREACH / INTRO</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>AdLift Research &lt;research@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>Is AI recommending {'{{Brand Name}}'} — accurately?</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>New research on how ChatGPT, Claude &amp; Gemini see your brand.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{First Name}}'},</p>
              <p>When prospects use ChatGPT or Google Gemini to find the &ldquo;top fintech brands in India,&rdquo; does <strong>{'{{Brand Name}}'}</strong> come to mind?</p>
              <p>Even if it does, is the AI providing the correct representation of your value proposition? Is it showing your pricing? Is it showing your features?</p>
              <p>Traditional search is changing. Buyers are moving toward Large Language Models (LLMs) to research vendors. However, how these AI engines see and recommend brands is an enigma to most marketing leaders.</p>
              <p>To address this, our team has conducted a large-scale data study on <strong>LLM Brand Consistency</strong>. Here&apos;s a glimpse of our findings:</p>
              <p>
                • Understanding why traditional SEO is no longer sufficient.<br />
                • Learning how ChatGPT, Claude, and Gemini search — and the science behind AI brand recommendations.<br />
                • Learning how to protect your digital footprint and ensure your brand is visible, trusted, and accurately represented by AI.
              </p>
              <p>You can access the full research paper here:</p>
              <p><a className={s.emailBtn} href="#">Download the Research Paper →</a></p>
              <p className={s.emailSign}>Warm regards,<br />The AdLift Team</p>
              <div className={s.emailNote}>Goal: open with the prospect&apos;s blind spot, tease the study, drive the download.</div>
            </div>
          </div>

          {/* EMAIL 2 */}
          <div className={s.emailCard}>
            <div className={s.emailMeta}>
              <span className={s.emailStep}>EMAIL 2 · DAY 2</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>AdLift &lt;research@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>Is your marketing energy going to waste?</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>Standard Google SEO won&apos;t carry you into AI search.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{First Name}}'},</p>
              <p>Is your team actually optimization-proofing your brand for AEO? Or is all that marketing energy going to waste?</p>
              <p>Most growth teams assume standard Google SEO will carry them over to AI search engines. It won&apos;t. If your brand data is even slightly fragmented, ChatGPT, Gemini, and AI Overviews will either pull outdated info or ignore you entirely.</p>
              <p>Our team did the heavy lifting for you and benchmarked who is actually winning across major sectors.</p>
              <p>Pass this link to your marketing team so they understand exactly why SEO isn&apos;t enough anymore, how LLMs actually work, and who is leading the market right now:</p>
              <p><a className={s.emailBtn} href="#">Read AdLift&apos;s AI Search Benchmark Report →</a></p>
              <p className={s.emailSign}>Best,<br />{'{{Your Name}}'}</p>
              <div className={s.emailNote}>Goal: challenge the SEO-is-enough assumption, position the benchmark, drive a team-wide read.</div>
            </div>
          </div>

          {/* EMAIL 3 */}
          <div className={s.emailCard}>
            <div className={s.emailMeta}>
              <span className={s.emailStep}>EMAIL 3 · DAY 5</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>AdLift &lt;research@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>Have you audited your AI search visibility yet?</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>Pivot to AEO before it hits your organic traffic.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{First Name}}'},</p>
              <p>Just checking back on this—have you guys actually audited your brand&apos;s visibility inside AI search engines yet?</p>
              <p>If your team is still spending 100% of their time chasing legacy keywords, they are completely missing the shift to <strong>Answer Engine Optimization (AEO)</strong>.</p>
              <p>We mapped out exactly why traditional search strategies are failing in LLM environments and which market leaders are currently dominating the space.</p>
              <p>You can forward this study directly to your team to help them pivot before it impacts your organic traffic numbers:</p>
              <p><a className={s.emailBtn} href="#">Read the study →</a></p>
              <p className={s.emailSign}>Thanks,<br />{'{{Your Name}}'}</p>
              <div className={s.emailNote}>Goal: final nudge, frame the risk to organic traffic, drive a team forward.</div>
            </div>
          </div>

        </div>
      </div>

      <div className={s.footer}>
        <p className={s.footerText}>
          <Link href="/showcase" style={{ color: '#F58220', textDecoration: 'none' }}>← Back to campaign overview</Link>
        </p>
      </div>
    </div>
  );
}
