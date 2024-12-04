<template>
  	<div class="w-96 sticky top-24 max-h-max">
      <div class="bg-neutral-50 bg-opacity-5 px-6 py-4 rounded-lg text-neutral-50">
        <h4 class="mb-4 font-semibold">Order Information</h4>
        <div class="flex flex-col gap-4">
          <div v-for="field in orderFields" class="relative flex items-center h-10">
            <label :for="field.id" class="absolute left-5 flex items-center text-neutral-400 font-semibold text-xs">{{ field.name }}</label>
            <input :id="field.id" type="text" class="bg-opacity-5 focus:ring-custom-blue focus:bg-custom-blue focus:bg-opacity-10 focus:ring-1 focus:shadow-[0px_0px_8px_rgba(0,187,255,1)] h-full pl-24 bg-white  rounded-full outline-none w-full text-xs placeholder:text-neutral-400 placeholder:font-semibold" :placeholder="`Please enter ${field.name}`">
          </div>
        </div>
        <div class="min-h-4"></div>
      </div>

      <div>
        payment
      </div>
    </div>
</template>

<script setup>
defineProps({
  orderFields: {
    type: Array
  }
})
</script>