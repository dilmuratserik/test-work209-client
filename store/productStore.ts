import { ref } from 'vue'
import axios from 'axios'
import { IProductItem } from '@/types'

export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      products: ref([] as IProductItem[]),
      cartList: ref([] as IProductItem[])
    }
  },

  actions: {
    async fetchProducts () {
      try {
        const response = await axios.get('http://127.0.0.1:8001/api/products')
        this.products = response.data.data.map(item => ({
          id: item.id,
          name: item.attributes.name,
          price: parseFloat(item.attributes.price)
        }))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    alreadyAdded (item: IProductItem) {
      return this.cartList.value.findIndex(el => el.id === item.id) !== -1
    },
    addToCart (item: IProductItem) {
      if (!this.alreadyAdded(item)) {
        this.cartList.value.unshift(item)
      }
    }
  },

  getters: {
    count: state => state.products.value.length,
    totalPrice: state => state.cartList.value.reduce((total, product) => total + product.price, 0),
    isEmptyCart: state => state.cartList.value.length === 0
  }
})
