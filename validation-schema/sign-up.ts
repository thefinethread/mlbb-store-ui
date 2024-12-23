import * as yup from 'yup';
import type { FormData } from '~/types/auth/types';

export const signUpSchema = () => {
	return yup.object<FormData>({
		name: yup
			.string()
			.required('Name is required')
			.min(2, 'Name must be at least 2 characters'),
		email: yup
			.string()
			.required('Email is required')
			.email('Please provide a valid email address'),
		phone: yup
			.string()
			.required('Phone number is required')
			.matches(/^\d{10}$/, 'Phone number must be a valid 10-digit number'),
		password: yup
			.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
			.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
			.matches(/\d/, 'Password must contain at least one digit'),
	});
};
