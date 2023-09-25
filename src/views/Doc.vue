<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <aside class="aside" v-if="menuVisible">
        <h3>Document</h3>
        <div class="doc-wrapper">
          <ol>
            <li><router-link to="/doc/intro">介绍</router-link></li>
            <li><router-link to="/doc/install">安装</router-link></li>
            <li><router-link to="/doc/started">开始</router-link></li>
          </ol>
        </div>
        <h3>Components</h3>
        <div class="components-wrapper">
          <ol>
            <li>
              <h5>Basic</h5>
              <router-link to="/doc/grid">Grid 删格</router-link>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <h5>Form</h5>
              <router-link to="/doc/input">Input 输入框</router-link>
              <router-link to="/doc/radio">Radio 按钮</router-link>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <h5>Data</h5>
              <router-link to="/doc/page">Pager 分页</router-link>
            </li>
            <li>
              <h5>Notice</h5>
              <ul>
                <li>
                  <router-link to="/doc/tabs">Tabs 标签页</router-link>
                </li>
              </ul>
            </li>
            <li>
              <h5>Navigation</h5>
              <ul>
                <li>
                  <router-link to="/doc/select">Select 选择框</router-link>
                </li>
              </ul>
            </li>
            <li>
              <h5>Others</h5>
              <router-link to="/doc/dialog">Dialog 对话框</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import { inject, Ref } from 'vue'

const menuVisible = inject<Ref<boolean>>('menuVisible')
</script>

<style lang="scss" scoped>
$color: #243d54;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav {
    z-index: 999;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #243d54;
    }
  }

  .content {
    display: flex;
    flex-grow: 1;
    margin-top: 80px;
    position: relative;

    main {
      flex-grow: 1;
      padding: 45px 30px;
      margin-top: -40px;
    }

    .aside {
      max-width: 200px;
      position: relative;
      top: -60px;
      left: 0;
      padding-top: 60px;
      color: #243d54;
      z-index: 10;
      background-image: linear-gradient(to top, #fff 0, #f3f8fd 100%);

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: 20;
      }

      h5,
      h3 {
        height: 40px;
        line-height: 40px;
        padding-left: 25px;
      }

      .doc-wrapper,
      .components-wrapper {
        a {
          display: inline-block;
          padding-left: 35px;
          height: 40px;
          line-height: 40px;
          width: 100%;

          &:hover {
            color: #243d54;
            border-bottom: none;
            transition: color ease-in-out 0.35s;
          }
        }
      }

      .components-wrapper>ol>li>h5 {
        color: #2f515d;
      }
    }
  }
}

.router-link-active {
  color: #243d54;
  background-color: #d7e5f1;
  border-right: 3px solid #243d54;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
</style>