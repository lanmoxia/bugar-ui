<template>
<!--  vue3 的 template 支持多个标签-->
  <div>hi</div>
  <Test/>
</template>

<script>
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {
    Test
  }
}
</script>
