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
              <span className={s.emailStep}>EMAIL 1 · SENT INSTANTLY</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>AdLift Research &lt;research@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>Your copy of &ldquo;Who&apos;s Winning in AI Search?&rdquo; 📊</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>The full report is attached below — plus the one stat to read first.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{firstName}}'},</p>
              <p>Thanks for grabbing the research. Here&apos;s your copy of <strong>Who&apos;s Winning in AI Search?</strong> — our analysis of 1,530+ prompts across ChatGPT, Gemini, and Perplexity.</p>
              <p><a className={s.emailBtn} href="#">Download the report →</a></p>
              <p>If you only read one number first, make it this one: <strong>90.4% brand overlap</strong> across platforms. The same brands keep surfacing — which means visibility in AI search is structural, not random. Page 4 breaks down why.</p>
              <p className={s.emailSign}>— The AdLift Research Team</p>
              <div className={s.emailNote}>Goal: deliver instantly, set the hook (one stat), zero ask.</div>
            </div>
          </div>

          {/* EMAIL 2 */}
          <div className={s.emailCard}>
            <div className={s.emailMeta}>
              <span className={s.emailStep}>EMAIL 2 · DAY 2</span>
              <div className={s.emailField}><span className={s.emailFieldKey}>From</span><span className={s.emailFieldVal}>Prashant Puri &lt;prashant@adlift.com&gt;</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Subject</span><span className={s.emailSubject}>Is AI recommending you — or your competitor?</span></div>
              <div className={s.emailField}><span className={s.emailFieldKey}>Preview</span><span className={s.emailFieldVal}>The 3 structural factors that decide who gets cited.</span></div>
            </div>
            <div className={s.emailBody}>
              <p>Hi {'{{firstName}}'},</p>
              <p>Quick follow-up now that you&apos;ve had the report for a day.</p>
              <p>The finding most marketing leaders miss: AI models don&apos;t &ldquo;rank&rdquo; brands the way Google does. They reconstruct them from <strong>consistency signals</strong> — how uniformly your brand is described across the web.</p>
              <p>The three factors that moved the needle most in our data:</p>
              <p>
                <strong>1. Entity clarity</strong> — a clean, consistent description of who you are.<br />
                <strong>2. Third-party corroboration</strong> — being described the same way by others.<br />
                <strong>3. Structured presence</strong> — schema, reviews, and citations models can parse.
              </p>
              <p>Section 3 of the report shows exactly how each played out by industry.</p>
              <p className={s.emailSign}>— Prashant<br />Co-founder, AdLift</p>
              <div className={s.emailNote}>Goal: teach, establish authority, no pitch yet.</div>
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
