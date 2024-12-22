<template>
	<NuxtLayout name="auth">
		<AuthMainContainer
			:input-fields="inputFields"
			:form-data="formData"
			@on-form-submit="handleSignUp"
		/>
	</NuxtLayout>
</template>

<script setup lang="ts">
import type { FormData, InputField } from '~/types/auth/types';

const formData = reactive<FormData>({
	name: '',
	email: '',
	phone: '',
	password: '',
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

const handleSignUp = () => {
	console.log(formData);
};

definePageMeta({
	layout: false,
});
</script>
