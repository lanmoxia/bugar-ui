<template>
  <div class="bugar-col" :style="colStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  // 所占具体空间份数
  span: {
    type: [String, Number],
  },
  // 对应弹性布局flex属性
  flex: {
    type: [String, Number],
  }
})
const gutter = inject('gutter', 0)
const { span, flex } = props
const colStyles = computed(() => {
  return {
    flex: span ? `calc(100% / 24 * ${span})` : flex ? flex : "",
    maxWidth: span ? `calc(100% / 24 * ${span})` : "none",
    paddingLeft: gutter / 2 + "px",
    paddingRight: gutter / 2 + "px"
  }
})
</script>

<style lang="scss">
$columns: 24;

@for $i from 1 through $columns {
  .bugar-col-xs-#{$i} {
    flex: calc(100% / $columns * #{$i});
    max-width: calc(100% / $columns * #{$i});
  }
}
</style>