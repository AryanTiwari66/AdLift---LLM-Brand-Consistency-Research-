import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { firstName, email, company, jobTitle } = await req.json();

  if (!firstName || !email || !company || !jobTitle) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const PDF_URL = process.env.PDF_URL || 'https://www.adlift.com/in/wp-content/uploads/sites/2/2026/04/AdLift-LLM-Brand-Consistency-Research.pdf';
  const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'hello@adlift.com';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set');
    return NextResponse.json({ error: 'Server config error' }, { status: 500 });
  }

  // 1. Send PDF download email to the lead
  const leadEmail = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'AdLift Research <research@adlift.com>',
      to: email,
      subject: 'Your copy of AdLift\'s LLM Brand Consistency Research',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;color:#0F172A;">
          <div style="background:#1A3C6E;padding:32px 40px;border-radius:12px 12px 0 0;">
            <span style="font-size:24px;font-weight:700;color:#fff;">Ad<span style="color:#F58220;">Lift</span></span>
          </div>
          <div style="background:#fff;padding:40px;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px;">
            <h1 style="font-size:22px;font-weight:700;color:#1A3C6E;margin-bottom:16px;">Hi ${firstName}, your research is ready.</h1>
            <p style="font-size:15px;line-height:1.7;color:#475569;margin-bottom:24px;">
              Thank you for downloading the AdLift LLM Brand Consistency Research. You'll find the full PDF at the link below.
            </p>
            <a href="${PDF_URL}" style="display:inline-block;background:#F58220;color:#fff;padding:14px 28px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;margin-bottom:32px;">
              Download the research →
            </a>
            <div style="background:#F8FAFC;border-left:4px solid #F58220;padding:20px 24px;border-radius:0 8px 8px 0;margin-bottom:28px;">
              <p style="font-size:14px;font-weight:600;color:#1A3C6E;margin-bottom:8px;">What you'll find inside:</p>
              <ul style="font-size:14px;color:#475569;line-height:1.8;padding-left:18px;margin:0;">
                <li>90.4% average Overlap Coefficient across 1,237 paired observations</li>
                <li>Platform-by-platform breakdown: ChatGPT, Gemini, Perplexity</li>
                <li>The three structural drivers of AI brand visibility</li>
                <li>Sector analysis across Insurance, Healthcare, E-Commerce, Travel, and SaaS</li>
              </ul>
            </div>
            <p style="font-size:13px;color:#94A3B8;line-height:1.6;">
              Questions about AI brand visibility or Tesseract, our monitoring platform? Reply to this email and our team will get back to you.
            </p>
            <hr style="border:none;border-top:1px solid #E2E8F0;margin:28px 0;" />
            <p style="font-size:12px;color:#94A3B8;">
              AdLift · <a href="https://www.adlift.com" style="color:#1A3C6E;">adlift.com</a> · You received this because you requested our research. <a href="#" style="color:#94A3B8;">Unsubscribe</a>
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!leadEmail.ok) {
    const err = await leadEmail.json();
    console.error('Resend lead email error:', err);
    return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 });
  }

  // 2. Notify AdLift team of new lead
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'AdLift Lead Gen <research@adlift.com>',
      to: NOTIFY_EMAIL,
      subject: `New research download: ${firstName} from ${company}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:500px;margin:0 auto;">
          <h2 style="color:#1A3C6E;">New lead — LLM Research download</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;color:#64748B;font-size:14px;width:120px;">Name</td><td style="font-size:14px;font-weight:600;">${firstName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B;font-size:14px;">Email</td><td style="font-size:14px;"><a href="mailto:${email}" style="color:#1A3C6E;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748B;font-size:14px;">Company</td><td style="font-size:14px;">${company}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B;font-size:14px;">Job title</td><td style="font-size:14px;">${jobTitle}</td></tr>
          </table>
        </div>
      `,
    }),
  });

  return NextResponse.json({ success: true });
}
