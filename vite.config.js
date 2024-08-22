import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"
dotenv.config()


export default defineConfig({
	plugins: [react()],
	server: {
		port: process.env.VITE_PORT,
		proxy: {
			"/api": {
				target: process.env.VITE_PROXY_TARGET,
			},
		},
	},
	build: {
		outDir: 'dist', // Directory to output the build files
		sourcemap: true, // Generate source maps for easier debugging
		minify: 'esbuild', // Minification strategy (options: 'esbuild', 'terser', false)
		rollupOptions: {
		  input: {
			main: './index.html', // Entry point for the build
		  },
		
		},
	},
});

