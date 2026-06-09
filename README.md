# Creator Stack

Marketing hub for Creator Stack — a sovereign AI creator platform by Sovereign Shield Technologies. Three purpose-built tools (Creator OS, Prompt Architect, Manuscript Studio) unified under one subscription.

## Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set your Formspree endpoint:
# NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xeevodzl
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push the repository to GitHub.
2. Connect the GitHub repo in the [Vercel dashboard](https://vercel.com/new).
3. In Vercel project settings → Environment Variables, add:
   - Key: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/xeevodzl`
4. Click Deploy.
