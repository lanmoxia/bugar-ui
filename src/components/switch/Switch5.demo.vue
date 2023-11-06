<demo>支持开关文字</demo>
<template>
  <div>
    <Switch v-model:checked="bool1" bg-color="#f8a1b3" is-text />
    <Switch v-model:checked="bool2" bg-color="#a0d588" is-text />
  </div>
</template>

<script setup lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
const bool1 = ref(true)
const bool2 = ref(false)
</script>
