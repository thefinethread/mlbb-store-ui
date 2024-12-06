<template>
	<ul class="grid lg:grid-cols-2 gap-4 flex-1">
		<ItemCard
			v-for="item in itemsList"
			:key="item.id"
			:item="item"
			:selected-item-id="selectedItemId"
			@update-selected-item="updateSelectedItem"
		/>
	</ul>
</template>

<script setup lang="ts">
import type { Item } from '~/types/product/types';
import ItemCard from './ItemCard.vue';

withDefaults(
	defineProps<{
		itemsList: Item[];
		selectedItemId: string;
	}>(),
	{
		itemsList: () => [],
		selectedItemId: '',
	}
);

const emits = defineEmits(['updateSelectedItem']);

const updateSelectedItem = (item: Item) => emits('updateSelectedItem', item);
</script>
