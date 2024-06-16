<script setup lang="ts">
import { defineProps } from 'vue'
import { IProductItem } from '@/types'

const props = defineProps<{ product: IProductItem }>()
</script>

<template>
  <div class="product-card">
    <h3 class="product-card__name">
      {{ props.product.name }}
    </h3>
    <p class="product-card__price">
      ${{ props.product.price.toFixed(2) }}
    </p>
    <slot :product="props.product" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/mixins";
@import "@/assets/scss/variables";
@import "@/assets/scss/main";
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
