<demo>支持 disabled</demo>
<template>
  <Input v-model="value" placeholder="disabled" disabled />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
</script>