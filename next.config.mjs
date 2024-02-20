/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize', 'pino', 'pino-pretty']
    }
};

export default nextConfig;
