// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { manifest } from './src/shared/utils/manifest';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: true,
  site: 'https://example.com',
  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      manifest: {
        ...manifest,
        display: 'standalone', // Ensure this value is compatible with the Display type
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
        navigateFallback: null,
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
    tailwind(), 
    sitemap(),
    compress(),
  ],
  vite: {
    esbuild: {
      target: 'es2020',
    },
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.code === 'EVAL' &&
            warning.id && warning.id.endsWith('vm-browserify/index.js')
          )
            return;
          warn(warning);
        },
      },
    },
    resolve: {
      alias: {
        buffer: 'buffer',
      },
    },
    plugins: [nodePolyfills()],
  },
});