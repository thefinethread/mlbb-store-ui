<template>
<span class="bg-sky-300 text-neutral-950 text-xs font-normal px-2 py-[5px] inline-block rounded-md">
  {{ tagContent }}
</span>
</template>

<script setup>
defineProps({
  tagContent: {
    type: String,
    default: ''
  }
})
</script>