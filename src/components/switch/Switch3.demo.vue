<demo>支持 size</demo>
<template>
  <div>
    <Switch v-model:checked="bool" size="small" />
    <Switch v-model:checked="bool" size="normal" />
    <Switch v-model:checked="bool" size="big" />
  </div>
</template>

<script setup lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
const bool = ref(false)
</script>
