<template>
  <div class="bugar-page">
    <Button theme="nofocus" @click="onPrePage" :disabled="currentPage === 1">
      <SvgIcon class="turnpage-icon" name="prev" color="#595959" />
    </Button>
    <Button v-for="i in pageTotal" @click="changeCurrentPage(i)" :class="{ active: i === currentPage }" :key="i">
      {{ i }}
    </Button>
    <Button theme="nofocus" @click="onNextPage" :disabled="currentPage === pageTotal">
      <SvgIcon class="turnpage-icon" name="next" color="#595959" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { Button } from '../lib/index'
const props = defineProps({
  xxx: {
    type: Boolean
  },
  // 当前页数
  currentPage: {
    type: Number,
    default: 1
  },
  // 每页显示的数据条数
  pageSize: {
    type: Number,
    default: 10
  },
  // 总数据条数
  total: {
    type: Number,
    default: 0
  }
})
130
const emit = defineEmits(['update:currentPage'])

// 总页数
const pageTotal = computed(() => Math.ceil(props.total / props.pageSize))

// 切换当前页数
const changeCurrentPage = (page: number) => {
  if (page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}
// 上一页
const onPrePage = () => {
  if (props.currentPage > 1) {
    changeCurrentPage(props.currentPage - 1)
  }
}
// 下一页
const onNextPage = () => {
  if (props.currentPage < pageTotal.value) {
    changeCurrentPage(props.currentPage + 1)
  }
}
</script>

<style lang="scss">
.bugar-page {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  height: 30px;

  .bugar-button.active {
    border-color: #243d54;
  }

  .bugar-button:hover .turnpage-icon use {
    color: #243d54;
  }

  .bugar-button[disabled] .turnpage-icon use {
    color: rgba(0, 0, 0, 0.25);
  }
}
</style>