/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["picsum.photos", "replicate.delivery", "techbriefly.com", "tjzk.replicate.delivery"],
    },
};

module.exports = nextConfig;
