<template>
	<div class="bg-white bg-opacity-5 rounded-[18px] p-6">
		<h3 class="font-bold text-xl mb-12">{{ section.title }}</h3>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-16 w-full"
		>
			<CommonProductCard v-for="item in section.data" :card-info="item" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	section: {
		type: Object,
		default: null,
	},
});
</script>

<style></style>
