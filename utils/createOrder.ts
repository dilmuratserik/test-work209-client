import axios from 'axios'

interface OrderItem {
    productId: number;
    quantity: number;
}

interface Order {
    userId: number;
    items: OrderItem[];
}

async function createOrder (order: Order) {
  try {
    const response = await axios.post('http://127.0.0.1:8001/api/orders', order)
    return response.data
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export default createOrder
