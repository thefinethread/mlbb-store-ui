<template>
	<NuxtLayout name="auth">
		<AuthMainContainer
			:input-fields="inputFields"
			:form-data="formData"
			@on-form-submit="handleLogin"
		/>
	</NuxtLayout>
</template>

<script setup lang="ts">
import type { FormData, InputField } from '~/types/auth/types';

const formData = reactive<FormData>({
	email: '',
	password: '',
});

const inputFields: InputField[] = [
	{
		id: 'email',
		placeholder: 'Email',
		inputType: 'email',
		labelIconPath: '/svgs/email.svg',
	},

	{
		id: 'password',
		placeholder: 'Password',
		inputType: 'password',
		labelIconPath: '/svgs/lock.svg',
		showCta: true,
	},
];

const handleLogin = () => {
	console.log(formData);
};

definePageMeta({
	layout: false,
});
</script>
