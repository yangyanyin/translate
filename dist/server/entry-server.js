import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass, renderToWebStream } from "vue/server-renderer";
import { defineComponent, ref, reactive, mergeProps, useSSRContext, unref, onMounted, createSSRApp } from "vue";
import axios from "axios";
import "qs";
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
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAx9JREFUeF7tm0/oTUEUxz+/hcJSWShiQaIQC0sWSuyUkhQpG0uxYEEShUKRhY2VfpKyUVJKysqGYkH+FcmfsrJB2Xhf5tXt9ebembnvzrvv3TN1F7/3mzlnznfOmTln7vfO0PE203H7MQDMAzqOQEgIrAVWAKtahtUr4C3wos68qgA4CaysoyDD2NfAqVQ9ZQAcALakCs487iFwPUWnD4B1wFEn8CXw2D0pOpoaswnQs9opOA88j1XmA2AvsN0JuwPoaWPbCehRuw/ciJ2kD4DjBWT3xArN3P9mwVPPxOo2ADyImQdMcAiscaeXNu83wIeysJjGELgMLHRG/+klcbPAAx8I0whA8WTo233OlzHmBGA+cNjN6BLwM3bH9vQfdgosAjYA610o/waU1X4alJETANUSJ9wETgPK5UfRyo7BXcAOp+RWD5S7XQNAe4H2BLWnwMWuASB7SxOlaQ8BA8A8wELA9gDbBMvK5VGcAvOAZYEZTTERChmiQuZXRceq+4DGPaBYOocYFdNHFV3VJYcBUHEj1LgHqMhZGrissSHwMaBoGrsHBNr+78VK7mLIMkHLBC0TtEyw8VPANsFABOwUsGOw43mAiqYjLlx0OVlV5ARGVvku36Y8INSg2H4TkwrHGhba3wAYdzUYulJN9TMPMA/4j4Dv9igpFS6+Yr7WQoZYP5zEEjvo/vCRuZIAEDv0WMG19Ca3bUwxLZLS6z5NzscBSAJAtk8CS7TvCWVs0WQAJHwS2KJVLNFaAAgEsUYVEqEXn00dd4NydWEqonQVO7Q2ALkMakKPFu2sEzyUSVrFFvdNSvyb3YBiL4mk3IS1Q2RuA/a5368ATwb7pAJwCNjohKnC+5rJoFg1V4EFbpAIWt9GBcDWHgFxvxMmHt692Jll6F/MZZ4BF4bpTPUAvQzVRwpzXAYmRuYj4HsGw8pULHcfeGwGFhc6Dl19/T8VAI0tesGY7S5VX0r3rwOAtOp41H4wt4UIyCNvAz/K5lYXAMle4hiZ+rBK117jbF+Ad8B74HPIREYBQIie1vYxAFq7NJkmZh6QCejWqvkLedwqUB508B0AAAAASUVORK5CYII=";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TranslateResultItem",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const copyText = ref("");
    const position = reactive({
      top: 0,
      left: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-96b3520c>`);
      if (copyText.value) {
        _push(`<i style="${ssrRenderStyle({ top: position.top + "px", left: position.left + "px" })}" data-v-96b3520c>${ssrInterpolate(copyText.value)}</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="code" data-v-96b3520c>${ssrInterpolate(_ctx.item.code)}</span><span class="text" data-v-96b3520c>${ssrInterpolate(_ctx.item.text)}</span><img${ssrRenderAttr("src", _imports_0$2)} alt="yangyanyin copy" data-v-96b3520c></li>`);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TranslateResultItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TranslateResultItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-96b3520c"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TranslateResult",
  __ssrInlineRender: true,
  props: {
    translateResult: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p class="tips" data-v-ec2641c1>点击行可直接复制！</p>`);
      if (_ctx.translateResult.length > 0) {
        _push(`<ul class="result" data-v-ec2641c1><li class="title" data-v-ec2641c1><span class="code" data-v-ec2641c1>语言</span><span class="text" data-v-ec2641c1>翻译结果</span></li><!--[-->`);
        ssrRenderList(_ctx.translateResult, (item, k) => {
          _push(ssrRenderComponent(TranslateResultItem, {
            key: k,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TranslateResult.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TranslateResult = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ec2641c1"]]);
const _imports_0$1 = "/assets/google-BP_lS3tM.png";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-9796c15b><img${ssrRenderAttr("src", _imports_0$1)} alt="YYY Google 翻译" data-v-9796c15b><i data-v-9796c15b>在线翻译</i></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9796c15b"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA8VJREFUeF7tW09IVEEc/uYZ9OfYoVNB0f4jT5WuBAV66pIdAiMKJYgsCCEIIYgoIfpDERQRGBGVUWR08tLNpYLYUSEEc2eekJTQqVNEWfmm3vpWR91577m+3Nl19rhv3rzv++Y33/z7DcEK/5EVzh9GABMBK1wB0wXCBEAq3tAuiNgNYA+AzWHeKWOZcQBviCBvc3b2XhCOwAhIxtODINgZVJGWzwWGmE3r/LD5CpBMpHsBtGhJLjyoF4zTg6riSgESiYZWAvE4/Hf0LSlA2jjP9hRDqBRgfusLoMtxSO/YWPaDvlSBWKxhm2WJln/ELko4lVHgJ8BnABsLlRDHacqNDWZ0Jl/AlorVNQrL6pewTjBONy02AoT8AuM00DB1EieZSIfC7xcBoSrQibSMxQhgIsB0gVBd2HiAysTCmogxQU0VCNuAFdcFUql0IpejPEj3qhPAneLW1IirEGiGEBlmDzT5iVBVAnjz+14C1BZIO0Jst+2B90v1MO27QDHyAL5N/lq3YXw887OqBVCQd7eyu3Kcyqu9BTpUfBdQkYcgl5idPV/VJqgiL4DLnNNzQeTd5xUbAeqWxzVm07NhyFesAEryRNxgbKAzLPmyCFC7dVfsd82fTgLSLkAeWpa4EmbCUiDlY3g3c5yeWQz5sgiQiqc7BMHtGaACQ9aqqebR0aEvQeB9DO8Ws7Ong94v9nzZPaDIPhzcGdvqtZP7hoeHv6tI+BjeHc5pRynkyxIB7kdTiYaXAuLAHNAEfYzR/cWIKFse5C7j2VOlki+bAPkPx9OvQLBXBi+AZ5zTw/J/asNDN2P05FLIl1UA7+OvvXPEWR5klpi65XGfcXp8qeTLLkAeQLJ+CILsmNcdrk9N5UeIOQubfBmBB8ymx6Igr4UAHoicq8W87jAir+qmueMR5/RoVOS1EcAD8glA0VOZacLiCeMDrVGS10oAD8xXAOsXkCR4yhg9EjV57QTwAP0AsEZyxeeMZw/9D/JaCpAHFa/vB3F3dUjG78w+ClGWfSYYBego6zACmLNBczZozgZlT1EleGi/LV6qMRoTNCZoTNCYoDFBSYFSRoGPcmb4lENqdc8SLfDNH6VbYkTiP8443VJsRPEbBt084Zl1upsqazlORvdsUXd32rGsRgJckAj3ME7bFiWAd0egu9RxWKf3iCAnVHcH/NPlK/muQKEFAu4MBOb/VvidAd+7Aq5GgQK4hby7A80AdskZ5DqFuYRlAsA7AdKnuiMg4w4lgKZEI4FlBIhExgquxERABTdeJNBXfAT8BWC+b1/4VU9HAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAiBJREFUeF7tW0FKw1AQfT9eQ0GhtkWXlhZBoR7AZd21Sz2Gegxd2l1degAFBWmoS6VJCwp6DfM10OJH8pPpJo70ufUnefNm5r1fmDFY8j+z5PGDBLAClpwBtoCkAOqbrWNr7B6AfQDrkmf+8MwbgHtjzcN4MrwswlFYAbXN5ggGO0UvUvl/i6doEjbysOUSUKs2BwA6KoOTg7qO4vDId9xLQLXa6hrYK/l39J60ML04HvazEHoJ+J19C5wniRlMp8MXvaEClUprKwhs5zuwMwentwryCHgHsDp/iUmSg/F0dKc5+Dm2eqXRtkFw62D9iOJwbdEKsO4DURwWCqYmcmrVpgh/XgWIXqApaBcLCWAFsAVELUwN8ImYVEQogkoZkCaQLcAW8DAgLSGlHQApfrYAW4AtkM2AtIeoAUoZkCaQIkgRpAhSBDMZkIqIUg3kTVCaQLoAXYAuQBegC2QxIFVR2qBSBqQJpA3SBmmDtEHaIG0wgwGpjSh1Qf4cliaQ9wDeA3gP8N4DXt3J8M/EbGufEp1Hkk6LrgT22YnsLYrDjaxI8zQgnRPuzh9KR2WDJLnTPi2aTokmQdA2wKkTcD+Kw95CBMx2BC602twiuIw1J77dgfxx+f+8K/BTurk7A4Xzv/98ZyB3VyDlqJCA9NBsd+AQwK47Qb5IGZZ49gPAo4W58e0IuFhEBJQIvvRPkYDSKVf2QVaAsoSUDmfpK+ALUqKwUAX11hoAAAAASUVORK5CYII=";
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
    lang: "希伯来语(he)",
    code: "he"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    openLangs: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "side-bar" }, _attrs))} data-v-d238dc3b><span data-v-d238dc3b><img${ssrRenderAttr("src", _imports_0)} alt="Langs" data-v-d238dc3b> 支持语言列表</span><ul data-v-d238dc3b><!--[-->`);
      ssrRenderList(unref(langs), (item, k) => {
        _push(`<li class="${ssrRenderClass({ "select": _ctx.openLangs.includes(item.code) })}" data-v-d238dc3b>`);
        if (_ctx.openLangs.includes(item.code)) {
          _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-d238dc3b>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_2)} data-v-d238dc3b>`);
        }
        _push(` ${ssrInterpolate(item.lang)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d238dc3b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const translateText = ref("");
    const translateResult = ref([]);
    const openLangs = ref(["zh-CN", "zh-TW", "en"]);
    const loading = ref(false);
    const remind = ref(false);
    const changeOpenLangs = (code) => {
      const index = openLangs.value.indexOf(code);
      if (index >= 0) {
        openLangs.value.splice(index, 1);
      } else {
        openLangs.value.push(code);
      }
    };
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Sidebar, {
        onChangeOpenLangs: changeOpenLangs,
        openLangs: openLangs.value
      }, null, _parent));
      _push(`<div class="main" data-v-15b72c78><div class="content" data-v-15b72c78>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<textarea class="${ssrRenderClass([{ remind: remind.value }, "textarea"])}" data-v-15b72c78>${ssrInterpolate(translateText.value)}</textarea><button class="${ssrRenderClass([{ load: loading.value }, "btn"])}" data-v-15b72c78>`);
      if (loading.value) {
        _push(`<span data-v-15b72c78></span>`);
      } else {
        _push(`<!--[-->翻译<!--]-->`);
      }
      _push(`</button>`);
      if (translateResult.value.length > 0) {
        _push(ssrRenderComponent(TranslateResult, { translateResult: translateResult.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15b72c78"]]);
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
