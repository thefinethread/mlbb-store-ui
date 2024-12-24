import type { InputTypeHTMLAttribute } from 'vue';

export type SignUpFormData = {
	name: string;
	email: string;
	phone: string;
	password: string;
};

export type SignUpInputField = {
	id: keyof SignUpFormData;
	placeholder: string;
	inputType: InputTypeHTMLAttribute;
	labelIconPath: string;
	showCta?: boolean;
};
