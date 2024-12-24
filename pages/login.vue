<template>
	<NuxtLayout name="auth">
		<AuthMainContainer
			:input-fields="loginInputFields"
			@on-form-submit="handleSignUp"
			:is-submit-button-disabled="isSubmitButtonDisabled"
		/>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { useLoginForm } from '~/composables/forms/useLoginForm';
import { loginInputFields } from '~/schema/auth';

const form = reactive(useLoginForm());

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
