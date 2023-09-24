<demo>简洁版</demo>
<template>
  <Page v-model:currentPage="currentPage" theme="border" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Page } from "../../lib/index"
const currentPage = ref()
</script>