<demo>常规使用</demo>
<template>
  <Radio :options="options" :radioIndex="radioIndex" @change:index="changeIndex"></Radio>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Radio from '../../lib/Radio.vue'
const state = reactive({
  options: [
    { label: "Apple", value: 1 },
    { label: "Orange", value: 2 },
    { label: "Pear", value: 3 },
    { label: "Disabled", value: 4, disabled: true }
  ],
  radioIndex: ref(1)
})
const { options, radioIndex } = state
const changeIndex = (index: number) => {
  console.log(index)
}
</script>