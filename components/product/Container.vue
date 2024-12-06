<template>
	<div>
		<ProductHeader :data="data" />

		<div
			class="mt-10 sm:mt-20 max-w-7xl flex-col md:flex-row flex gap-8 w-full mx-auto px-8"
		>
			<ProductItemsSection
				:selected-item-id="selectedItem?.id ?? ''"
				:items-list="data.itemsList"
				@update-selected-item="updateSelectedItem"
			/>

			<OrderSection
				:order-fields="data.orderFields"
				:selected-item="selectedItem"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Item, ProductResponse } from '~/types/product/types';
import OrderSection from './OrderSection.vue';

defineProps<{
	data: ProductResponse;
}>();

const selectedItem = ref<Item | null>(null);

const updateSelectedItem = (item: Item) => (selectedItem.value = item);
</script>
