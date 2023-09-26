<demo>前后缀标签</demo>
<template>
  <Input v-model="username" placeholder="username" iconName="username" iconColor="#d9d9d9" iconPosition="iconLeft" />
  <Input v-model="password" type="password" placeholder="password" iconName="password" iconColor="#d9d9d9" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const username = ref('')
const password = ref('')
</script>