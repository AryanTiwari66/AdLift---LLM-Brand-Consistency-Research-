import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI is recommending your competitors. Here\'s the data. | AdLift',
  description: 'AdLift ran 1,530+ prompts across ChatGPT, Gemini, and Perplexity to find out what drives AI brand recommendations. Download the free research.',
  openGraph: {
    title: 'AI is already recommending your competitors. Here\'s why.',
    description: 'New research from AdLift: 1,530+ prompts, 6 industries, 3 AI platforms. Download the free PDF.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
