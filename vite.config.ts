import {defineConfig} from "vite";

export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            // Fix cli-fonts absolute URL in kc-cli stylesheet
            '/cli-fonts': '../cli-fonts',
        }
    },
    assetsInclude: ['**/*.md'],
    server: {
        port: 15000,
    },
})
