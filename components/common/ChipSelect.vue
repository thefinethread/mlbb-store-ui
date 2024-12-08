<template>
	<div
		:for="id"
		class="p-6 w-min cursor-pointer rounded-xl flex justify-center items-center gap-2"
		:class="{
			'bg-custom-blue bg-opacity-10 ring-custom-blue ring-2': isSelected,
			'sm:bg-neutral-900 bg-neutral-950': !isSelected,
		}"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	id: string;
	isSelected: boolean;
}>();
</script>
