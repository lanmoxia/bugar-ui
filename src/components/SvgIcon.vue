<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
        <use :href="iconName" />
    </svg>
</template>
  
<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'gray'
    }
})

const { name } = toRefs(props)

const iconName = computed(() => {
    return `#icon-${name.value}`
})
const svgClass = computed(() => {
    if (name.value) return `svg-icon icon-${name.value}`
    return 'svg-color'
})
</script>
  
<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
  
  