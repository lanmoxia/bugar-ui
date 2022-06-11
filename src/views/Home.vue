<template>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>咕 咕 UI</h1>
      <h2>咕 咕 UI 框 架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
$green:#02bcb0;
$radius: 4px;
$color: rgb(1 157 147);
.topNavAndBanner{
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $radius;
      &:hover{
        text-decoration: none;
      }
    }
  }
}

</style>