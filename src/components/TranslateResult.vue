<template>
  <p class="tips">点击行可直接复制！</p>
  <ul class="result" v-if="translateResult.length > 0">
    <li class="title">
      <span class="code">语言</span>
      <span class="text">翻译结果</span>
    </li>
    <TranslateResultItem v-for="(item, k) in translateResult" :key="k" :item="item" />
  </ul>
</template>
<script lang="ts" setup>
import TranslateResultItem from './TranslateResultItem.vue'
defineProps<{ translateResult: Array<any> }>()
</script>
<style scoped lang="less">
.tips {
  margin-top: 17px;
  font-size: 12px;
  color: #ea4235;
}
.result {
  height: calc(100vh - 400px);
  margin-top: 10px;
  border: 1px solid #ddd;
  border-bottom: none;
  box-shadow: 0 0 12px #dfdfdf;
  background: #fff;
  overflow: auto;
  border-radius: 5px;
  li, :deep(.content) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding: 0 14px 0 100px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #ececec;
    }
    &.title {
      background: #444;
      font-size: 16px;
      padding-left: 100px;
      color: #fff;
    }
    span {
      display: inline-block;
      padding: 10px;
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
      display: flex;
      width: calc(100% - 100px);
      line-height: 22px;
    }
    img {
      display: block;
      width: 20px;
      height: 20px;
    }
  }
}
</style>