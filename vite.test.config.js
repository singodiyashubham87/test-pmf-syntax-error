import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: 'spec/test.Spec.js',
      output: {
        dir: path.resolve(__dirname, 'dist'),
        entryFileNames: 'test.js',
        format: 'iife'
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('development'),
          preventAssignment: true
        }),
        resolve({
          extensions: ['.js', '.jsx'],
          preferBuiltins: true
        }),
        commonjs({
          include: /node_modules/,
          requireReturnsDefault: 'auto'
        }),
        babel({
          babelHelpers: 'bundled',
          presets: ['@babel/preset-env', '@babel/preset-react'],
          extensions: ['.js', '.jsx'],
          exclude: 'node_modules/**'
        }),
        terser()
      ]
    }
  }
});