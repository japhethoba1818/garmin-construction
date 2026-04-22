/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to succeed even if there are errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This ignores linting errors during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;