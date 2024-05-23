import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                form: resolve(__dirname, "src/form/form.html"),
            },
        },
    },
});
