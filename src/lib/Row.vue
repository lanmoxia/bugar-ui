<template>
  <div class="bugar-row" :style="rowStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import type { CSSProperties } from 'vue'
const props = defineProps({
  // 间隙
  gutter: {
    type: [String, Number]
  }
})

const { gutter } = props
provide('gutter', gutter)
const rowStyles = computed(() => {
  const gutterValue = Number(gutter)
  return {
    marginLeft: -gutterValue / 2 + "px",
    marginRight: -gutterValue / 2 + "px",
  } as CSSProperties
})
</script>

<style lang="scss">
.bugar-row {
  display: flex;
  flex-wrap: wrap;
}
</style>

