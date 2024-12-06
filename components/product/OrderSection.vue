<template>
	<div class="w-96 sticky top-24 max-h-max">
		<div
			class="bg-neutral-50 bg-opacity-5 px-6 py-4 rounded-lg text-neutral-50 mb-4"
		>
			<h4 class="mb-4 font-semibold">Order Information</h4>
			<div class="flex flex-col gap-4">
				<div
					v-for="field in orderFields"
					class="relative flex items-center h-10"
				>
					<label
						:for="field.id"
						class="absolute left-5 flex items-center text-neutral-400 font-semibold text-xs"
						>{{ field.name }}</label
					>
					<input
						:id="field.id"
						type="text"
						class="bg-opacity-5 focus:ring-custom-blue focus:bg-custom-blue focus:bg-opacity-10 focus:ring-1 focus:shadow-[0px_0px_8px_rgba(0,187,255,1)] h-full pl-24 bg-white rounded-full outline-none w-full text-xs placeholder:text-neutral-400 placeholder:font-semibold"
						:placeholder="`Please enter ${field.name}`"
					/>
				</div>
			</div>
			<div class="min-h-4"></div>
		</div>

		<div
			class="bg-neutral-50 bg-opacity-5 px-6 pt-5 pb-7 rounded-lg text-neutral-50"
		>
			<div class="flex justify-between items-center text-xl font-bold">
				<div class="">Total</div>
				<div class="text-custom-blue">₹ {{ selectedItem?.price }}</div>
			</div>
			<hr class="border-neutral-700 my-6" />
			<div class="flex flex-col gap-3">
				<button
					class="w-full bg-gradient-to-r from-[#59bfe4] to-[#0c96c8] focus:outline-none uppercase font-semibold py-2 rounded-full hover:bg-opacity-90 transition-all"
				>
					Pay With UPI
				</button>
				<button
					class="w-full ring-custom-blue hover:bg-custom-blue hover:bg-opacity-10 ring-2 focus:outline-none uppercase font-semibold py-2 rounded-full transition-all"
				>
					Pay With Wallet
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Item, OrderField } from '~/types/product/types';

defineProps<{
	orderFields: OrderField[];
	selectedItem: Item | null;
}>();
</script>
