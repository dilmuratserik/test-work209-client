import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { IProductItem } from '@/types'
import createOrder from '@/utils/createOrder'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: ref(JSON.parse(localStorage.getItem('cartItems') || '[]'))
  }),
  actions: {
    addToCart (product: IProductItem) {
      const existingItem = this.cartItems.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    removeFromCart (productId: number) {
      const index = this.cartItems.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.cartItems.splice(index, 1)
        this.saveCart()
      }
    },
    clearCart () {
      this.cartItems = []
      this.saveCart()
    },
    saveCart () {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    async createOrder () {
      const order = {
        items: this.cartItems.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      }
      try {
        const response = await createOrder(order)
        this.clearCart()
        return response
      } catch (error) {
        console.error('Failed to create order:', error)
        throw error
      }
    }
  },
  getters: {
    totalItems: state => state.cartItems.reduce((total, item) => total + item.quantity, 0),
    totalPrice: state => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }
})

watch(() => useCartStore().cartItems, (newCartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(newCartItems))
}, { deep: true })
