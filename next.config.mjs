import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { remotePatterns: [{ hostname: '**', protocol: 'https' }] },
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/registration/',
                destination: 'https://ilshaw.site/api/',
            },
        ]
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/registration/",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }

}

export default withNextIntl(nextConfig)
