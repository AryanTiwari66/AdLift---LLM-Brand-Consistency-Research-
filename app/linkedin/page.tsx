import type { Metadata } from 'next';
import Link from 'next/link';
import s from '../pages.module.css';

export const metadata: Metadata = {
  title: 'LinkedIn Posts — AdLift Campaign',
  description: 'A 3-post LinkedIn series launching AdLift\'s AI Search research.',
};

type Post = {
  tag: string;
  author: string;
  meta: string;
  avatar: string;
  body: React.ReactNode;
  image?: { title: string; sub: string };
  stats: { reactions: string; comments: string; reposts: string };
};

const posts: Post[] = [
  {
    tag: 'LAUNCH POST',
    author: 'Prashant Puri',
    meta: 'Co-founder & CEO at AdLift · Following',
    avatar: 'PP',
    body: (
      <>
        We ran <strong>1,530+ prompts</strong> through ChatGPT, Gemini, and Perplexity to answer one question:{'\n'}
        {'\n'}
        When AI recommends a brand in your category — is it you, or your competitor?{'\n'}
        {'\n'}
        The result surprised even us: <strong>90.4% brand overlap</strong> across platforms. The same names keep coming up. AI visibility isn&apos;t random — it&apos;s structural.{'\n'}
        {'\n'}
        We put everything into a free report: the data, the 3 factors that drive AI recommendations, and a breakdown across 6 industries.{'\n'}
        {'\n'}
        Grab it here 👇 (link in comments){'\n'}
        {'\n'}
        <span className={s.liHashtags}>#AISearch #GEO #MarketingLeadership #SEO #BrandStrategy</span>
      </>
    ),
    image: { title: "WHO'S WINNING IN AI SEARCH?", sub: '2026 LLM Brand Consistency Research · AdLift' },
    stats: { reactions: '412', comments: '58', reposts: '37' },
  },
  {
    tag: 'DATA / HOOK POST',
    author: 'AdLift',
    meta: '48,201 followers · Promoted',
    avatar: 'AL',
    body: (
      <>
        Your next customer just asked ChatGPT for a recommendation.{'\n'}
        {'\n'}
        You&apos;ll never see that query in Google Analytics. There&apos;s no impression, no click, no keyword. Just an answer — with or without your brand in it.{'\n'}
        {'\n'}
        Here&apos;s what our research found about who makes the cut:{'\n'}
        {'\n'}
        → <strong>Entity clarity</strong> beats ad spend{'\n'}
        → <strong>Consistency</strong> beats volume{'\n'}
        → <strong>Structure</strong> beats keywords{'\n'}
        {'\n'}
        The brands winning in AI search aren&apos;t the loudest. They&apos;re the most legible.{'\n'}
        {'\n'}
        Full data in our new report — free, no fluff. Link below.{'\n'}
        {'\n'}
        <span className={s.liHashtags}>#GenerativeEngineOptimization #AImarketing #CMO #DigitalStrategy</span>
      </>
    ),
    stats: { reactions: '286', comments: '31', reposts: '44' },
  },
  {
    tag: 'CONTRARIAN TAKE',
    author: 'Prashant Puri',
    meta: 'Co-founder & CEO at AdLift · Following',
    avatar: 'PP',
    body: (
      <>
        Unpopular opinion: most &ldquo;AI SEO&rdquo; advice is noise.{'\n'}
        {'\n'}
        Stuffing your site with FAQ schema and calling it a GEO strategy won&apos;t move anything. We tested it.{'\n'}
        {'\n'}
        What actually correlated with being recommended by AI models, across 6 industries:{'\n'}
        {'\n'}
        1. Being described <strong>the same way</strong> everywhere on the web{'\n'}
        2. Third-party sources <strong>corroborating</strong> that description{'\n'}
        3. A clean, machine-readable brand entity{'\n'}
        {'\n'}
        None of that is a hack. It&apos;s brand fundamentals — just newly measurable.{'\n'}
        {'\n'}
        We wrote up the full methodology and numbers. It&apos;s free, and it&apos;ll change how you think about visibility. Link in comments.{'\n'}
        {'\n'}
        <span className={s.liHashtags}>#AISearch #BrandConsistency #MarketingStrategy #GEO</span>
      </>
    ),
    stats: { reactions: '531', comments: '89', reposts: '62' },
  },
];

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
        <div className={s.eyebrow}><span className={s.eyebrowDot} />DELIVERABLE 03</div>
        <h1 className={s.pageTitle}>LinkedIn <span>Post Series</span></h1>
        <p className={s.pageLede}>
          Three posts written for a marketing-leader feed — a founder launch post, a paid data hook, and a contrarian thought-leadership take. Each ends on the same free-report CTA.
        </p>

        <div className={s.liStack}>
          {posts.map((p, i) => (
            <div key={i}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#F58220', letterSpacing: '0.1em', marginBottom: 12, textAlign: 'center' }}>
                POST {i + 1} · {p.tag}
              </div>
              <div className={s.liCard}>
                <div className={s.liHeader}>
                  <div className={s.liAvatar}>{p.avatar}</div>
                  <div>
                    <div className={s.liAuthor}>{p.author}</div>
                    <div className={s.liMetaLine}>{p.meta}</div>
                  </div>
                </div>
                <div className={s.liBody}>{p.body}</div>
                {p.image && (
                  <div className={s.liImage}>
                    <div className={s.liImageTitle}>{p.image.title}</div>
                    <div className={s.liImageSub}>{p.image.sub}</div>
                  </div>
                )}
                <div className={s.liFooter}>
                  <span className={s.liStat}>👍 {p.stats.reactions}</span>
                  <span className={s.liStat}>💬 {p.stats.comments} comments</span>
                  <span className={s.liStat}>🔁 {p.stats.reposts} reposts</span>
                </div>
              </div>
            </div>
          ))}
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
