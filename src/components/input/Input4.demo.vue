<demo>前后缀标签</demo>
<template>
  <Input v-model="username" placeholder="username" icon-type="prefix" />
  <Input v-model="password" type="password" placeholder="password" icon-type="suffix" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const username = ref('')
const password = ref('')
</script>