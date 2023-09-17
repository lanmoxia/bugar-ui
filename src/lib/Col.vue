<template>
  <div :class="colClasses" :style="colStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  // 所占具体空间份数
  span: {
    type: [String, Number]
  },
  // 对应弹性布局flex属性
  flex: {
    type: [String, Number]
  },
  offset: {
    type: [String, Number]
  },
  // 对应弹性布局汇中的order属性
  order: {
    type: [String, Number]
  },
  // 响应式布局属性
  xs: {
    // <576px
    type: [String, Number]
  },
  sm: {
    // ≥576px
    type: [String, Number]
  },
  md: {
    // 	≥768px
    type: [String, Number]
  },
  lg: {
    // 	≥992px
    type: [String, Number]
  },
  xl: {
    // ≥1200px
    type: [String, Number]
  },
  xxl: {
    // 	≥1600px
    type: [String, Number]
  }
})
const gutter = inject('gutter', 0)
const { span, flex, offset, order, xs, sm, md, lg, xl, xxl } = props
const colClasses = computed(() => {
  return [
    "bugar-col",
    xs ? `bugar-col-xs-${xs}` : "",
    sm ? `bugar-col-sm-${sm}` : "",
    md ? `bugar-col-md-${md}` : "",
    lg ? `bugar-col-lg-${lg}` : "",
    xl ? `bugar-col-xl-${xl}` : "",
    xxl ? `bugar-col-xxl-${xxl}` : ""
  ]
})
const colStyles = computed(() => {
  const orderValue = Number(order)
  return {
    flex: span ? `calc(100% / 24 * ${span})` : flex ? flex : "",
    maxWidth: span ? `calc(100% / 24 * ${span})` : "none",
    paddingLeft: gutter / 2 + "px",
    paddingRight: gutter / 2 + "px",
    order: orderValue * 1,
    marginLeft: offset ? `calc(100% / 24 * ${offset})` : ""
  }
})
</script>

<style lang="scss">
@import "./grid.scss"
</style>