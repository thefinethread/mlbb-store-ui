<template>
	<div class="flex-1">
		<ProductItemCategorySection :item-categories="itemCategories" />
		<div class="bg-neutral-900 p-4 rounded-xl">
			<h2 class="text-xl font-medium mb-6">Select Item</h2>
			<ul class="grid lg:grid-cols-2 gap-4">
				<ItemCard
					v-for="item in filteredItems"
					:key="item.id"
					:item="item"
					:selected-item-id="selectedItemId"
					@update-selected-item="updateSelectedItem"
				/>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Item, ItemCategory } from '~/types/product/types';
import ItemCard from './ItemCard.vue';

const props = withDefaults(
	defineProps<{
		itemsList: Item[];
		itemCategories: ItemCategory[];
		selectedItemId: string;
	}>(),
	{
		itemsList: () => [],
		selectedItemId: '',
	}
);

const emits = defineEmits(['updateSelectedItem']);

const route = useRoute();

const filteredItems = computed<Item[]>(() => {
	const category = route.query?.category;

	if (!category) {
		return props.itemsList;
	}

	return props.itemsList.filter((item) => item.itemCategory === category);
});

const updateSelectedItem = (item: Item) => emits('updateSelectedItem', item);
</script>
