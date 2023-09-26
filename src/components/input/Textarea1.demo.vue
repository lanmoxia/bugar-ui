<demo>文本输入</demo>
<template>
  <Input v-model="value" placeholder="textarea" inputType="textarea" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
</script>