<demo>自适应</demo>
<template>
  <Input v-model="value" placeholder="autosize" inputType="textarea" :auto-size="autoSize" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
const autoSize = ref(true)
</script>