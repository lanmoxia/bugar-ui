<demo>迷你版</demo>
<template>
  <Page v-model:currentPage="currentPage" size="small" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Page } from "../../lib/index"
const currentPage = ref()
</script>