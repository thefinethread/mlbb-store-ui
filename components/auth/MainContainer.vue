<template>
	<div class="w-full h-full flex justify-center items-center">
		<form
			@submit.prevent="handleSubmit"
			class="rounded-xl sm:rounded-3xl w-full bg-white bg-opacity-10 py-8 px-6 sm:py-14 sm:px-16 sm:w-[500px] z-10 backdrop-blur"
		>
			<h1 class="text-lg sm:text-2xl font-bold mb-6 uppercase">
				{{ formHeading }}
			</h1>
			<div class="flex flex-col gap-4">
				<CommonInputText
					v-for="input in inputFields"
					:id="input.id"
					:placeholder="input.placeholder"
					:input-type="input.inputType"
					:label-icon-path="input.labelIconPath"
					:show-cta="input.showCta"
					:is-submit-button-disabled="isSubmitButtonDisabled"
				>
					<template #cta>
						<img src="/svgs/right-arrow.svg" class="h-6" />
					</template>
				</CommonInputText>
			</div>

			<div class="flex gap-4 justify-between w-full items-center my-8">
				<span class="h-0.5 w-full bg-white bg-opacity-20"></span>
				<span class="text-white opacity-60 text-xs font-bold">OR</span>
				<span class="h-0.5 w-full bg-white bg-opacity-20"></span>
			</div>

			<Primary>
				<p class="flex justify-center gap-3">
					{{ googleCtaText }}
					<img src="/svgs/google.svg" class="h-6 w-6" />
				</p>
			</Primary>
		</form>
	</div>
</template>

<script setup lang="ts">
import Primary from '~/components/common/button/Primary.vue';
import type { InputField } from '~/types/signup/types';

const props = withDefaults(
	defineProps<{
		inputFields: InputField[];
		isSubmitButtonDisabled: boolean;
	}>(),
	{
		isSubmitButtonDisabled: true,
	}
);

const route = useRoute();

const emit = defineEmits(['on-form-submit']);

const formHeading = computed(() => {
	return route.name === 'login' ? 'sign in' : 'sign up';
});

const googleCtaText = computed(() => {
	return route.name === 'login' ? 'Sign In with Google' : 'Sign Up with Google';
});

const handleSubmit = () => emit('on-form-submit');
</script>
