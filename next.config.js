/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const ENVS = {
  API_HOST: process.env.API_HOST || "http://localhost:8080",
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"],
  },
  i18n,
  publicRuntimeConfig: ENVS,
};

module.exports = withBundleAnalyzer(nextConfig);
