// app/api/robots/route.ts

export async function GET() {
  const baseUrl = process.env.BASE_URL || "https://aaditya-jha.com.np";

  const robotsTxt = `User-agent: *
Disallow: /api/
Disallow: /terms
Disallow: /privacy
Allow: /ads.txt

# Sitemap references for multiple languages
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-en.xml
Sitemap: ${baseUrl}/sitemap-ne.xml
Sitemap: ${baseUrl}/sitemap-de.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}