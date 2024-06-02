import { _ as __nuxt_component_0 } from './nuxt-layout-Cd2FeMKF.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-center text-3xl font-bold leading-8 tracking-tight text-gradient sm:text-4xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_AppTitle = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden bg-gray-50 py-16 lg:py-24"${_scopeId}><div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Frontend Requirements</h2><ul${_scopeId2}><li${_scopeId2}>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \xAB\u041A\u0430\u0442\u0430\u043B\u043E\u0433\xBB \u0438 \xAB\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xBB \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0431\u0435\u0437 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A</li><li${_scopeId2}>\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0438\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0442\u0443\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430.</li><li${_scopeId2}>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 Vue/Nuxt \u0438 TypeScript, Composition API \u0441 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u043E\u043C <code${_scopeId2}>&lt;script setup&gt;</code>, </li><li${_scopeId2}>Pinia c localStorage (\u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043E\u0440\u0437\u0438\u043D\u044B), SCSS \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044E \u0411\u042D\u041C.</li></ul>`);
                } else {
                  return [
                    createVNode("h2", null, "Frontend Requirements"),
                    createVNode("ul", null, [
                      createVNode("li", null, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \xAB\u041A\u0430\u0442\u0430\u043B\u043E\u0433\xBB \u0438 \xAB\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xBB \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0431\u0435\u0437 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A"),
                      createVNode("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0438\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0442\u0443\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430."),
                      createVNode("li", null, [
                        createTextVNode("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 Vue/Nuxt \u0438 TypeScript, Composition API \u0441 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u043E\u043C "),
                        createVNode("code", null, "<script setup>"),
                        createTextVNode(", ")
                      ]),
                      createVNode("li", null, "Pinia c localStorage (\u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043E\u0440\u0437\u0438\u043D\u044B), SCSS \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044E \u0411\u042D\u041C.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden bg-gray-50 py-16 lg:py-24" }, [
                createVNode("div", { class: "relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8" }, [
                  createVNode("div", null, [
                    createVNode(_component_AppTitle, null, {
                      default: withCtx(() => [
                        createVNode("h2", null, "Frontend Requirements"),
                        createVNode("ul", null, [
                          createVNode("li", null, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \xAB\u041A\u0430\u0442\u0430\u043B\u043E\u0433\xBB \u0438 \xAB\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xBB \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0431\u0435\u0437 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A"),
                          createVNode("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0438\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0442\u0443\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430."),
                          createVNode("li", null, [
                            createTextVNode("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 Vue/Nuxt \u0438 TypeScript, Composition API \u0441 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u043E\u043C "),
                            createVNode("code", null, "<script setup>"),
                            createTextVNode(", ")
                          ]),
                          createVNode("li", null, "Pinia c localStorage (\u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043E\u0440\u0437\u0438\u043D\u044B), SCSS \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044E \u0411\u042D\u041C.")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BEUHK9HG.mjs.map
