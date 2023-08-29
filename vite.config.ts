// @ts-nocheck
import Vue from '@vitejs/plugin-vue'
import fs from "fs"
import { defineConfig } from 'vite'
import { baseParse } from '@vue/compiler-core'
const mdPlugin = require('vite-plugin-markdown')

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
    Vue(),
    mdPlugin.plugin({
      mode: ['html']
    }),
    vueDemoPlugin
  ]
})


