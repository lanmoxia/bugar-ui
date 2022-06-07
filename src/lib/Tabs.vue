<template>
  <div>
    Tabs 组件
    <!--TabDemo 中嵌套了 Tab 嵌套了内容 这里不能使用插槽-->
    <component v-for=" c in defaults" :is="c"/>
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