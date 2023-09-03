// @ts-nocheck
import vue from '@vitejs/plugin-vue'
import fs from "fs"
import { defineConfig } from 'vite'
import { baseParse } from '@vue/compiler-core'
import Markdown from 'vite-plugin-md'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

const vueDemoPlugin = {
  name: "vue-block-demo",
  transform(code, path) {
    if (!/vue&type=demo/.test(path)) { return }
    const filePath = path.split("?")[0]
    const file = fs.readFileSync(filePath).toString()
    const parsed = baseParse(file).children.find((n) => n.tag === "demo")
    const main: string = file.split(parsed.loc.source).join("").trim()
    const title: string = parsed.children[0].content
    return `export default Component => {
			Component.__sourceCode = ${JSON.stringify(main)}
			Component.__sourceCodeTitle = ${JSON.stringify(title)}
		}`
  }
}

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
    vueDemoPlugin,
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})


