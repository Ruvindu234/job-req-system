import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/job-req-system",
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
};

export default nextConfig;
