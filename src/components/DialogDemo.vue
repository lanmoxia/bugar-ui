<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :close-on-click-overlay="false"
            :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>这里加粗的</strong>
        <div>这里正常的</div>
      </template>
      <template v-slot:title>
        <strong>这里是加粗的提示</strong>
      </template>
    </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>
<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import {openDialog} from '../lib/openDialog.ts'
export default {
  components: {Button, Dialog},
  setup(){
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {return false}
    const f2 = () => {}
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好"
      })
    }
    return{x, toggle, f1, f2, showDialog}

  }
}
</script>