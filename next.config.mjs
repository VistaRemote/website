import path from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: websiteRoot,
  },
}

export default nextConfig
