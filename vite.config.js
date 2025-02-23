import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import path from 'path'
import fs from 'fs'
import mdx from '@mdx-js/rollup'

function removeAssets() {
    return {
        name: 'remove-test-assets',
        resolveId (source) {
            return source === 'virtual-module' ? source : null
        },
        renderStart (outputOptions, inputOptions) {
            const outDir = outputOptions.dir
            const testAssetsDir = path.resolve(outDir, 'test')
            fs.rmdir(testAssetsDir, { recursive: true }, () => console.log(`Deleted ${testAssetsDir}`))
            const backupAssetDir = path.resolve(outDir, 'backup')
            fs.rmdir(backupAssetDir, { recursive: true }, () => console.log(`Deleted ${backupAssetDir}`))
        }
    }
}

export default defineConfig({
    // We can’t use import at the top level because vite.config.js is CommonJS, not ESM, and @mdx-js/rollup is ESM only.
    // https://trean.page/posts/2023-08-30-using-mdx-with-vite/
    plugins: [removeAssets(), react(), glsl(), tailwindcss(), mdx()],
//    root: 'src/',
//    publicDir: '../public',
//    base: './',
    server: {
        host: true,
        open: true
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    test: {
        include: ['./tests/**/*.test.js[x]'],
        browser: {
            provider: 'playwright', // 'webdriverio' | 'playwright'
            enabled: true,
            name: 'chromium', // browser name is required
            headless: true, // overridden in CLI
            viewport: { width: 800, height: 800 },
            providerOptions: {}
        }
    },
    resolve: {
        alias: {
            src: ('/src/'),
			tests: ('/tests/')
        }
    },
    allowOnly: true,
    maxConcurrency: 1,
    minWorkers: 1,
    testTimeout: 5000,
    restoreMocks: true,
    sequence: {
      concurrent: false
    }
    /**
     * For the future, you can use resolve and alias to make your paths in your
     * source files work out. For reference:

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      lib: path.resolve(__dirname, './src/lib'),
      scenarios: path.resolve(__dirname, './src/scenarios'),
      testutils: path.resolve(__dirname, './src/tests/testutils')
    },
     */
})

