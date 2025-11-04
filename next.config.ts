import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  allowedDevOrigins: [
    '172.30.1.32', // 접근하려는 IP 주소
    '*.local',     // 예: myapp.local
  ],
};

export default nextConfig;
