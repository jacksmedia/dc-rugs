import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {nodePolyfills} from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    base: './login',
    plugins: [
        react(),
        ViteImageOptimizer(),
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
        }),
    ],
})
