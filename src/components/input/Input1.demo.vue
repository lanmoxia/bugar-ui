<demo>常规使用</demo>
<template>
  <Input v-model="value" placeholder="placeholder" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')

</script>