<template>
  <div>
    <div>
      <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    </div>
    <component v-for=" (c, index) in defaults" :key="index" :is="c"/>
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
    const titles = defaults.map((tag) => {
      //console.log({...tag}); // 通过遍历看到属性 props 下有 title
      //console.log(tag["props"].title);// tag.props.title === tag["props"].title
      return tag["props"].title
    })
    return {defaults, titles}
  }
}
</script>