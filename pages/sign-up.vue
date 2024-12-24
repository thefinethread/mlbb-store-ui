<template>
	<NuxtLayout name="auth">
		<AuthMainContainer
			:input-fields="signUpInputFields"
			@on-form-submit="handleSignUp"
			:is-submit-button-disabled="isSubmitButtonDisabled"
		/>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { useSignUpForm } from '~/composables/forms/useSignUpForm';
import { signUpInputFields } from '~/schema/auth';

const form = reactive(useSignUpForm());

const isSubmitButtonDisabled = computed(() => {
	return !!Object.keys(form.errors).length;
});

const handleSignUp = form.handleSubmit((values) => {
	console.log(values);
});

definePageMeta({
	layout: false,
});
</script>
