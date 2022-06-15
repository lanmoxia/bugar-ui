<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <img src="../assets/images/logo1.png" alt="logo">
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <img src="../assets/images/menu.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible'); // 相当于 get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
$color: rgb(28 65 99);
.topNav {
  color: $color;
  background-image: linear-gradient(to top, #f3f8fd 0%, #fff 100%);
  display: flex;
  padding: 2px 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #243d54;
  }
  > .logo {
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #243d54;
    border-radius: 50%;
    border: 2px solid white;
    -moz-box-shadow:0 8px 0 #243d54; -webkit-box-shadow:0 8px 0 #243d54; box-shadow:0 8px 0 #243d54;
    > img{
      width: 40px;
      height: 40px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #243d54;
  }

  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    text-align: center;
    > img{
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>