<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item" v-for="(t, index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="gugu-tabs-content div">
      <component v-for=" (c, index) in defaults" :key="index" :is="c"/>
    </div>
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

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gugu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>