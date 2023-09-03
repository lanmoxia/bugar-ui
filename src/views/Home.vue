<template>
  <div class="homeWrapper">
    <div class="container">
      <router-link to="/" class="logo">
        <SvgIcon name="logo" />
      </router-link>
      <h1>Bugar UI</h1>
      <h2 class="describe">一 个 简 单 好 用 的 UI 组 件 库</h2>
      <div class="link-button">
        <router-link to="/doc" class="link-item">
          起步
        </router-link>
        <router-link to="/doc" class="link-item">
          <SvgIcon name="go" />
        </router-link>
      </div>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 100" class="transition duration-300 ease-in-out delay-150">
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 161.33333333333331,196 322.66666666666663,192 489,185 C 655.3333333333334,178 826.6666666666667,168 986,170 C 1145.3333333333333,172 1292.6666666666665,186 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none" stroke-width="0" fill="#dfe9f3ff" class="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 100)">
      </path>
    </svg>
    <div class="features">
      <ul>
        <li>
          <SvgIcon name="vue" />
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue3 Composition API</p>
        </li>
        <li>
          <SvgIcon name="typescript" />
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格模式）</p>
        </li>
        <li>
          <SvgIcon name="code" />
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
$buttonBlue: rgb(28 65 99);
$color: rgb(100 131 159);

.homeWrapper {
  background: #FDFDFD;

  & .features {
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

        >svg {
          vertical-align: middle;
          width: 60px;
          height: 60px;
        }

        >h2 {
          font-size: 28px;
        }
      }
    }
  }

  & .container {
    color: $color;
    padding: 60px 0 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to top, #dfe9f3 0%, #f7fbff 100%);

    >.logo {
      >svg {
        width: 60px;
        height: 60px;
      }
    }

    >.link-button {
      background: $buttonBlue;
      color: white;
      letter-spacing: 2px;
      border-radius: 16px;
      box-shadow: 0 3px 5px -3px rgba(4, 14, 23, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      padding: 8px 12px;

      >.link-item {
        display: block;

        >svg {
          vertical-align: middle;
          width: 30px;
          height: 30px;
        }

        &:hover {
          text-decoration: none;
        }
      }
    }

    >h1 {
      color: #1c4163;
      font-size: 80px;
      font-weight: 600;
    }

    >h2 {
      color: rgb(79 102 122);
      font-size: 18px;
      padding: 20px 0 20px 0;
    }
  }

}
</style>