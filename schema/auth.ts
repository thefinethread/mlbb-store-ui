import type { LoginInputField } from '~/types/login/types';
import type { SignUpInputField } from '~/types/signup/types';

export const signUpInputFields: SignUpInputField[] = [
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

export const loginInputFields: LoginInputField[] = [
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
