// app/api/sitemap/route.ts

export async function GET() {
  const baseUrl = process.env.BASE_URL || "https://aaditya-jha.com.np";

  // Define static paths for the sitemap
  const staticPaths = [
    { path: "/", isImage: false, lastmod: new Date().toISOString() },
    { path: "/privacy", isImage: false, lastmod: new Date().toISOString() },
    { path: "/terms", isImage: false, lastmod: new Date().toISOString() },
    // Example images
    { path: "/aaditya.jpg", isImage: true, caption: "Aaditya Profile Image" },
    { path: "/logo.svg", isImage: true, caption: "Website Logo" },
  ];

  // Supported languages for SEO
  const languages = ["en", "ne", "de"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPaths
      .map((item) => {
        const urls = languages.map(
          (lang) =>
            `<xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}${item.path}" />`
        ).join("");

        if (item.isImage) {
          const caption = item.caption ? `<image:caption>${item.caption}</image:caption>` : "";
          return `
          <url>
            <loc>${baseUrl}${item.path}</loc>
            ${urls}
            <image:image>
              <image:loc>${baseUrl}${item.path}</image:loc>
              ${caption}
            </image:image>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
        } else {
          return `
          <url>
            <loc>${baseUrl}${item.path}</loc>
            ${urls}
            <lastmod>${item.lastmod}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
        }
      })
      .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}