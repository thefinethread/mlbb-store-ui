<template>
	<div>
		<div class="relative">
			<div class="absolute left-5 h-full flex justify-center items-center">
				<img :src="labelIconPath" class="h-6 w-6" />
			</div>
			<input
				:id="id"
				:type="inputType"
				class="bg-neutral-900 py-4 focus:ring-custom-blue focus:ring-2 focus:shadow-[0px_0px_8px_rgba(0,187,255,1)] h-full rounded-full outline-none w-full text-xs placeholder:text-neutral-400 placeholder:font-semibold"
				:class="[labelIconPath ? 'pl-14' : 'pl-8']"
				:placeholder="placeholder"
				:disabled="disabled"
				:value="value"
				v-on="validationListeners"
			/>
			<button
				v-if="showCta"
				:disabled="!!errorMessage"
				:class="[
					!!errorMessage
						? 'cursor-not-allowed bg-neutral-500'
						: 'cursor-pointer bg-custom-blue',
				]"
				class="absolute right-[5px] rounded-full top-0 bottom-0 aspect-square my-[5px] flex justify-center items-center"
			>
				<slot name="cta" />
			</button>
		</div>
		<p class="text-xs mt-0.5 text-red-500 font-semibold">
			{{ errorMessage }}
		</p>
	</div>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

const props = defineProps<{
	id: string;
	placeholder?: string;
	labelIconPath?: string;
	inputType?: InputTypeHTMLAttribute;
	disabled?: boolean;
	showCta?: boolean;
}>();

const { value, errorMessage, handleBlur, handleChange } = useField(
	() => props.id,
	undefined,
	{ validateOnValueUpdate: true }
);

const validationListeners = {
	blur: (e: Event) => handleBlur(e, true), // validate on focus and blur
	change: handleChange,
	input: (e: Event) => handleChange(e, true), // validate on typing
};
</script>

<style>
/* remove default arrow keys from number input */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
}
</style>
