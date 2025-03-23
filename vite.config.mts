import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';

const repoName = "partas-solid-githubactions-mdx";

// https://vitejs.dev/config/
export default defineConfig({
    // clearScreen: false,
    server: {
        watch: {
            ignored: [
                "**/*.md" , // Don't watch markdown files
                "**/*.fs" , // Don't watch F# files
                "**/*.fsx"  // Don't watch F# script files
            ]
        }
    },
    base: `/${repoName}/`,
    build: {
        outDir: "dist",
    },
    plugins: [
        solidPlugin(),
        tailwindcss(),
        mdx({
            jsxImportSource: 'solid-jsx',
            remarkPlugins: [remarkGfm]
        })
    ],
})