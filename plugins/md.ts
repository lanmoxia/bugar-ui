// 首先在 src 外部创建 plugins/md.ts
// 然后需要安装 marked：yarn add --dev marked
// 根目录创建 vite.config.js 导出 md

// @ts-nocheck
import path from 'path'
import * as fs from 'fs';
import { marked } from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    configureServer: [ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => { // koa
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString())
          } else {
            await next()
          }
        })
      },
    ],
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code)
    }]
  }
}
