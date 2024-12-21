<template>
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
		/>
		<button
			v-if="showCta"
			class="absolute right-[5px] rounded-full top-0 bottom-0 aspect-square my-[5px] flex justify-center items-center bg-custom-blue"
		>
			<slot name="cta" />
		</button>
	</div>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

defineProps<{
	id: string;
	placeholder?: string;
	labelIconPath?: string;
	inputType?: InputTypeHTMLAttribute;
	disabled?: boolean;
	showCta?: boolean;
}>();
</script>
