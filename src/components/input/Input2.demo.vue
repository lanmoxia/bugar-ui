<demo>清除功能</demo>
<template>
  <Input v-model="value" placeholder="clear" iconName="clear" iconSize="22px" @onClear="clear" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
const value = ref('')
const clear = () => {
  console.log('clear')
}
</script>