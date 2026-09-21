import type { MetadataRoute } from "next";

const siteUrl = "https://aaditya-jha.com.np";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],

        sitemap: `${siteUrl}/sitemap.xml`,
    };
}