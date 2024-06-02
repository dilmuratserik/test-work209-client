<script setup lang="ts">
import { defineProps } from 'vue'
import { IProductItem } from '@/types'

const props = defineProps<{ products: IProductItem[] }>()
</script>

<template>
    <div v-for="product in props.products" :key="product.id" class="product-card">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__price">${{ product.price.toFixed(2) }}</p>
      <slot :product="product"></slot>
    </div>
</template>
<style lang="scss" scoped>
.product-card {
  &__image {
    @include flex-center;
    background-color: #f5f5f5;
    width: 100%;
    height: 200px;
  }

  &__info {
    padding: 10px;
  }

  &__name {
    font-size: 1.2em;
    margin: 0;
  }

  &__price {
    color: $secondary-color;
    margin: 5px 0;
  }

  &__button {
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>
