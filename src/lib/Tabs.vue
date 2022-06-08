<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index"
           :ref="el => {if(el) navItems[index] = el}" @click="select(t)"
        >{{t}}</div>
      <div class="gugu-tabs-nav-indicator"></div>
    </div>
    <div class="gugu-tabs-content div">
      <component class="gugu-tabs-content-item" :class="{selected: c.props.title === selected}"
                 v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, ref, onMounted} from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context){
    const navItems = ref([])
    // 挂载后通过三个点操作符可以看到 navItems.value 是两个导航
    onMounted(() => {
      console.log({...navItems.value});
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
    const currentSelected = computed(() => {
      return defaults.filter((tag) => {
        return tag["props"].title = props.selected
      })[0]
    })
    const select = (title: string) => {
      context.emit("update:selected", title)
    }
    return {defaults, titles, currentSelected, select, navItems}
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