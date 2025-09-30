// app/api/sitemap/route.js

export async function GET() {
  const baseUrl = process.env.BASE_URL || "https://aaditya-jha.com.np";

  // Define your static paths for the sitemap
  const staticPaths = [
    { path: "/", isImage: false }, // Home
    { path: "/privacy", isImage: false }, // Privacy Policy
    { path: "/terms", isImage: false }, // Terms & Conditions
    // Example images (add only if you want to index images)
    { path: "/aaditya.jpg", isImage: true, caption: "Aaditya Profile Image" },
    { path: "/logo.svg", isImage: true, caption: "Website Logo" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${staticPaths
      .map((item) => {
        const imagePath = item.path;
        const priority = item.isImage ? "0.8" : "1.0"; // pages higher priority
        const caption = item.caption ? `<image:caption>${item.caption}</image:caption>` : "";

        if (item.isImage) {
          return `
            <url>
              <loc>${baseUrl}${imagePath}</loc>
              <image:image>
                <image:loc>${baseUrl}${imagePath}</image:loc>
                ${caption}
              </image:image>
              <changefreq>weekly</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        } else {
          return `
            <url>
              <loc>${baseUrl}${imagePath}</loc>
              <changefreq>weekly</changefreq>
              <priority>${priority}</priority>
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