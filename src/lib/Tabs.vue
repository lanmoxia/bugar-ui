<template>
  <div>
    Tabs 组件
<!--{{defaults}} 这种展示不了 下边方式可以展示-->
    <component :is="defaults[0]"/>
    <component :is="defaults[1]"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context){
    console.log(`{...context}`)
    console.log({...context})
    console.log(`{...context.attrs}`)
    console.log({...context["attrs"]})
    console.log(`{...context.slots}`)
    console.log({...context["slots"]})

    console.log(`{...context.slots.default}`)
    console.log({...context["slots"].default})
    console.log(`{...context.slots.default()}`)
    console.log({...context["slots"].default()})

    console.log({...context["slots"].default()[0]})
    console.log({...context["slots"].default()[1]})
    // 通过 context.slots.default() 的结果 来获取到外部传入的子内容
    const defaults = context["slots"].default()
    console.log(`defaults[0]`);
    console.log((defaults[0].type === Tab)); // 用的是不是 Tab 标签
    return {defaults}
  }
}
</script>