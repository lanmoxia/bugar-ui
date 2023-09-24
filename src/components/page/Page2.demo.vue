<demo>更多页码</demo>
<template>
  <Page v-model:currentPage="currentPage" :pageSize="pageSize" :total="total" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Page } from "../../lib/index"
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(4000)
</script>