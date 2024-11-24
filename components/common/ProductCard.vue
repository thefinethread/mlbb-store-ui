<template>
  <NuxtLink :to="cardInfo.slug" >
    <div class="h-64 w-[11.25rem] rounded-2xl overflow-hidden cursor-pointer relative flex flex-col justify-end group">
      <NuxtImg :src="cardInfo.logo" class="h-full w-full object-cover absolute top-0 left-0 group-hover:opacity-80 transition-opacity"/>

      <CommonProductDetailsCard class="absolute bottom-[6px] left-[6px] right-[6px]">
        <h2 class="font-semibold text-white text-base mb-1">{{ cardInfo.displayName }}</h2>
        <CommonProductTag :tag-content="cardInfo.tag"/>
      </CommonProductDetailsCard> 
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  cardInfo: {
    type: Object,
    default: null
  }
})
</script>