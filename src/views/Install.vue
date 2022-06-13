<template>
  <article class="markdown-body" v-html="md">

  </article>
</template>

<script lang="js">
import md from '../markdown/install.md'
export default {
  data(){
    return {md}
  }
}
</script>