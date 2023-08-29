declare module '*.vue' {
  import type { ComponentOptions } from '@vue/runtime-core'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from '@vue/runtime-core'
  const Component: ComponentOptions
  export default Component
}
