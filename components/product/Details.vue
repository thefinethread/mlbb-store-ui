<template>
	<div
		class="mt-10 sm:mt-20 max-w-7xl flex-col md:flex-row flex gap-8 w-full mx-auto px-8"
	>
		<ul class="grid lg:grid-cols-2 gap-4 flex-1">
			<ProductCard
				v-for="item in response.itemsList"
				:item="item"
				:active-item-id="selectedItem?.id"
				@update-active-item="setSelectedItem"
			/>
		</ul>

		<ProductOrderInfo :order-fields="response.orderFields"/>
	</div>
</template>

<script setup>
const props = defineProps({
	response: {
		type: Object,
	},
});

const selectedItem = ref(null);

const setSelectedItem = (itemId) => {
	const newSelectedItem = props.response.itemsList.find(
		(item) => item.id === itemId
	);
	selectedItem.value = newSelectedItem;
};
</script>
