<demo>清除功能</demo>
<template>
  <Input v-model="value" placeholder="clear" iconType="clear" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')
</script>