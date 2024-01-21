/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pocketbase.hive.thebeijinho.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'pocketbase.hive.thebeijinho.com',
    //     port: '',
    //     pathname: '/api/files/**',
    //   },
    // ],
  },
};

export default nextConfig;
