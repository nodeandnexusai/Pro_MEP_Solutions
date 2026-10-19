# ConstructEM Next.js rebuild

## Project blueprint

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── trades/page.tsx
│   ├── recruitment/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/       # Navbar, Footer, PageHero
│   └── sections/     # CTA and page-level visual sections
└── lib/              # Navigation and content constants
public/
└── images/           # Curated, de-duplicated source imagery
```

The original downloaded HTML and `*_files` directories remain available as migration references. Runtime pages do not load their tracking scripts, WordPress styles, or duplicate assets.

## Run locally

```powershell
cd "C:\Users\Saad\OneDrive\Desktop\PRO MEP SOLUTION\constructem-site"
npm install
npm run dev
```

Open `http://localhost:3000`. The routes are `/`, `/about`, `/services`, `/trades`, `/recruitment`, and `/contact`.

## Migration roadmap for a fresh clone

```powershell
npx create-next-app@latest constructem-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd constructem-site
New-Item -ItemType Directory -Force public\images, public\icons
Copy-Item "..\source-capture\Best Design & Estimating Services for Construction Projects_files\*.webp" public\images
npm run build
```

For future asset migrations, copy only referenced images/SVGs into `public/images` or `public/icons`, rename them semantically, and update the corresponding content constant. Do not copy the captured analytics, tag-manager, minified WordPress, or duplicated per-page files.

## Verify a production build

```powershell
npm run build
npm run start
```

The build statically prerenders all six content routes. The contact form currently validates required fields client-side and shows a success state; connect its submit handler to the project’s chosen email/API provider before accepting production submissions.
