import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePath: [path.join(process.cwd(), "src/styles")],
    quietDeps: true
  }
};

export default nextConfig;
