<demo>基础用法</demo>
<template>
  <Page v-model:currentPage="currentPage" :pageSize="pageSize" :total="total" @update:currentPage="changePage" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Page } from "../../lib/index"
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(50)
const changePage = (page: number) => {
  console.log(page)
}
</script>