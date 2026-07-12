import type { Metadata } from 'next';
import Link from 'next/link';
import s from '../pages.module.css';

export const metadata: Metadata = {
  title: 'Email Sequence — AdLift Campaign',
  description: 'A 4-email nurture sequence for AdLift\'s AI Search research campaign.',
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
          A 4-touch flow that starts the moment someone downloads the report. It delivers the asset, adds insight, proves the result, and asks for the meeting — spaced over ~10 days.
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
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>How Tynker grew SEO traffic 50% in 4 months</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>Same playbook that drives AI visibility.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{firstName}}'},</p>
              <p>Insight is only useful if it moves numbers. Here&apos;s what it looks like in practice.</p>
              <p><strong>Lomit Patel, CMO at Tynker:</strong> &ldquo;Within the first four months, SEO traffic increased over 50% — and it&apos;s continued to climb month over month beyond that.&rdquo;</p>
              <p>The same structural work that lifts organic search is what makes a brand legible to AI models. One roadmap, two payoffs.</p>
              <p>Curious how your brand currently shows up across ChatGPT, Gemini, and Perplexity? That&apos;s exactly what <strong>Tesseract</strong>, our AI-visibility platform, measures.</p>
              <p><a className={s.emailBtn} href="#">See a sample Tesseract report →</a></p>
              <p className={s.emailSign}>— The AdLift Team</p>
              <div className={s.emailNote}>Goal: social proof + introduce the product softly.</div>
            </div>
          </div>

          {/* EMAIL 4 */}
          <div className={s.emailCard}>
            <div className={s.emailMeta}>
              <span className={s.emailStep}>EMAIL 4 · DAY 10</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>Prashant Puri &lt;prashant@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>15 minutes on your AI visibility?</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>We&apos;ll run your brand and share what we find.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{firstName}}'},</p>
              <p>Last note from me on this.</p>
              <p>If the research got you wondering where <strong>{'{{company}}'}</strong> actually stands in AI search, we&apos;re happy to just show you. No pitch deck — we&apos;ll run your brand through the same methodology from the report and walk you through the results.</p>
              <p><a className={s.emailBtn} href="#">Book a 15-minute visibility review →</a></p>
              <p>And if the timing isn&apos;t right, no worries at all — keep the report and reach out whenever it is.</p>
              <p className={s.emailSign}>— Prashant<br />Co-founder, AdLift</p>
              <div className={s.emailNote}>Goal: direct CTA, low-friction ask, graceful exit.</div>
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
