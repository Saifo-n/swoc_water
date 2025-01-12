// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ข้ามการตรวจสอบ ESLint ในระหว่างการสร้างโปรเจคต์
  },
};

export default nextConfig;
