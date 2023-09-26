<template>
	<svg :class="svgClass" :style="{ color, width: size, height: size }">
		<use :href="iconName" :fill="color" />
	</svg>
</template>
  
<script setup lang="ts">
import { computed } from 'vue'

const { name } = defineProps({
	name: String,
	color: {
		type: String,
		default: 'gray'
	},
	size: {
		type: String,
		default: '18px'
	}
})

const iconName = computed(() => {
	return `#icon-${name}`
})
const svgClass = computed(() => {
	if (name) return `svg-icon icon-${name}`
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
  
  