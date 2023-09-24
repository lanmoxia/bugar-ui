<template>
  <div class="bugar-page">
    <Button :theme="computedTheme" :size="size" @click="prePage" :disabled="currentPage === 1">
      <SvgIcon :iconSize="iconSize" class="turnpage-icon" name="prev" color="#595959" />
    </Button>

    <!--  总页数小于8的  -->
    <template v-if="pageTotal < 8">
      <Button :theme="computedTheme" :size="size" v-for="i in pageTotal" @click="changeCurrentPage(i)"
        :class="{ active: i === currentPage }" :key="i">
        {{ i }}
      </Button>
    </template>
    <!--总页数大于8的-->
    <template v-else>
      <Button :theme="computedTheme" :size="size" :class="{ active: currentPage === 1 }"
        @click="changeCurrentPage(1)">1</Button>
      <Button :theme="computedTheme" :size="size" v-show="currentPage >= 5" @click="showMorePagesPrev()">
        <SvgIcon :iconSize="iconSize" name="ellipsis" />
      </Button>
      <!--显示当前页附近的5个页数-->
      <Button :theme="computedTheme" :size="size" v-for="i in showPages" @click="changeCurrentPage(i)"
        :class="{ active: i === currentPage }" :key="i">
        {{ i }}
      </Button>
      <Button :theme="computedTheme" :size="size" v-show="currentPage < pageTotal - 3" @click="showMorePagesNext()">
        <SvgIcon :iconSize="iconSize" name="ellipsis" />
      </Button>
      <Button :theme="computedTheme" :size="size" :class="{ active: currentPage === pageTotal }"
        @click="changeCurrentPage(pageTotal)">
        {{ pageTotal }}
      </Button>
    </template>

    <Button :size="size" :theme="computedTheme" @click="nextPage" :disabled="currentPage === pageTotal">
      <SvgIcon :iconSize="iconSize" class="turnpage-icon" name="next" color="#595959" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '../lib/index'
const props = defineProps({
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
    default: 200
  },
  size: String,
  theme: String
})

const emit = defineEmits(['update:currentPage'])

// 计算 theme 主题
const computedTheme = computed(() => {
  if (props.theme) {
    return props.theme
  }
  if (props.currentPage === 1 || props.currentPage === pageTotal.value) {
    return 'nofocus'
  } else {
    return 'border'
  }
})

// 计算 icon size
const iconSize = computed(() => props.size === 'small' ? '12px' : '16px')

// 总页数
const pageTotal = computed(() => Math.ceil(props.total / props.pageSize))

// 要显示的页数数组
const showPages = computed(() => {
  let pages
  if (props.currentPage < 5) {
    // 当前页在前三页时，显示2到6
    pages = [2, 3, 4, 5, 6, 7]
  } else if (props.currentPage > pageTotal.value - 4) {
    // 当前页在后三页时，显示倒数第6到倒数第2
    pages = [
      pageTotal.value - 6,
      pageTotal.value - 5,
      pageTotal.value - 4,
      pageTotal.value - 3,
      pageTotal.value - 2,
      pageTotal.value - 1
    ]
  } else {
    // 其他情况，显示当前页前后两个页数
    pages = [
      props.currentPage - 2,
      props.currentPage - 1,
      props.currentPage,
      props.currentPage + 1,
      props.currentPage + 2
    ]
    // 如果当前页是偶数，而且总页数也是偶数，那么向右移动一个页数，避免出现没有选中项的情况
    if (props.currentPage % 2 === 0 && pageTotal.value % 2 === 1) {
      pages = pages.map((page) => page + 1)
    }
  }
  return pages
})

// 上一页省略号
const showMorePagesPrev = () => {
  if (props.currentPage > 4) {
    changeCurrentPage(showPages.value[0] - 2)
  }
}

// 下一页省略号
const showMorePagesNext = () => {
  if (props.currentPage < pageTotal.value - 3) {
    changeCurrentPage(showPages.value[showPages.value.length - 1] + 1)
  }
}

// 上一页
const prePage = () => {
  if (props.currentPage > 1) {
    changeCurrentPage(props.currentPage - 1)
  }
}
// 下一页
const nextPage = () => {
  if (props.currentPage < pageTotal.value) {
    changeCurrentPage(props.currentPage + 1)
  }
}

// 切换当前页数
const changeCurrentPage = (page: number) => {
  if (page !== props.currentPage) {
    emit('update:currentPage', page)
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

  .bugar-button:hover svg use {
    color: #243d54;
  }

  .bugar-button[disabled] svg use {
    color: rgba(0, 0, 0, 0.25);
  }
}
</style>