"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: [
            { find: "@", replacement: "/src" },
            { find: "@components", replacement: "/src/components" },
            { find: "@pages", replacement: "/src/pages" },
            { find: "@assets", replacement: "/src/assets" },
        ],
    },
});
