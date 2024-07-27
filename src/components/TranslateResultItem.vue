<template>
  <li @click="copyClick" class="content">
    <i v-if="copyText" :style="{ top: position.top + 'px', left: position.left + 'px' }"> {{ copyText }} </i>
    <span class="code">{{ item.code }}</span>
    <span class="text">{{ item.text }}</span>
    <img src="../assets/images/copy.png" alt="yangyanyin copy">
  </li>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
const props = defineProps<{ item: {code: string, text: string}}>()
const copyText = ref('')
// 定义一个 reactive 对象来存储位置
const position = reactive({
  top: 0,
  left: 0,
});
const copyClick = (event:any) => {
  const { clientX, clientY } = event
  // 设置新的位置
  position.top = clientY + 30
  position.left = clientX + 20

  const textArea:any = document.createElement('textArea')
  textArea.value = props.item.text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  copyText.value = '已复制'
  setTimeout(() => {
    copyText.value = ''
  }, 500)
}
</script>
<style scoped lang="less">
.content {
  i {
    position: fixed;
    top: 50%;
    right: -7%;
    width: 60px;
    text-align: center;
    padding: 4px 0;
    border-radius: 4px;
    font-size: 12px;
    background: #444444;
    color: #fff;
    transform: translateY(-50%);
    opacity: .8;
    &::after {
      content: '';
      position: absolute;
      left: 6px;
      top: -14px;
      width: 0;
      height: 0;
      border-bottom: 8px solid #444;
      border-right: 8px solid transparent;
      border-left: 4px solid transparent;
      border-top: 6px solid transparent;
    }
  }
}

</style>