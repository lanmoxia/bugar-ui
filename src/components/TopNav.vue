<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <SvgIcon class="icon" name="logo" />
    </router-link>
    <div class="link-icon">
      <a href="https://github.com/lanmoxia/bugar-ui" target="_blank">
        <SvgIcon name="github" />
      </a>
    </div>
    <div v-if="menuVisible" class="toggleAside" @click="toggleMenu">
      <SvgIcon name="icon-menu" />
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
  padding: 8px 18px;
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

    >svg {
      font-size: 30px;
    }
  }

  >.link-icon {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #243d54;

    >a {
      display: block;

      >svg {
        width: 30px;
        height: 30px;
      }
    }
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