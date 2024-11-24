<template>
  <div>
    <h3 class="font-bold text-xl mb-12">Popular</h3>
    <div class="flex gap-4 w-full justify-between sm:justify-start xl:justify-between overflow-x-auto">
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

<style >

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}</style>