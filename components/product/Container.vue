<template>
	<div>
		<ProductHeader :data="data" />

		<div
			class="mt-10 sm:mt-20 max-w-7xl flex-col md:flex-row flex gap-8 w-full mx-auto px-4"
		>
			<ProductItemsSection
				:selected-item-id="selectedItem?.id ?? ''"
				:items-list="data.itemsList"
				:item-categories="data.itemCategories"
				@update-selected-item="updateSelectedItem"
			/>

			<OrderSection
				v-if="!$device.isMobile"
				:order-fields="data.orderFields"
				:selected-item="selectedItem"
				class="hidden sm:block"
			/>
		</div>
	</div>

	<CommonModalPwa
		v-if="$device.isMobile"
		:is-modal-open="showPwaOrderSectionModal"
		@close-modal="closeModal"
	>
		<OrderSection
			:order-fields="data.orderFields"
			:selected-item="selectedItem"
		/>
	</CommonModalPwa>

	<div
		v-if="$device.isMobile && selectedItem"
		class="fixed bottom-2 shadow-md shadow-neutral-800 rounded-xl p-4 bg-neutral-950 mx-2 m-auto left-0 right-0 sm:hidden"
	>
		<CommonButtonPrimary @click="openModal"> Continue </CommonButtonPrimary>
	</div>
</template>

<script setup lang="ts">
import type { Item, ProductResponse } from '~/types/product/types';
import OrderSection from './OrderSection.vue';

defineProps<{
	data: ProductResponse;
}>();

const showPwaOrderSectionModal = ref(false);
const selectedItem = ref<Item | null>(null);

const openModal = () => (showPwaOrderSectionModal.value = true);
const closeModal = () => (showPwaOrderSectionModal.value = false);
const updateSelectedItem = (item: Item) => (selectedItem.value = item);
</script>
