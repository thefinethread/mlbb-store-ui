import type { InputTypeHTMLAttribute } from 'vue';

export type FormData = {
	name?: string;
	email: string;
	phone?: string;
	password: string;
};

export type InputField = {
	id: keyof FormData;
	placeholder: string;
	inputType: InputTypeHTMLAttribute;
	labelIconPath: string;
	showCta?: boolean;
};
