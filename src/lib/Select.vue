<template>
  <div class="bugar-select-wrapper" ref="selectWrapper">
    <template v-if="multiple">
      <div class="selected-item" :class="{ 'selected-item-multiple': showOptions }" @input="handleInput"
        @click="toggleOptions">

        <template v-if="refOptions.length === 0">
          <div class="counterfeit-placeholder">
            {{ placeholder }}
          </div>
        </template>

        <template v-for="( item, index ) in refOptions" :key="index">
          <div class="selected-item-label">
            {{ item }}
            <span class="selected-icon-remove" @click.stop="removeSelectedItem(index)">
              <SvgIcon name="clear" size="12px"></SvgIcon>
            </span>
          </div>
        </template>
        <SvgIcon class="multiple-icon-down" :class="{ 'multiple-icon-inversion': iconIsUp }" name="down" size="14px">
        </SvgIcon>
      </div>

    </template>

    <template v-else>
      <div class="input-icon-box">
        <Input v-model="refOptions" readonly
          v-bind="{ placeholder, disabled, iconName, iconSize, iconColor, iconPosition }" @click="toggleOptions" />
        <span v-if="isIcon" class="icon-down">
          <SvgIcon :class="{ 'icon-inversion': iconIsUp }" name="down" color="#737373" size="14px"></SvgIcon>
        </span>
      </div>
    </template>
    <transition name="slide">
      <ul class="bugar-options" v-show="showOptions">
        <li class="bugar-options-item"
          :class="{ 'bugar-item-disabled': item.disabled, 'option-selected': item.isSelected }"
          v-for="( item, index ) in  options " :key="index" @click="toggleItem(item)">
          <span>{{ item.label }}</span>
          <span>{{ item.value }}</span>
          <SvgIcon v-if="multiple && item.isSelected" name="selected" color="#1c4163"></SvgIcon>
        </li>
      </ul>
    </transition>
  </div>
</template> 


<script setup lang="ts">

import { PropType, ref, watch, onMounted, onUnmounted } from 'vue'
import { Input } from '../lib/index'

type OptionItem = {
  label: string,
  value?: string,
  disabled?: boolean,
  isSelected?: boolean
}

const props = defineProps({
  options: {
    type: Array as PropType<OptionItem[]>,
    default: () => []
  },
  placeholder: {
    type: String,
    default: "请选择"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isIcon: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Array<string>,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: false
  },
  iconName: String,
  iconSize: String,
  iconColor: String,
  iconPosition: String
})

const refOptions = ref<string[]>([])
const showOptions = ref(false)
const iconIsUp = ref(false)
const selectWrapper = ref<HTMLElement | null>(null)
const emit = defineEmits(['selected:option', 'update:modelValue'])

onMounted(() => {
  document.addEventListener('click', handleGlobalClick);
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
})

const handleGlobalClick = (e: MouseEvent) => {
  const selectElement = selectWrapper.value
  if (selectElement && !selectElement.contains(e.target as Node)) {
    showOptions.value = false
  }
}


const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  target.style.height = "auto"
  target.style.height = `${target.scrollHeight}px`
}

const removeSelectedItem = (index: number) => {
  if (index !== -1) {
    props.options[index].isSelected = false
    refOptions.value.splice(index, 1)
    emit('update:modelValue', refOptions.value)
  }
}

const toggleOptions = () => {
  if (!props.disabled) {
    showOptions.value = !showOptions.value
    iconIsUp.value = !iconIsUp.value
  }
}

const toggleItem = (item: OptionItem) => {
  if (!item.disabled) {
    if (props.multiple) {
      item.isSelected = !item.isSelected
      const selectedLabels = props.options.filter(option => option.isSelected).map(option => option.label)
      refOptions.value = selectedLabels
      emit('update:modelValue', selectedLabels)
    } else {
      props.options.forEach((option) => {
        option.isSelected = false
      })
      item.isSelected = true
      refOptions.value = [item.label]
      showOptions.value = false
      iconIsUp.value = false
      emit('selected:option', item.value)
    }
  }
}

