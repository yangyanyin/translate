<template>
  <!-- 侧边栏 -->
  <Sidebar @changeOpenLangs="changeOpenLangs" :openLangs="openLangs"/>
  <div class="main">
    
    <div class="content">
      <!-- 头部 -->
      <Header />

      <textarea class="textarea" @focus="focus" :class="{remind: remind}" v-model="translateText"></textarea>
      <button class="btn" :class="{load: loading}" @click="submitTranslate">
        <span v-if="loading"></span>
        <template v-else>翻译</template>
      </button>

      <!-- 翻译结果 -->
      <TranslateResult v-if="translateResult.length > 0" :translateResult="translateResult"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getTranslateApi } from './api/api'
import TranslateResult from './components/TranslateResult.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
const translateText = ref('')
const translateResult:any = ref([])
const openLangs = ref(['zh-CN', 'zh-TW', 'en'])
const loading = ref(false)
const remind = ref(false)


const changeOpenLangs = (code: string) => {
  const index = openLangs.value.indexOf(code)
  if (index >= 0) {
    openLangs.value.splice(index, 1)
  } else {
    openLangs.value.push(code)
  }
}

const submitTranslate = () => {
  if (translateText.value === '') {
    remind.value = true
    return
  }
  if (loading.value) {
    return
  }
  const params = {
    langs: JSON.stringify(openLangs.value),
    text: translateText.value
  }
  loading.value = true
  getTranslateApi(params).then((res:any) => {
    translateResult.value = res.data
    loading.value = false
  })
}


const focus = () => {
  remind.value = false
}

onMounted(() => {})

</script>

<style scoped lang="less">
.main {
  margin: auto;
  padding: 0 40px 0 270px;
  .content {
    max-width: 900px;
    margin: auto;
  }
  .textarea {
    display: block;
    width: 100%;
    height: 200px;
    padding: 15px;
    font-size: 16px;
    font-family: auto;
    color: #444;
    box-shadow: 0px 0px 12px #dfdfdf;
    border-radius: 5px;
    background: #fff;
    &.remind {
      border-color: #f1435a;
    }
  }
}
.btn {
  position: relative;
  display: block;
  width: 120px;
  height: 34px;
  margin-top: 30px;
  line-height: 34px;
  border: none;
  font-size: 14px;
  border-radius: 3px;
  text-align: center;
  background: #ea4235;
  color: #fff;
  cursor: pointer;
  padding: 0;
  &.load {
    background: #5c5c5c;
  }
  span {
    position: absolute;
    left: 50px;
    top: 7px;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 100%;
    border-top-color: #5c5c5c;
    animation:  rotate 1s infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>