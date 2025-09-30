export async function GET() {
  // Define the content of robots.txt with disallowed paths for Terms and Privacy Policy
  const robotsTxt = `User-agent: *
Disallow: /api/
Disallow: /terms
Disallow: /privacy
Allow: /ads.txt
Sitemap: https://aaditya-jha.com.np/sitemap.xml
`;

  // Return the robots.txt content with the correct Content-Type
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}