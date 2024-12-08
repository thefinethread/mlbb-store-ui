<template>
	<span
		class="bg-custom-blue text-xs font-medium px-2 py-[5px] inline-block rounded-md"
	>
		{{ tagContent }}
	</span>
</template>

<script setup>
defineProps({
	tagContent: {
		type: String,
		default: '',
	},
});
</script>
