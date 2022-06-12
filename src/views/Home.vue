<template>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>布谷 UI</h1>
      <h3 class="describe">一个简简单单的 UI 框架</h3>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 100" class="transition duration-300 ease-in-out delay-150">
    <path d="M 0,400 C 0,400 0,200 0,200 C 161.33333333333331,196 322.66666666666663,192 489,185 C 655.3333333333334,178 826.6666666666667,168 986,170 C 1145.3333333333333,172 1292.6666666666665,186 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#dfe9f3ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 100)">
    </path>
  </svg>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
$buttonBlue: rgb(28 65 99);
$radius: 8px;
$color: rgb(61 87 111);
.topNavAndBanner{
  background-image: linear-gradient(to top, #dfe9f3 0%, #f7fbff 100%);
}
.banner {
  color: $color;
  padding: 130px 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1{
    font-weight: 300;
  }
  > h3{
    padding: 0 0 10px 0;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      padding: 8px;
      background: $buttonBlue;
      font-size: 16px;
      line-height: 16px;
      color: white;
      display: inline-block;
      border-radius: $radius;
      &:hover{
        text-decoration: none;
      }
    }
  }
}

</style>