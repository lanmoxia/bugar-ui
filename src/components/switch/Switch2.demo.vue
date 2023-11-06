<demo>支持 disabled</demo>
<template>
  <Switch v-model:checked="bool" disabled />
</template>

<script setup lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
const bool = ref(false)
</script>
