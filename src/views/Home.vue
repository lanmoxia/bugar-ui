<template>
    <div class="homeWrapper">
      <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>布谷 UI</h1>
        <h2 class="describe">一 个 简 单 好 用 的 UI 组 件 库</h2>
        <router-link to="/doc">开始吧</router-link>
      </div>
    </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 100" class="transition duration-300 ease-in-out delay-150">
      <path d="M 0,400 C 0,400 0,200 0,200 C 161.33333333333331,196 322.66666666666663,192 489,185 C 655.3333333333334,178 826.6666666666667,168 986,170 C 1145.3333333333333,172 1292.6666666666665,186 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#dfe9f3ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 100)">
      </path>
    </svg>
      <div class="features">
        <ul>
          <li>
            <img src="../assets/images/vue.png" alt="vue">
            <h3>基于 Vue 3</h3>
            <p>使用了 Vue3 Composition API</p>
          </li>
          <li>
            <img src="../assets/images/ts.png" alt="ts">
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格模式）</p>
          </li>
          <li>
            <img src="../assets/images/easy.png" alt="easy">
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
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
$buttonBlue: rgb(28 65 99);
$color:rgb(100 131 159);
.homeWrapper{
  background: #FDFDFD;
  & .features{
    color: #243d54;
    margin: 0 auto 20px;
    >ul {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;
      align-items: center;
      >li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
        >img {
          width: 64px;
          height: 64px;
        }
        >h2 {
          font-size: 28px;
        }
      }
    }
  }
  & .topNavAndBanner{
    background-image: linear-gradient(to top, #dfe9f3 0%, #f7fbff 100%);
  }
  & .banner {
    color: $color;
    padding: 100px 0 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h1{
      color: #1c4163;
      font-size: 50px;
      font-weight: 200;
    }
    > h2{
      color: rgb(79 102 122);
      font-size: 20px;
      padding: 0 0 10px 0;
    }
    > a{
        margin: 0 8px;
        padding: 8px 11px;
        background: $buttonBlue;
        line-height: 15px;
        color: white;
        display: inline-block;
        border-radius: 16px;
        letter-spacing: 2px;
        box-shadow: 0 3px 5px -3px rgba(4,14,23,1);
        &:hover{
          text-decoration: none;
        }
      }
  }
}


</style>