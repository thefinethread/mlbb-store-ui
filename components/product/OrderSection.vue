<template>
	<div class="sm:w-96 sticky top-24 max-h-max">
		<div
			class="bg-neutral-50 bg-opacity-5 px-6 py-4 rounded-lg text-neutral-50 mb-4"
		>
			<h4 class="mb-4 font-semibold">Order Information</h4>
			<div class="flex flex-col gap-4">
				<ProductOrderField v-for="field in orderFields" :order-field="field" />
			</div>
			<div class="min-h-4"></div>
		</div>

		<div
			class="bg-neutral-50 bg-opacity-5 px-6 pt-5 pb-7 rounded-lg text-neutral-50"
		>
			<div class="flex justify-between items-center text-xl font-bold">
				<div class="">Total</div>
				<div class="text-custom-blue">
					{{ selectedItem ? `₹ ${selectedItem.price}` : '-' }}
				</div>
			</div>

			<hr class="border-neutral-700 my-6" />

			<div>
				<h4 class="mb-4">Select Payment Method</h4>
				<div class="flex gap-2 w-full">
					<CommonChipSelect
						v-for="option in paymentOptions"
						:key="option.id"
						class="flex-1"
						:id="option.id"
						:is-selected="selectedPaymentOptionId === option.id"
						@click="selectedPaymentOptionId = option.id"
					>
						<NuxtImg v-if="option.icon" :src="option.icon" class="h-6 w-6" />
						<span v-if="option.text">{{ option.text }}</span>
					</CommonChipSelect>
				</div>
			</div>

			<hr class="border-neutral-700 my-6" />

			<CommonButtonPrimary> Buy Now </CommonButtonPrimary>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Item, OrderField } from '~/types/product/types';

defineProps<{
	orderFields: OrderField[];
	selectedItem: Item | null;
}>();

const paymentOptions = [
	{
		id: 'upi',
		icon: '/svgs/upi.svg',
		text: 'UPI',
	},
	{
		id: 'wallet',
		icon: '/svgs/wallet.svg',
		text: 'Wallet',
	},
];

const selectedPaymentOptionId = ref('');
</script>
