<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue'
const props = defineProps({
  toggleMenuButtonVisible: {
    type: Boolean,
    default: false
  }
})
const menuVisible = inject<Ref<boolean>>('menuVisible', ref(false))
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}
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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #243d54;
  }

  >.logo {
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #243d54;
    border-radius: 50%;
    border: 2px solid white;
    -moz-box-shadow: 0 8px 0 #243d54;
    -webkit-box-shadow: 0 8px 0 #243d54;
    box-shadow: 0 8px 0 #243d54;

    >svg {
      width: 40px;
      height: 40px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #243d54;
  }

  >.toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    text-align: center;

    >svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>