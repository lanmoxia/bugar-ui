<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index" @click="select(t)">{{t}}</div>
    </div>
    <div class="gugu-tabs-content div">
      <!--v-if 和 v-for 不能一起使用 这里用 class 来判断是否选中-->
      <!--然后使用 css 来隐藏没有 selected 的-->
      <component class="gugu-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="c in defaults"
                 :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
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
    // 把 currentSelected 升级为计算属性
    // Vue3 Bug 导致不能解决问题
    const currentSelected = computed(() => {
      return defaults.filter((tag) => {
        return tag["props"].title = props.selected
      })[0]
    })
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
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}
</style>