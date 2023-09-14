<demo>文本输入</demo>
<template>
  <Input v-model="value" placeholder="textarea" icon-type="textarea" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')
</script>