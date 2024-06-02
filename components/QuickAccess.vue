<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useCartStore } from '@/store/cartStore'

const props = defineProps<{ showQuickAccess: boolean }>()
const emit = defineEmits(['update:quickaccess'])
const cartStore = useCartStore()

const closeQuickAccess = () => {
  emit('update:quickaccess', false)
}

const handleCreateOrder = async () => {
  try {
    await cartStore.createOrder()
    alert('Order created successfully!')
    closeQuickAccess()
  } catch (error) {
    alert('Failed to create order. Please try again.')
  }
}
</script>

<template>
  <div v-if="props.showQuickAccess" class="quick-access-wrapper">
    <div class="quick-access-overlay" @click="closeQuickAccess" />
    <div class="quick-access-panel">
      <div class="quick-access-header">
        <h2>Cart</h2>
        <button @click="closeQuickAccess">
          Close
        </button>
      </div>
      <div class="quick-access-content">
        <div v-if="cartStore.cartItems.length === 0">
          Your cart is empty.
        </div>
        <div v-else>
          <div v-for="item in cartStore.cartItems" :key="item.id" class="cart-item">
            <span>{{ item.name }} - {{ item.quantity }}</span>
            <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>
          <div class="cart-total">
            <span>Total Price: </span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md w-full" @click="handleCreateOrder">
            Create Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-access-wrapper {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  z-index: 1000;
}

.quick-access-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.quick-access-panel {
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  padding: 16px;
  z-index: 1000;
  position: relative;
}

.quick-access-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.quick-access-content {
  padding-top: 16px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  font-weight: bold;
}
</style>
