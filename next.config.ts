import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
};

export default nextConfig;
