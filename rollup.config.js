// parcel.json 中添加代码作用是下载下边插件不会在下载 node-sass 这样下载比较快
// 请先安装 yarn add --dev rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Bugu',
    file: 'dist/lib/bugu.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}
