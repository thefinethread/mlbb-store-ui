<template>
	<div class="relative flex items-center h-10">
		<label
			:for="orderField.id"
			class="absolute left-5 flex items-center text-neutral-400 font-semibold text-xs"
			>{{ orderField.name }}</label
		>
		<input
			:id="orderField.id"
			type="text"
			class="bg-opacity-5 focus:ring-custom-blue focus:bg-custom-blue focus:bg-opacity-10 focus:ring-1 focus:shadow-[0px_0px_8px_rgba(0,187,255,1)] h-full pl-24 bg-white rounded-full outline-none w-full text-xs placeholder:text-neutral-400 placeholder:font-semibold"
			:placeholder="`Please enter ${orderField.name}`"
		/>
	</div>
</template>

<script setup lang="ts">
import type { OrderField } from '~/types/product/types';

defineProps<{
	orderField: OrderField;
}>();
</script>
