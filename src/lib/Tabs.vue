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
import {onMounted, ref, watchEffect} from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context){
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    // watchEffect 在 onMounted 之前也会执行
    // 这就导致了访问不到 Dom  所以 selectedItem.value 为 null
    // 解决办法就是把 watchEffect 放在 onMounted 中
    // 详情在 vue3 英文文档的 API Reference => Reactivity APIs => watchEffect
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'

        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

    const defaults = context["slots"].default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){
        throw new Error("Tabs 的子标签必须是 Tab")
      }
    })
    const titles = defaults.map((tag) => {
      return tag["props"].title
    })
    const select = (title: string) => {
      context.emit("update:selected", title)
    }
    return {defaults, titles, select, selectedItem, indicator, container}
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