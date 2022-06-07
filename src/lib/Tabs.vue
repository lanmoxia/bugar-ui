<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index" @click="select(t)">{{t}}</div>
    </div>
    <div class="gugu-tabs-content div">
      <component class="gugu-tabs-content-items" :is="currentSelected"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  // 当切换导航的时候会导致 selected 变化
  // selected 变化以后  在页面挂载的时候 setup 中的 currenSelected 只会计算一次 后边不会在计算
  // 所以导航会切换 导航内的内容不会跟着切换
  setup(props, context){
    const defaults = context["slots"].default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){
        throw new Error("Tabs 的子标签必须是 Tab")
      }
    })
    const titles = defaults.map((tag) => {
      return tag["props"].title
    })
    // 我们只需要知道一个元素有没有 selected 没必要遍历 N 个元素
    // 通过 filter 赛选出有 selected 的元素
    // filter 返回的是一个数组 只有一个元素也会返回数组 所以这里要用 [0]
    const currentSelected = defaults.filter((tag) => {
      return tag["props"].title = props.selected
    })[0]
    // selected 是外部传过来的 不能修改 props 通过事件触发
    const select = (title: string) => {
      context.emit("update:selected", title)
    }
    return {defaults, titles, currentSelected, select}
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