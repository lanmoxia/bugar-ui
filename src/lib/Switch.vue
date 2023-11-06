<template>
  <button class="bugar-switch" @click="toggle" :class="classes" :style="{ background: bgColor }">
    <span class="round"></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "normal"
  },
  bgColor: {
    type: String,
    default: "#bfbfbf"
  },
  isText: {
    type: Boolean,
    default: false
  }
})
const { size, bgColor, isText } = props
const classes = computed(() => {
  return {
    [`bugar-checked`]: props.checked,
    [`bugar-size-${size}`]: size,
    [`bugar-before`]: props.isText
  }
})
const emit = defineEmits(['update:checked'])
const toggle = () => {
  emit('update:checked', !props.checked)
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.bugar-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: calc(#{$h} / 2);
  position: relative;

  &.bugar-before {
    &::before {
      content: "on";
      position: absolute;
      top: 0;
      right: 5px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: $h;
    }

    &.bugar-checked::before {
      content: "off";
      right: 0;
      left: -19px;
      color: #fff;
      font-size: 14px;
      line-height: $h;
    }
  }



  &+& {
    margin-left: 8px;
  }

  .round {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc(#{$h2} / 2);
    transition: all 250ms;
  }

  &.bugar-checked {
    background: rgb(36, 61, 84);

    .round {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    .round {
      width: $h2 + 4px;
    }
  }

  &.bugar-checked:active {
    .round {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &.bugar-size-small {
    height: calc($h - 4px);
    width: calc($h - 4px) * 2;
    border-radius: calc(#{$h} - 4px) / 2;

    &.bugar-before {
      &::before {
        content: "on";
        line-height: 18px;
        font-size: 12px;
      }

      &.bugar-checked::before {
        content: "off";
        line-height: 18px;
        font-size: 12px;
        right: -5px;
      }
    }

    .round {
      border-radius: calc((#{$h2} - 4px) / 2);
      height: calc($h2 - 4px);
      width: calc($h2 - 4px);
    }

    &.bugar-checked {
      .round {
        left: calc(100% - #{$h2} - -2px);
      }
    }

    &:active {
      .round {
        width: $h2;
      }
    }

    &.bugar-checked:active {
      .round {
        width: $h2;
        margin-left: -8px;
      }
    }
  }

  &.bugar-size-big {
    height: calc($h + 4px);
    width: calc($h + 4px) * 2;
    border-radius: calc(#{$h} + 4px) / 2;

    &.bugar-before {
      &::before {
        content: "on";
        line-height: 26px;
        font-size: 16px;
      }

      &.bugar-checked::before {
        content: "off";
        line-height: 26px;
        font-size: 16px;
      }
    }

    .round {
      border-radius: calc((#{$h2} + 4px) / 2);
      height: calc($h2 + 4px);
      width: calc($h2 + 4px);
    }

    &.bugar-checked {
      .round {
        left: calc(100% - #{$h2} - 6px);
      }
    }

    &:active {
      .round {
        width: calc($h2 + 4px);
      }
    }

    &.bugar-checked:active {
      .round {
        width: $h2 + 4px;
        margin-left: 4px;
      }
    }
  }
}
</style>
