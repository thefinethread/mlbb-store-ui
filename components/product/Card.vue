<template>
	<li
		class="bg-opacity-5 rounded-lg px-4 py-6 flex items-center gap-3 w-full justify-between cursor-pointer"
		:class="[
			activeItemId === item.id ? ' bg-custom-blue ring-custom-blue ring-2' : 'bg-neutral-50',
		]"
		@click="handleClick(item.id)"
	>
		<NuxtImg :src="item.itemImage" class="w-14" />
		<div class="flex-1 text-sm flex flex-col gap-2">
			<p class="text-neutral-300 font-medium">{{ item.amount }}</p>

			<span
				class="bg-green-600 font-medium px-2 py-[5px] inline-block rounded-md w-max"
			>
				{{ item.tag }}
			</span>
		</div>
		<div class="text-sm flex gap-3 text-custom-blue">
			<span class="line-through text-orange-600">₹{{ item.price }}</span>
			<span class="font-medium">₹{{ item.discountedPrice }}</span>
		</div>
	</li>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
	},
	activeItemId: {
		type: String,
	},
});

const emits = defineEmits(['updateActiveItem']);

const handleClick = (id) => emits('updateActiveItem', id);
</script>
