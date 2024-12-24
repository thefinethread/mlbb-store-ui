import * as yup from 'yup';
import type { LoginFormData } from '~/types/login/types';

export const loginSchema = () => {
	return yup.object<LoginFormData>({
		email: yup
			.string()
			.required('Email is required')
			.email('Please provide a valid email address'),
		password: yup.string().required('Password is required'),
	});
};
