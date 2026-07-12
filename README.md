# AdLift LLM Research — Lead Gen Landing Page

Gated landing page for the AdLift LLM Brand Consistency Research paper. Built with Next.js 15, TypeScript, and Resend for email delivery.

## Deploy to Vercel in 3 steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create adlift-landing --public --push
```

### 2. Import to Vercel
Go to [vercel.com/new](https://vercel.com/new), import the repo, and click Deploy.

### 3. Add environment variables
In Vercel → Project → Settings → Environment Variables, add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your key from [resend.com](https://resend.com) — free tier gives 3,000 emails/month |
| `NOTIFY_EMAIL` | Email address where lead notifications go |
| `PDF_URL` | URL of the PDF to send (default already set to AdLift's PDF) |

Redeploy after adding env vars.

## Local development
```bash
cp .env.example .env.local
# Fill in your RESEND_API_KEY
npm run dev
```

## How it works
1. Visitor fills the 4-field form (name, email, company, title)
2. `/api/submit` sends two emails via Resend:
   - PDF delivery email to the lead with download link
   - Lead notification email to your NOTIFY_EMAIL
3. Form shows a success state — no page reload

## Customisation
- Copy lives entirely in `app/page.tsx`
- Brand colors are in `app/globals.css` as CSS variables (`--al-navy`, `--al-orange`)
- To swap the PDF, update `PDF_URL` in Vercel env vars
