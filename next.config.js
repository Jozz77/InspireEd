/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPWA = require('next-pwa')({
    dest: 'public', // Where to generate service-worker.js
  });
  
  module.exports = withPWA({
    // Other Next.js configurations here
  });
  
module.exports = nextConfig
