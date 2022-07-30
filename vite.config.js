import {md} from './plugins/md.ts'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
export default {
  // 查看 dist 项目源码 发现打包路径是 / 这里改为相对路径 ./ 或 /bugu-ui-site/
  // vite 的config 默认配置 assets 改为 _assets 这里配置过来
  base: './', // 配置为相对路径  相对/bugu-ui-site/
  assetsDir: 'assets', // 配置 assets
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
          JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${
          JSON.stringify(title)
        }
      }`.trim()
    }
  }
}
