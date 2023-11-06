<demo>支持背景色</demo>
<template>
  <div>
    <Switch v-model:checked="bool" bg-color="#348b89" />
    <Switch v-model:checked="bool" bg-color="#9fd9d3" />
    <Switch v-model:checked="bool" bg-color="#f8a1b3" />
    <Switch v-model:checked="bool" bg-color="#a0d588" />
  </div>
</template>

<script setup lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
const bool = ref(false)
</script>
