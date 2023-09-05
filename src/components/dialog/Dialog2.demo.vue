<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Button, openDialog } from '../../lib/index'
const showDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: '你好',
    ok() {
      console.log('ok')
    },
    cancel() {
      console.log('cancel')
    }
  })
}
</script>
