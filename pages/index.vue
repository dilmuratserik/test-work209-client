<script lang="ts" setup>
const features = [
  'Nuxt 3', 'TailwindCSS', 'Google fonts', 'Pinia',
  'Eslint Nuxt', 'Husky', 'Nuxt Image', 'Error page', 'Nuxt Icon'
]

</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div>
          <AppTitle>
            <h2>Frontend Requirements</h2>
            <ul>
              <li>Создать страницы «Каталог» и «Корзина» с минималистичным дизайном, без картинок</li>
              <li>Реализовать отображение списка товаров, их добавление в корзину и удаление оттуда, а также создание заказа.</li>
              <li>Использовать последние версии Vue/Nuxt и TypeScript, Composition API с синтаксисом <code>&lt;script setup&gt;</code>,
              </li>
              <li>Pinia c localStorage (для хранения состояния корзины), SCSS и методологию БЭМ.</li>
            </ul>
          </AppTitle>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
