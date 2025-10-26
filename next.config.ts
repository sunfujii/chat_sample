import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/chat_sample",
  assetPrefix: "/chat_sample/",
};

export default nextConfig;
