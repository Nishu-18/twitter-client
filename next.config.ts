import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode:false,
  images:{
    domains:["avatars.githubusercontent.com","lh3.googleusercontent.com","nishu-twitter.s3.ap-south-1.amazonaws.com"]
  }
  /* config options here */
};

export default nextConfig;
