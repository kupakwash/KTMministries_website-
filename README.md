# Apostle KTM Ministries

Premium ministry and book-launch website for Apostle Kupakwashe T. Mapuranga.

The site introduces the ministry, showcases the upcoming **GPS: Where Are You?** book, features sermons and media, and makes it easy for visitors to request a copy or invite Apostle KTM.

## Features

- Responsive, premium navy, gold and cream ministry design
- Full-screen ministry landing page
- GPS book section with front and back cover artwork
- GPS launch announcement and first-visit “Coming Soon” panel
- Book order and launch-update email actions
- Sermon/video feature area
- Ministry biography, media cards and journal section
- Invitation section linked to `kupakwashemapuranga@gmail.com`

## Run locally

Install dependencies once:

```powershell
npm.cmd install
```

Start the local site:

```powershell
npm.cmd run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Create a production build:

```powershell
npm.cmd run build
```

## Project structure

```text
app/
  page.tsx          Main website page and launch notification
  globals.css       Website styling and responsive layout
  layout.tsx        Global metadata and fonts
public/media/       Images, book artwork and selected website videos
```

## Updating content

The active content and page wording live in `app/page.tsx`.

Website media is in `public/media/`. Use meaningful filenames when adding new assets, then update the relevant image or video path in `app/page.tsx`.

The original supplied images and videos are kept in the local `pictures and videos` folder. That folder is intentionally excluded from Git so the repository contains only the media currently used by the website.

## GPS book orders

The current buttons open an email request to:

`kupakwashemapuranga@gmail.com`

Before public launch, replace this email flow with a proper order form that captures:

- Customer name and email
- Country and delivery address
- Quantity
- Local or international fulfilment option
- Payment preference

## Before publishing publicly

- Add live Instagram, Facebook, YouTube and LinkedIn links
- Add the real book price and fulfilment process
- Add a privacy policy and terms page
- Connect a newsletter provider
- Connect a contact/order form service
- Deploy to Vercel, Netlify, or another Next.js host

## Technology

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

