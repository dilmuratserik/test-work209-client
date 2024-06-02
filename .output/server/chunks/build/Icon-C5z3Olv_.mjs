import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent, toRef, isRef } from 'vue';
import { u as useAppConfig } from './config-mIhkd6Vu.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.class) != null ? _a3 : "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-e660a7a7></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-e660a7a7>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e660a7a7"]]);

export { Icon as default };
//# sourceMappingURL=Icon-C5z3Olv_.mjs.map
