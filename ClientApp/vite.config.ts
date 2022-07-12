import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import AutoImport from "unplugin-auto-import/vite";
import UnoCss from "unocss/vite";
import { windi } from 'svelte-windicss-preprocess';

// https://vitejs.dev/config/
export default defineConfig( {
	build: {
		rollupOptions: {
			input: {
				app: "./src/Index.html",
			},
		}, outDir: "../dist",
	},

	server: {
		open: "Index.html",
	},

	root: "src",

	publicDir: "Public",

	resolve: {
		alias: {
			"~/": `${ path.resolve( __dirname, "src" ) }/`,
		},
	},

	plugins: [ UnoCss(), svelte( {
		preprocess: windi({})
	}), AutoImport( {
		// targets to transform
		include: [ /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.svelte$/, // .svelte
		],

		// global imports to register
		imports: [ // presets
			{
				"~/Utils/Log": [ [ "Log", "Log" ] ],
			} ],

		// Filepath to generate corresponding .d.ts file.
		// Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
		// Set `false` to disable.
		dts: "./AutoImports.d.ts",

		// Generate corresponding .eslintrc-auto-import.json file.
		// eslint globals Docs -
		// https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
		eslintrc: {
			enabled: true, // Default `false`
			filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' |
											// 'writable' | 'writeable')
		},
	} ) ],
} );

