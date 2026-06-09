# Creator Stack — Marketing Hub

Static Next.js 14 marketing hub for Creator Stack. No backend, no database, no auth — pure static export.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (already on branch `claude/creator-stack-marketing-hub-d0yhgv`)
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**
4. No environment variables required

## Before You Go Live

### 1. Update the Creator OS URL

Open `lib/links.ts` and replace the placeholder:

```ts
// Before
export const CREATOR_OS_URL = 'https://creator-os.vercel.app'

// After — use your actual Creator OS deployment URL
export const CREATOR_OS_URL = 'https://your-actual-creator-os-url.com'
```

### 2. Wire the Partner Form

1. Go to [formspree.io](https://formspree.io) and create a free form
2. Copy the endpoint URL (looks like `https://formspree.io/f/abcd1234`)
3. Open `lib/links.ts` and replace the placeholder:

```ts
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ACTUAL_ID'
```

No API route needed — the form POSTs directly to Formspree.

## Tech Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS
- `next/font/google` — Space Grotesk, Inter, JetBrains Mono
- Static export (`output: 'export'`) — zero server required

## Zero Dependencies Beyond

```
next  react  react-dom  tailwindcss  typescript
```
