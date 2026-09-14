import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "amowvrssevrsklcnlvrm.supabase.co",
      }
    ]
  },
  output: "standalone",
};

export default nextConfig;
