/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    turbopack: {}, // 🔥 fix for your current error

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aaditya-jha.com.np",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "localhost",
                pathname: "/**",
            },
        ],
        formats: ["image/webp", "image/avif"],
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    async rewrites() {
        return [
            {
                source: "/privacy",
                destination: "/pages/privacy",
            },
            {
                source: "/terms",
                destination: "/pages/terms",
            },
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
            {
                source: "/robots.txt",
                destination: "/api/robots",
            },
        ];
    },

    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
            };
        }
        return config;
    },

    compress: true,

    experimental: {
        scrollRestoration: true,
    },

    productionBrowserSourceMaps: false,
};

module.exports = nextConfig; // 🔥 IMPORTANT FIX