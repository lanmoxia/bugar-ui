<template>
  <div>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
      <Button @click="xxx" @focus="xxx" @mouseover="xxx" size="big">
        你好
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(){
    const xxx = () => {
      console.log('hi');
    }
    return {xxx}
  }
}
</script>