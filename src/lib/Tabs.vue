<template>
  <div class="bugar-tabs" :class="{ 'bugar-tabs-column': isColumn, 'bugar-tabs-button': isButton }">
    <div class="bugar-tabs-nav" :class="{ 'bugar-tabs-nav-column': isColumn }" ref="container">
      <div class="bugar-tabs-nav-item" :class="{ selected: t === selected }" v-for="(t, index) in titles" :key="index"
        :ref="el => { if (t === selected) selectedItem = el }" @click="select(t)">{{ t }}</div>
      <div class="bugar-tabs-nav-indicator"
        :class="{ 'nav-indicator-column': isColumn, 'bugar-indicator-none': isButton }" ref="indicator"></div>
    </div>
    <div class="bugar-tabs-content" :class="{ 'tabs-content-row': isColumn }">
      <component class="bugar-tabs-content-item" :class="{ selected: c.props && c.props.title === selected }"
        v-for="c in defaults" :is="c" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from './Tab.vue'
import { onMounted, ref, watchEffect, useSlots } from 'vue'

const props = defineProps({
  selected: {
    type: String,
    default: "导航2"
  },
  isColumn: {
    type: Boolean,
    default: false
  },
  isButton: {
    type: Boolean,
    default: false
  }
})

const selectedItem = ref()
const indicator = ref()
const container = ref()

const emit = defineEmits(['update:selected'])
const computeIndicatorPosition = () => {
  if (selectedItem.value) {
    const selectedItemRect = selectedItem.value.getBoundingClientRect()
    const containerRect = container.value.getBoundingClientRect()

    if (props.isColumn) {
      const { height } = selectedItemRect
      indicator.value.style.height = height + 'px'
      const top = selectedItemRect.top - containerRect.top
      indicator.value.style.top = top + 'px'
    } else {
      const { width } = selectedItemRect
      indicator.value.style.width = width + 'px'
      const left = selectedItemRect.left - containerRect.left
      indicator.value.style.left = left + 'px'
    }
  }
}
onMounted(() => {
  watchEffect(() => {
    computeIndicatorPosition()
  })
})

const slots = useSlots()
const defaults = slots && slots.default ? slots.default() : []

defaults.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error("Tabs 的子标签必须是 Tab")
  }
})
const titles = defaults.map((tag) => {
  return tag.props!.title
})
const select = (title: string) => {
  emit("update:selected", title)
}
</script>

<style lang="scss">
$blue: rgb(36, 61, 84);
$color: #333;
$border-color: #d9d9d9;

.bugar-tabs {
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
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }

  &-column {
    display: flex;

    .bugar-tabs-nav-column {
      display: flex;
      flex-direction: column;
      border-bottom: none;
      border-right: 1px solid $border-color;
      margin-right: 8px;

      .nav-indicator-column {
        left: calc(100% - 1px);
        width: 3px;
      }

      .bugar-tabs-nav-item {
        padding: 0;
        margin: 8px;
      }
    }
  }

  &.bugar-tabs-button {

    .bugar-tabs-nav {
      .bugar-indicator-none {
        background: transparent;
      }
    }

    .bugar-tabs-nav-item {
      border: 1px solid #e4e7ed;
      padding: 8px 10px;
      margin: 0;
      border-bottom: none;

      &:not(:last-child) {
        margin-right: -1px;
      }

      &.selected {
        background: $blue;
        color: white;
        transition: all 350ms;
      }

      &:first-child {
        padding: 8px;
      }
    }
  }
}
</style>
