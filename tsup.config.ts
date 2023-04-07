import { defineConfig } from 'tsup';

export default defineConfig((options) => {
	return {
		clean: true,
		dts: true,
		entry: ['src/index.ts'],
		external: ['react'],
		format: ['esm'],
		splitting: false,
		sourcemap: true,
		minify: !options.watch,
		treeshake: true,
	};
});
