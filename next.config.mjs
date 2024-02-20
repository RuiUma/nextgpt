/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    experimental: {
        serverComponentsExternalPackages: ['sequelize', 'pino', 'pino-pretty']
    }
};

export default nextConfig;
