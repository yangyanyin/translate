import { ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, renderToWebStream } from "vue/server-renderer";
import { defineComponent, useSSRContext, mergeProps, unref, ref, onMounted, createSSRApp } from "vue";
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TranslateResult",
  __ssrInlineRender: true,
  props: {
    translateResult: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p class="tips" data-v-8edd4ddc>点击行可直接复制！</p>`);
      if (_ctx.translateResult.length > 0) {
        _push(`<ul class="result" data-v-8edd4ddc><li class="title" data-v-8edd4ddc><span class="code" data-v-8edd4ddc>语言</span><span class="text" data-v-8edd4ddc>翻译结果</span></li><!--[-->`);
        ssrRenderList(_ctx.translateResult, (item, k) => {
          _push(`<li data-v-8edd4ddc><span class="code" data-v-8edd4ddc>${ssrInterpolate(item.code)}</span><span class="text" data-v-8edd4ddc>${ssrInterpolate(item.text)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TranslateResult.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TranslateResult = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8edd4ddc"]]);
const _imports_0$1 = "/assets/google-BP_lS3tM.png";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-75a09e7e><img${ssrRenderAttr("src", _imports_0$1)} alt="YYY Google 翻译" data-v-75a09e7e><i data-v-75a09e7e>在线翻译</i></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-75a09e7e"]]);
const _imports_0 = "/assets/lang-list-C9E_60Gc.png";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAChFJREFUeF7tnXtsHFcVxr87a9xUquqdDeGNFIjHpk2pKFCpEaIkApWWRymPREg8pNCIxGMnaRFCAkdqqlJMeRU13VmitgkgEKIQEYp4VEhpgAooD1EeaWvP0hQVWhTinY0rtaX2zkHj2MWencedx87uzhz/6Tln7j3f+d1z792duSvAf4VWQBQ6eg4eDEDBIWAAGICCK1Dw8LkCMAAFV6Dg4XMFYAAKrkDBw+cKwAAUXIGCh88VgAEouAIFD58rAANQcAUKHj5XAAZAXoGyMX2NAuUtBFwn75UfSwF81Yb9i6Y+ejQvUUWqAKph3gdgc16CjxnHcUvXtsT07Tk3aQDUAw+/FqWBv/RcBN3oUGvhYmv3BX/tRtNptykNQPmAuVmU4FSAwv9RC1uau7XjeRCCAYiRRQYghmh5cmEA2rOZi3LoAanngpcBcCmVJ0GWQwta8+Qp3lTWAHkShAHwmayLMiIYAAZgUYGiAM9TQMGBZwAYALkdelFKIq8BCj4iGAAGgBeBXgzwFPB/VfL0uQcvAgte8RgABoB3AUWe8rgCcAXItgIsPlqmDLwTAptA9IhQ8LvG2MgRuV4ASf1l2ynKojfTClCpmleQgJPs81YnQhwtlQb00zvXPxmUoKT+ssnn7wI8lEo6ItRqfQKCDgQk4V5L1670u57UP0ryGYCUARi63Xy9ouDXAM4JSoQg7GiMa3e5bZL6R00+A5AyAGqtPgEKHP1LLYqjlj78XnfzSf0ZAH8FMlkDVIz6EQK9TyIRTUvXVLddUn+JdttMkk55cdrshk8mAKjVmVsgxKckAnzQ0rVL2ipAQn+JdhmAMJGSjIhKbeb9ROL7YW047941dO36tgqQ0D+sXa/rSeKN0163fDKpAE5wqlH/AUDXBAWqCPsVs2Oj//KySeofVWAHgCAffjNohToy34698OBjL2215g8DeLuXsET2jc3x0f1+oif1jwpAUewzqwDLglaq5rUkxLsAckbYNBHuV0o41NilPSQjelJ/mTaKZJM5AEUStx9iZQD6IUsd7GNuAHC+JCIMrO2gVj1569ag/bendo6ejtu5vgfAObZGQNlb5JNLiHBIKeHLsuuolbD0PQAVw7y1qGcWrUxk2C7Kr0L0PQCqYVLc8pczv1hnFzEA+aGAAchPLmNFwgDEki0/TgyAK5fHqYUb85Pfs5EEnNTGALgByNOBjsuxBSx6GQAGIPoJpnneBcQaEb0+ZXAFcGUobUEYAB8Fwp6QiSOc10MV5Zp5CRYw5HU/L3sG4HmlYlW8VKaAOMlve4jk7hOD6unBTwL4dPuLI4steAbIAOQAgLJhXi0A56HRNwXA1DMArK09/nKbnv2nX18tXZMeWFEHT9rAS3c07dPCnQowIBaeaJUG9oKgSwjRMwBUjJmbCGKfX58Vmy6bnRh5QCKmyCb5AcCmvUJRrgdovaQKPQOAWjVPQWCdX78FcLihax+TjCuSWdcAcHqpGvWTERIWKTAJ454AYOiguUFpoR7W305NA10FoFwzbxCEdwN4Q5gAHbjeEwCo1fotECTxkot9uaWP/iptHboKwHIwYc/MPx+0Ym8WQrkhugjiSQKm0KJVP8vSC9tA1TCbQNs21Tkuf/V7BALftsa0D0ePPdijJwCQDapcnd4fFQAiOmRDmZobHw4ts2enJd8HQmLti4NiK1dnXieE+JPbRgCbCPiN+/+dmAbSjld6FyCb9JV2EQH4oxA0FeW0kKwB8Hn87AFL1y7zSowQuLIxpt0bRzs/nzwC0BKgqTWluakndr7x6ahipS1IUPuqUX8aoHNX2hBoT1MfOaAa5k8AXOXy/56la9uixhTch3QrXrcrwI+EgqnGLq2tfMqKlhUAqjH9ZkD5ZVv5X8BQY482V/5a/aPCpm+0TQOl4UHsFPOy8YTZpR1vZwEw6rsF6DaPoB6HwJQ1ptXCAg67nrYgvqW3ZlY9PrBaLP/LPp7TAGFrY1wLfTM6LM6gNpauxVrzdBSApUOdVs+BQhykljLVnHj1P2SDzrIkBsy9LQDKqvLveqHVZxq4x9K196QRayfWPB0FwOlwxTC3EuhtQiiDRLjb0od/mpYYnRDEq2/q7dPvgKL82H3NVpRLz+za8Ifl/5d9Kl5r8Lm1czs2NtKIO+2K13EA0gi62xWgbJh3CuBaVz9WlX/n2vnV+nBJkOnuLwmxvTk2/PU0tGAAXCqmLYg7SesPn1xz5pmFZ9qS6nOegc808DNL19w7hFg8pB0vV4CQNFRq5jYifNfDLOjHMttOFyF7fn1z4sLE6x4GIOMKoNbMb4HwoVjDdYUTQexp6sNBB2VKNcEAZAjAebeZ614wgFNSmQkxEsCxhq69Nem9GIAMATh7HA3uTJq0ZX8xgIsaH9dOJLkfA5AhAKph/hDA1a4mHySynf8H/nl/CWZPWvro58J8s9z18CLQR+2hOx57lTI//6jHlm5vc2zY69PNVaZq1TwGgS0u/7atY1QYuAJkVAHKhnmdAG51J0gsffYflrhyzfyIIHyzzR/Y1NC134b5+11nADICQDXMY0DbCP6PpWsvkk2eT7KmLF37jOw93HYMQAYAqMajFwOtP7cnib5o6SMSj4Od9Swb5rQARlz3ecjStY0MQFwFMgCgbNT3CdBN7i4qRBfOjo88LNt11TCdl1zaFn3CpisaEyM/l73PSjuuAFkA4HNOcNTzgddVT75k3l54jVeio95r+R4MQAYAxBmZWfkwAAyA36lovfdASBajIu0RkUWfk7SRdrz8QVCSbHTBlwHgKYCngE5ui7owqCM1yRWAKwBXANkKEGlodcqYcEaBcvPs+Ibfu5tQDfO+GM36/ZYR7wJiiJmVy7MEcXPz1H+/gP0bn1vxoY4DQOCPU0XoIAMQQawumYr7AfF5S9+w+Ij5UgVgAJJkI2BRlOS2HfUV5LwtpXyJBDlfFzMASdTu8qkl8btO9AiE+HdaABBwpKlrH4jaof7/IKg6MwkhPhs18LzZE9H25vhI5JdP+h6AxdPLFGwFsDXo4Ka8JXxFPMdB4sgCzX/nqYkLZqPG2fcARA04S3u1Wp+EoEkAq84UkOhDrBW9xH3bTBiAOKpF8Flbnb7UhjIJgShvCDMAETTuC1O19vcx2K19EOJlEh1mACRE6jsT54zBUguTBGwP6TwD0HfZjdBhtVb/IGhxbXCRjxsDEEHPvjQ9/ysnKsqawUkBfMIdAAF3NXVtRxaB8SIwC5UD2lg8RkfBJAiXL5mdEAq2xfkZ2DihMABxVOuAj2rUryKyX2yfc+49cztemcpxMjLdZABkVMqxDQOQ4+TKhMYAyKiUYxsGIMfJlQmNAZBRKcc2DECOkysTGgMgo1KObRiAHCdXJjQGQEalHNswADlOrkxoDICMSjm2YQBynFyZ0BgAGZVybMMA5Di5MqExADIq5diGAchxcmVC+x+CoVnbgrVX4gAAAABJRU5ErkJggg==";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    openLangs: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "side-bar" }, _attrs))} data-v-e39a403f><span data-v-e39a403f><img${ssrRenderAttr("src", _imports_0)} alt="Langs" data-v-e39a403f> 支持语言列表</span><ul data-v-e39a403f><!--[-->`);
      ssrRenderList(unref(langs), (item, k) => {
        _push(`<li class="${ssrRenderClass({ "select": _ctx.openLangs.includes(item.code) })}" data-v-e39a403f>${ssrInterpolate(item.lang)} `);
        if (_ctx.openLangs.includes(item.code)) {
          _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-e39a403f>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
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
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e39a403f"]]);
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
      _push(`<div class="main" data-v-7b69c9a1><div class="content" data-v-7b69c9a1>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<textarea class="${ssrRenderClass([{ remind: remind.value }, "textarea"])}" data-v-7b69c9a1>${ssrInterpolate(translateText.value)}</textarea><button class="${ssrRenderClass([{ load: loading.value }, "btn"])}" data-v-7b69c9a1>`);
      if (loading.value) {
        _push(`<span data-v-7b69c9a1></span>`);
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
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b69c9a1"]]);
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
