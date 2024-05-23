import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, renderToWebStream } from "vue/server-renderer";
import { defineComponent, ref, onMounted, mergeProps, unref, useSSRContext, createSSRApp } from "vue";
import axios from "axios";
import "qs";
const _imports_0 = "/assets/google-BP_lS3tM.png";
const langs = [
  {
    lang: "中文(简体)",
    code: "zh-CN"
  },
  {
    lang: "中文(繁体)",
    code: "zh-TW"
  },
  {
    lang: "英语 (en)",
    code: "en"
  },
  {
    lang: "德语 (de)",
    code: "de"
  },
  {
    lang: "阿拉伯语 (ar)",
    code: "ar"
  },
  {
    lang: "法语 (fr)",
    code: "fr"
  },
  {
    lang: "希腊语 (el)",
    code: "el"
  },
  {
    lang: "西班牙语 (es)",
    code: "es"
  },
  {
    lang: "意大利语 (it)",
    code: "it"
  },
  {
    lang: "日语 (ja)",
    code: "ja"
  },
  {
    lang: "韩语 (ko)",
    code: "ko"
  },
  {
    lang: "荷兰语 (nl)",
    code: "nl"
  },
  {
    lang: "葡萄牙语 (pt)",
    code: "pt"
  },
  {
    lang: "瑞典语 (sv)",
    code: "sv"
  },
  {
    lang: "泰语 (th)",
    code: "th"
  },
  {
    lang: "希伯来语(iw|he)",
    code: "iw"
  }
];
axios.defaults.baseURL = "/";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10001;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
      }
      return Promise.reject(error.response);
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const translateText = ref("");
    const translateResult = ref([]);
    const openLangs = ref(["zh-CN", "zh-TW", "en", "iw"]);
    const loading = ref(false);
    const remind = ref(false);
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-1c543141><header data-v-1c543141><img${ssrRenderAttr("src", _imports_0)} alt="Google 翻译" data-v-1c543141><i data-v-1c543141>翻译</i></header><textarea class="${ssrRenderClass([{ remind: remind.value }, "textarea"])}" data-v-1c543141>${ssrInterpolate(translateText.value)}</textarea><div class="lang" data-v-1c543141><!--[-->`);
      ssrRenderList(unref(langs), (item, k) => {
        _push(`<span class="${ssrRenderClass({ "open": openLangs.value.includes(item.code) })}" data-v-1c543141>${ssrInterpolate(item.lang)} <i data-v-1c543141></i></span>`);
      });
      _push(`<!--]--></div><button class="${ssrRenderClass([{ load: loading.value }, "btn"])}" data-v-1c543141>`);
      if (loading.value) {
        _push(`<span data-v-1c543141></span>`);
      } else {
        _push(`<!--[-->翻译<!--]-->`);
      }
      _push(`</button>`);
      if (translateResult.value.length > 0) {
        _push(`<ul class="result" data-v-1c543141><li class="title" data-v-1c543141><span class="code" data-v-1c543141>语言</span><span class="text" data-v-1c543141>翻译</span></li><!--[-->`);
        ssrRenderList(translateResult.value, (item, k) => {
          _push(`<li data-v-1c543141><span class="code" data-v-1c543141>${ssrInterpolate(item.code)}</span><span class="text" data-v-1c543141>${ssrInterpolate(item.text)} <button data-v-1c543141>copy</button></span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c543141"]]);
function createApp() {
  const app = createSSRApp(App);
  return { app };
}
function render() {
  const { app } = createApp();
  const ctx = {};
  const stream = renderToWebStream(app, ctx);
  return { stream };
}
export {
  render
};
