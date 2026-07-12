import type { Metadata } from 'next';
import Link from 'next/link';
import s from '../pages.module.css';

export const metadata: Metadata = {
  title: 'LinkedIn Post — AdLift Campaign',
  description: 'LinkedIn launch post for AdLift\'s AI Search research.',
};

export default function LinkedInPage() {
  return (
    <div className={s.page}>
      <div className={s.topbar}>
        <div className={s.topbarInner}>
          <a href="https://www.adlift.com" target="_blank" rel="noreferrer" className={s.logo}>Ad<span>Li</span>ft</a>
          <Link href="/showcase" className={s.backLink}>← Back to overview</Link>
        </div>
      </div>

      <div className={s.wrapNarrow}>
        <div className={s.liStack}>
          <div className={s.liCard}>
            <div className={s.liHeader}>
              <div className={s.liAvatar}>AL</div>
              <div>
                <div className={s.liAuthor}>AdLift</div>
                <div className={s.liMetaLine}>Acquire. Amplify. Advance. · Following</div>
              </div>
            </div>

            <div className={s.liBody}>
              AI is quietly rewriting how brands get discovered.{'\n'}
              ChatGPT, Gemini, and Perplexity now decide who gets recommended —{'\n'}
              and most brands have no idea whether it&apos;s them or their competitor.{'\n'}
              {'\n'}
              We ran 1,530+ prompts across 6 industries to find out who&apos;s winning.{'\n'}
              The free report reveals the 3 factors that drive AI visibility today.{'\n'}
              👉 Download it now and see where your brand stands: <span className={s.liHashtags}>adlift.com/ai-search</span>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/linkedin-post.png" alt="Who's Winning in AI Search — The New Era of Search Has Begun" className={s.liPostImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
