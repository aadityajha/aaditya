# Aditya Jha — Personal Portfolio

A responsive Next.js App Router portfolio with TypeScript, separate CSS files, project detail pages, metadata, JSON-LD structured data, sitemap, robots.txt, privacy policy, terms, and contact links.

## Run it (no coding required)

1. Install **Node.js LTS** from https://nodejs.org if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `aditya-portfolio` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

To make a production build, run `npm run build`, then `npm start`.

## Add your portrait

Replace `public/aditya-portrait-placeholder.svg` with your own portrait named `profile.jpg`, then update the portrait path in `src/components/Hero.tsx` from `/aditya-portrait-placeholder.svg` to `/profile.jpg`. Use a high-quality, well-lit portrait you have permission to publish.

## Add social links later

Open `src/lib/site.ts` and add your Instagram, LinkedIn, and Facebook profile URLs to the `socials` array. Empty links are intentionally not displayed.

## Important details to verify before launch

- The domain provided was `Adityajsphar.com.np`; this project uses `https://adityajsphar.com.np` as the canonical domain. Confirm that this is the exact domain you own before deploying.
- The supplied email is `hi@adityajha.com.np`, which is intentionally preserved.
- College wording is kept general (“MBBS student in Nepal”) until the exact institution name is confirmed.
- CHD and FHE are included as separate projects. Replace the starter copy with your actual approved project details before publication.
- Privacy Policy and Terms are starter templates, not legal advice. Review them for the actual services and analytics you eventually use.
- Google indexing, first-place rankings, photo results, and autocomplete cannot be guaranteed. Verify the domain in Google Search Console and Bing Webmaster Tools after launch, then submit the sitemap.

## Deploy

Import the folder into Vercel or connect the repository to a Vercel project. Add the custom domain in Vercel, then confirm the DNS instructions with your domain registrar. Do not publish sensitive patient or community information in project pages.
