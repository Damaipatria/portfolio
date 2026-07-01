import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "amowvrssevrsklcnlvrm.supabase.co",
      }
    ]
  }
};

export default nextConfig;
