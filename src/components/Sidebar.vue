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
        <img v-if="openLangs.includes(item.code)" src="../assets/images/selected.png">
        <img v-else src="../assets/images/unselected.png">
        {{ item.lang }}
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
    padding: 12px 12px 50px;
    height: calc(100% - 65px);
    overflow: auto;
    li {
      position: relative;
      display: flex;
      gap: 0 10px;
      align-items: center;
      // justify-content: space-between;
      padding: 4px 10px;
      line-height: 28px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
      &:hover, &.select {
        color: #222;
        img {
          opacity: 1;
        }
      }
      img {
        display: block;
        width: 20px;
        opacity: .5;
      }

    }
  }
}
</style>