import { _ as __nuxt_component_0 } from './nuxt-layout-Cd2FeMKF.mjs';
import { ref, watch, useSSRContext, defineComponent, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc } from './server.mjs';
import axios from 'axios';
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

const useProductStore = defineStore("productStore", {
  state: () => {
    return {
      products: ref([]),
      cartList: ref([])
    };
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8001/api/products");
        this.products = response.data.data.map((item) => ({
          id: item.id,
          name: item.name,
          price: parseFloat(item.price)
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    alreadyAdded(item) {
      return this.cartList.value.findIndex((el) => el.id === item.id) !== -1;
    },
    addToCart(item) {
      if (!this.alreadyAdded(item)) {
        this.cartList.value.unshift(item);
      }
    }
  },
  getters: {
    count: (state) => state.products.value.length,
    totalPrice: (state) => state.cartList.value.reduce((total, product) => total + product.price, 0),
    isEmptyCart: (state) => state.cartList.value.length === 0
  }
});
async function createOrder(order) {
  try {
    const response = await axios.post("http://127.0.0.1:8001/api/orders", order);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: ref(JSON.parse(localStorage.getItem("cartItems") || "[]"))
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    removeFromCart(productId) {
      const index = this.cartItems.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        this.saveCart();
      }
    },
    clearCart() {
      this.cartItems = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    async createOrder() {
      const order = {
        items: this.cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      };
      try {
        const response = await createOrder(order);
        this.clearCart();
        return response;
      } catch (error) {
        console.error("Failed to create order:", error);
        throw error;
      }
    }
  },
  getters: {
    totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }
});
watch(() => useCartStore().cartItems, (newCartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(newCartItems));
}, { deep: true });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    products: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(props.products, (product) => {
        _push(`<div class="product-card"><h3 class="mt-4 text-sm text-gray-700">${ssrInterpolate(product.name)}</h3><p class="mt-1 text-lg font-medium text-gray-900">$${ssrInterpolate(product.price.toFixed(2))}</p>`);
        ssrRenderSlot(_ctx.$slots, "default", { product }, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "QuickAccess",
  __ssrInlineRender: true,
  props: {
    showQuickAccess: { type: Boolean }
  },
  emits: ["update:quickaccess"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      if (props.showQuickAccess) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "quick-access-wrapper" }, _attrs))} data-v-f050ed6a><div class="quick-access-overlay" data-v-f050ed6a></div><div class="quick-access-panel" data-v-f050ed6a><div class="quick-access-header" data-v-f050ed6a><h2 data-v-f050ed6a>Cart</h2><button data-v-f050ed6a>Close</button></div><div class="quick-access-content" data-v-f050ed6a>`);
        if (unref(cartStore).cartItems.length === 0) {
          _push(`<div data-v-f050ed6a>Your cart is empty.</div>`);
        } else {
          _push(`<div data-v-f050ed6a><!--[-->`);
          ssrRenderList(unref(cartStore).cartItems, (item) => {
            _push(`<div class="cart-item" data-v-f050ed6a><span data-v-f050ed6a>${ssrInterpolate(item.name)} - ${ssrInterpolate(item.quantity)}</span><span data-v-f050ed6a>$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</span></div>`);
          });
          _push(`<!--]--><div class="cart-total" data-v-f050ed6a><span data-v-f050ed6a>Total Price: </span><span data-v-f050ed6a>$${ssrInterpolate(unref(cartStore).totalPrice.toFixed(2))}</span></div><button class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md w-full" data-v-f050ed6a> Create Order </button></div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuickAccess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuickAccess = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f050ed6a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "play",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const quickView = ref(false);
    const onAddToCart = (product) => {
      cartStore.addToCart(product);
    };
    const toggleQuickAccess = () => {
      quickView.value = !quickView.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden bg-gray-50 py-16 lg:py-24"${_scopeId}><div class="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-4"${_scopeId}><div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              products: unref(productStore).products
            }, {
              default: withCtx(({ product }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full"${_scopeId2}> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 </button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full",
                      onClick: ($event) => onAddToCart(product)
                    }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ", 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="relative"${_scopeId}>`);
            if (unref(cartStore).cartItems.length > 0) {
              _push2(`<div class="fixed bottom-20 right-4"${_scopeId}><button class="px-4 py-2 bg-blue-500 text-white rounded-full"${_scopeId}>${ssrInterpolate(unref(cartStore).totalItems)} items - $${ssrInterpolate(unref(cartStore).totalPrice.toFixed(2))}</button>`);
              _push2(ssrRenderComponent(QuickAccess, {
                "show-quick-access": quickView.value,
                "onUpdate:quickaccess": toggleQuickAccess
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden bg-gray-50 py-16 lg:py-24" }, [
                createVNode("div", { class: "relative mx-auto max-w-7xl px-6 lg:px-8 space-y-4" }, [
                  createVNode("div", { class: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" }, [
                    createVNode(_sfc_main$2, {
                      products: unref(productStore).products
                    }, {
                      default: withCtx(({ product }) => [
                        createVNode("button", {
                          class: "px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full",
                          onClick: ($event) => onAddToCart(product)
                        }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ", 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["products"])
                  ])
                ]),
                createVNode("div", { class: "relative" }, [
                  unref(cartStore).cartItems.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed bottom-20 right-4"
                  }, [
                    createVNode("button", {
                      class: "px-4 py-2 bg-blue-500 text-white rounded-full",
                      onClick: toggleQuickAccess
                    }, toDisplayString(unref(cartStore).totalItems) + " items - $" + toDisplayString(unref(cartStore).totalPrice.toFixed(2)), 1),
                    createVNode(QuickAccess, {
                      "show-quick-access": quickView.value,
                      "onUpdate:quickaccess": toggleQuickAccess
                    }, null, 8, ["show-quick-access"])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/play.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=play-0k8bXNhO.mjs.map
