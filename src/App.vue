<template>
<!--  vue3 的 template 支持多个标签-->
  <div>
    导航栏 |
    <router-link to="/">Test</router-link>
    |
    <router-link to="/test2">Test2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
