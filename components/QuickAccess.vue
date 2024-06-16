<template>
  <div v-if="props.showQuickAccess" class="quick-access-wrapper">
    <div class="quick-access-overlay" @click="closeQuickAccess" />
    <div class="quick-access-panel">
      <div class="quick-access-header">
        <h2>Cart</h2>
        <div>
          <button @click="closeQuickAccess">
            Close
          </button>
          <button class="clear-all-button" @click="clearCart">
            Удалить все
          </button>
        </div>
      </div>
      <div class="quick-access-content">
        <div v-if="cartStore.cartItems.length === 0">
          Your cart is empty.
        </div>
        <div v-else>
          <div v-for="item in cartStore.cartItems" :key="item.id" class="cart-item">
            <span>{{ item.name }} - {{ item.quantity }}</span>
            <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
            <button class="remove-item-button" @click="removeFromCart(item.id)">
              Удалить
            </button>
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

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useCartStore } from '@/store/cartStore'

const props = defineProps<{ showQuickAccess: boolean }>()
const emit = defineEmits(['update:quickaccess'])
const cartStore = useCartStore()

const closeQuickAccess = () => {
  emit('update:quickaccess', false)
}

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId)
}

const clearCart = () => {
  cartStore.clearCart()
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

<style scoped>
.remove-item-button, .clear-all-button {
  margin-left: auto;
  background-color: #ff3b30;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
