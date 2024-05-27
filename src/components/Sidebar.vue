<template>
  <div class="side-bar">
    <span><img src="../assets/images/lang-list.png" alt="Langs" /> 支持语言列表</span>
    <ul>
      <li
        v-for="(item, k) in langs"
        :key="k"
        :class="{'select': openLangs.includes(item.code)}"
        @click="$emit('changeOpenLangs', item.code)"
        >
        {{ item.lang }}
        <img v-if="openLangs.includes(item.code)" src="../assets/images/translate-foreign.png">
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import langs from '../config/langs'
defineProps<{ openLangs: Array<any> }>()

</script>
<style scoped lang="less">
.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  text-align: left;
  background: #f6f6f7;
  height: 100%;
  span {
    display: flex;
    align-items: center;
    padding: 20px 0;
    gap: 0 8px;
    margin: 0 12px;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #e2e2e3;
    img {
      display: block;
      width: 20px;
    }
  }
  ul {
    margin-top: 12px;
    padding: 0 12px;
    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 10px;
      line-height: 28px;
      font-size: 14px;
      cursor: pointer;
      &.select {
        color: #1196db;
      }
      img {
        display: block;
        width: 20px;
      }

    }
  }
}
</style>