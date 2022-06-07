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
    // 通过 context.slots.default() 的结果 来获取到外部传入的子内容
    const defaults = context["slots"].default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){
        throw new Error("Tabs 的子标签必须是 Tab")
      }
    })
    return {defaults}
  }
}
</script>