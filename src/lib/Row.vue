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
  },
  direction: {
    type: String,
    validator: function (value: string) {
      return [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
      ].includes(value)
    }
  },

  justify: {
    type: String,
    validator: function (value: string) {
      return [
        "start",
        "end",
        "center",
        "space-around",
        "space-between",
      ].includes(value)
    }
  },

  align: {
    type: String,
    validator: function (value: string) {
      return ["flex-start", "center", "flex-end", "stretch"].includes(value)
    }
  }
})

const { gutter, direction, justify, align } = props
provide('gutter', gutter)
const rowStyles = computed(() => {
  const gutterValue = Number(gutter)
  return {
    marginLeft: -gutterValue / 2 + "px",
    marginRight: -gutterValue / 2 + "px",
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction
  } as CSSProperties
})
</script>

<style lang="scss">
.bugar-row {
  display: flex;
  flex-wrap: wrap;
}
</style>

