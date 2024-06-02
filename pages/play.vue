<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/store/productStore'
import { useCartStore } from '@/store/cartStore'
import ProductCard from '@/components/ProductCard.vue'
import QuickAccess from '@/components/QuickAccess.vue'

const productStore = useProductStore()
const cartStore = useCartStore()
const quickView = ref(false)

onMounted(() => {
  productStore.fetchProducts()
})

const onAddToCart = (product) => {
  cartStore.addToCart(product)
}

const toggleQuickAccess = () => {
  quickView.value = !quickView.value
}
</script>

<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard :products="productStore.products">
            <template #default="{ product }">
              <button class="px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full" @click="onAddToCart(product)">
                Добавить в корзину
              </button>
            </template>
          </ProductCard>
        </div>
      </div>
      <div class="relative">
        <div v-if="cartStore.cartItems.length > 0" class="fixed bottom-20 right-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-full" @click="toggleQuickAccess">
            {{ cartStore.totalItems }} items - ${{ cartStore.totalPrice.toFixed(2) }}
          </button>
          <QuickAccess :show-quick-access="quickView" @update:quickaccess="toggleQuickAccess" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
