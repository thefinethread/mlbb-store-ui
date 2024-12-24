<template>
	<NuxtLayout name="auth">
		<AuthMainContainer
			:input-fields="inputFields"
			@on-form-submit="handleSignUp"
			:is-submit-button-disabled="isSubmitButtonDisabled"
		/>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthForm } from '~/composables/forms/useAuthForm';
import type { FormData, InputField } from '~/types/auth/types';

const form = reactive(useAuthForm());

const isSubmitButtonDisabled = computed(() => {
	return !!Object.keys(form.errors).length;
});

const inputFields: InputField[] = [
	{
		id: 'name',
		placeholder: 'Name',
		inputType: 'text',
		labelIconPath: '/svgs/user.svg',
	},
	{
		id: 'email',
		placeholder: 'Email',
		inputType: 'email',
		labelIconPath: '/svgs/email.svg',
	},
	{
		id: 'phone',
		placeholder: 'Enter 10-digit phone number',
		inputType: 'number',
		labelIconPath: '/svgs/phone.svg',
	},
	{
		id: 'password',
		placeholder: 'Password',
		inputType: 'password',
		labelIconPath: '/svgs/lock.svg',
		showCta: true,
	},
];

const handleSignUp = form.handleSubmit((values) => {
	console.log(values);
});

definePageMeta({
	layout: false,
});
</script>
