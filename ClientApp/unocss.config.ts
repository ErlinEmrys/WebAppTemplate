import { extractorSvelte } from "@unocss/core";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
import {
	defineConfig, presetTypography, presetWebFonts, transformerDirectives, transformerVariantGroup,
} from "unocss";

export default defineConfig( {
	extractors: [ extractorSvelte ],
	shortcuts: [ [ "foo", "bg-green-500" ], [ "boo", "bg-blue-500" ], [ "goo", "bg-gray-500" ] ],
	presets: [ presetAttributify(), presetWind(), presetTypography(), presetWebFonts( {
		fonts: {
			sans: "DM Sans", serif: "DM Serif Display", mono: "DM Mono",
		},
	} ) ],
	transformers: [ transformerDirectives(), //For using @apply modifier: @apply text-center p-5
		transformerVariantGroup(), //For grouping css variants: hoover:(m-10 text-center) 
	],
} );
