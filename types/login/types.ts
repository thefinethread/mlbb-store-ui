import type { InputTypeHTMLAttribute } from 'vue';

export type LoginFormData = {
	email: string;
	password: string;
};

export type LoginInputField = {
	id: keyof LoginFormData;
	placeholder: string;
	inputType: InputTypeHTMLAttribute;
	labelIconPath: string;
	showCta?: boolean;
};