watch(() => props.modelValue, (newValue) => {
  if (props.multiple) {
    const selectedOptions = props.options.filter(option => newValue.includes(option.label))
    selectedOptions.forEach(option => {
      option.isSelected = true
    })
    refOptions.value = selectedOptions.map(option => option.label)
  } else {
    const selectedOption = props.options.find(option => option.value === newValue[0])
    if (selectedOption) {
      selectedOption.isSelected = true
      refOptions.value = [selectedOption.label]
    }
  }
})
</script> 

<style lang="scss"> .bugar-select-wrapper {
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   overflow: visible;

   .selected-item {
     width: 215px;
     min-height: 36px;
     white-space: wrap;
     padding: 2px 26px 2px 6px;
     border: 1px solid #d9d9d9;
     margin-bottom: 8px;
     border-radius: 4px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
     position: relative;
     z-index: 1;

     .counterfeit-placeholder {
       color: rgba(0, 0, 0, 0.55);
     }

     .multiple-icon-down {
       position: absolute;
       right: 6px;
       top: 50%;
       transform: translateY(-50%);
       z-index: 2;
       transition: transform 0.3s ease;

       &.multiple-icon-inversion {
         transform: translateY(-50%) rotate(-180deg);
       }
     }

     &:hover {
       border-color: #c0c4cc;
     }

     &.selected-item-multiple {
       transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
       border-color: #1c4163;
     }

     .selected-item-label {
       margin-right: 3px;
       padding: 2px 6px;
       margin-bottom: 3px;
       color: #909399;
       font-size: 12px;
       background-color: #f2f2f3;
       position: relative;
       border-radius: 4px;
       display: flex;
       align-items: center;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: normal;

       &:nth-child(n) {
         margin-top: 3px;
       }

       .selected-icon-remove {
         width: 12px;
         height: 12px;
         border-radius: 50%;
         text-align: center;
         cursor: pointer;
         vertical-align: middle;
         background-color: #c0c4cc;
         display: flex;
         align-items: center;
         margin-left: 3px;

         &:hover svg use {
           transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
           color: white;
         }
       }
     }
   }

   .input-icon-box {
     position: relative;
     display: inline-flex;
     align-items: center;
     cursor: pointer;

     .icon-down {
       position: relative;
       right: 12px;
       top: -2px;
       transition: transform 0.3s ease;

       &.icon-inversion {
         transform: rotate(180deg);
       }
     }
   }

   .bugar-options {
     width: 100%;
     white-space: nowrap;
     background-color: white;
     position: absolute;
     top: 100%;
     left: 0;
     display: inline-flex;
     flex-direction: column;
     border-radius: 4px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
     z-index: 1;
     overflow: hidden;

     .bugar-options-item {
       padding: 5px 12px;
       line-height: 22px;
       color: rgba(0, 0, 0, 0.65);
       cursor: pointer;
       background-color: #fff;
       transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
       white-space: nowrap;
       position: relative;
       display: flex;
       align-items: center;
       display: flex;
       justify-content: space-between;

       &:first-child {
         border-top-left-radius: 4px;
         border-top-right-radius: 4px;
       }

       &:last-child {
         border-bottom-left-radius: 4px;
         border-bottom-right-radius: 4px;
       }

       &:hover:not(.option-selected) {
         background: #1c4163;
         color: white;
       }

       &.bugar-item-disabled {
         color: rgba(0, 0, 0, 0.15);
         cursor: not-allowed;

         &:hover {
           background: none;
           color: rgba(0, 0, 0, 0.15);
         }
       }

       &.option-selected {
         color: #1c4163;
         font-weight: 600;
       }
     }
   }
 }

 .slide-enter-from,
 .slide-leave-to {
   transform: scaleY(0);
   opacity: 0;
 }

 .slide-enter-active,
 .slide-leave-active {
   transition: all 0.35s ease;
   transform-origin: 50% 0%;
 }


 .slide-enter-to,
 .slide-leave-from {
   transform: scaleY(1);
   opacity: 1;
 }
</style>