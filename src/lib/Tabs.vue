<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav" ref="container">
      <div class="gugu-tabs-nav-item"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index"
           :ref="el => {if(t === selected) selectedItem = el}" @click="select(t)"
        >{{t}}</div>
      <div class="gugu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gugu-tabs-content div">
      <component class="gugu-tabs-content-item" :class="{selected: c.props.title === selected}"
                 v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, ref, onMounted, onUpdated} from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context){
    //优化前：通过 navItems【:ref="el => {if(el) navItems[index] = el}"】遍历找到选中项
    //优化后：直接定义选中项即可 【:ref="el => {if(t === selected) selectedItem = el}"】
    // 直接在 selectedItem 中获取宽度 不需要再遍历
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'

      const {left: left1} = container.value.getBoundingClientRect()// gugu-tabs-nav 的 left
      const {left: left2} = selectedItem.value.getBoundingClientRect()//选中项的 left
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
    const defaults = context["slots"].default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){
        throw new Error("Tabs 的子标签必须是 Tab")
      }
    })
    const titles = defaults.map((tag) => {
      return tag["props"].title
    })
    const currentSelected = computed(() => {
      return defaults.filter((tag) => {
        return tag["props"].title = props.selected
      })[0]
    })
    const select = (title: string) => {
      context.emit("update:selected", title)
    }
    return {defaults, titles, currentSelected, select, selectedItem, indicator, container}
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms ;
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