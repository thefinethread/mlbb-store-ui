<template>
  <div>
    <h3 class="font-bold text-xl mb-12">Popular</h3>
    <div class="flex gap-4 w-full justify-between sm:justify-start xl:justify-between flex-wrap">
      <CommonProductCard v-for="item in data.data" :card-info="item"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: null
  }
})
</script>