<demo>常规使用</demo>
<template>
  <Input v-model="value" placeholder="placeholder" @update:modelValue="onInput" @onBlur="onBlur" @onFocus="onfocus"
    @onChange="onChange" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')
const onInput = (value: string) => {
  console.log('onInput', value)
}
const onChange = (value: string) => {
  console.log('onChange', value)
}
const onBlur = () => {
  console.log('onBlur')
}
const onfocus = () => {
  console.log('onfocus')
}
</script>