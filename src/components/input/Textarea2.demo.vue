<demo>自适应</demo>
<template>
  <Input v-model="value" placeholder="autosize" icon-type="textarea" :auto-size="autoSize" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../lib/Input.vue'
const value = ref('')
const autoSize = ref(true)
</script>