import { signUpSchema } from '~/validation-schema/sign-up';

export const useAuthForm = () => {
	const { handleSubmit, errors } = useForm({
		validationSchema: signUpSchema(),
		initialValues: {
			name: '',
			email: '',
			phone: '',
			password: '',
		},
	});

	return {
		errors,
		handleSubmit,
	};
};