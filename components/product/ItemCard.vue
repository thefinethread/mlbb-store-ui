<template>
	<li
		class="rounded-lg px-4 py-6 flex items-center gap-3 w-full justify-between cursor-pointer"
		:class="[
			selectedItemId === item.id
				? ' bg-[#06191f] ring-custom-blue ring-2'
				: 'bg-neutral-800',
		]"
		@click="handleClick(item)"
	>
		<NuxtImg :src="item.itemImage" class="w-14" />
		<div class="text-sm flex flex-col gap-2 justify-between items-end">
			<p class="text-neutral-200 font-medium">{{ item.amount }}</p>
			<div class="text-sm flex gap-3 text-custom-blue">
				<span class="line-through font-medium text-neutral-500"
					>₹{{ item.price }}</span
				>
				<span class="font-medium">₹{{ item.discountedPrice }}</span>
			</div>
		</div>
	</li>
</template>

<script setup lang="ts">
import type { Item } from '~/types/product/types';

defineProps<{
	item: Item;
	selectedItemId: string;
}>();

const emits = defineEmits(['updateSelectedItem']);

const handleClick = (item: Item) => emits('updateSelectedItem', item);
</script>
