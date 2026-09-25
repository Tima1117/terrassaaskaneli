import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "terrassaaskaneli.ge" },
      { protocol: "https", hostname: "go.invitetec.app" },
    ],
  },
};

export default nextConfig;
