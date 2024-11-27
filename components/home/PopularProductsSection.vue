<template>
	<div>
		<h3 class="font-bold text-xl mb-12">{{ section.title }}</h3>
		<div
			class="flex gap-4 w-full justify-between sm:justify-start xl:justify-between overflow-x-auto h-full"
		>
			<CommonProductCard
				v-for="item in section.data"
				:card-info="item"
				class="min-w-[11rem]"
			/>
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
