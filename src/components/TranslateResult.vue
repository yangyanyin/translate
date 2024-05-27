<template>
  <ul class="result" v-if="translateResult.length > 0">
    <li class="title">
      <span class="code">语言</span>
      <span class="text">翻译结果</span>
    </li>
    <li v-for="(item, k) in translateResult" :key="k">
      <span class="code">{{ item.code }}</span>
      <span class="text">{{ item.text }} <button @click="copyClick(item.text)">COPY</button> </span>
    </li>
  </ul>
</template>
<script lang="ts" setup>
defineProps<{ translateResult: Array<any> }>()

const copyClick = (text:string) => {
  const textArea:any = document.createElement('textArea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}
</script>
<style scoped lang="less">

.result {
  margin-top: 50px;
  border: 1px solid #ddd;
  border-bottom: none;
  li {
    position: relative;
    border-bottom: 1px solid #ddd;
    padding-left: 100px;
    font-size: 14px;
    height: 40px;
    &.title {
      background: #eaeaea;
      font-size: 16px;
      padding-left: 100px;
    }
    span {
      display: inline-block;
      padding: 0 10px;
    }
    .code {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100px;
      text-align: center;
      border-right: 1px solid #ddd;
      transform: translateY(-50%);
    }
    .text {
      width: calc(100% - 100px);
      line-height: 40px;
    }
    button {
      position: absolute;
      top: 6px;
      right: 10px;
      height: 28px;
      width: 50px;
      cursor: pointer;
      background: #6d9eeb;
      color: #fff;
      border-radius: 4px;
      box-shadow: 1px 1px 2px #000;
      &:active {
        box-shadow: 2px 2px 3px #000;
      }
    }
  }
}
</style>