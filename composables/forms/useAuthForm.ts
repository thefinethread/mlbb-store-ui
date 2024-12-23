import { signUpSchema } from '~/validation-schema/sign-up';

export const useAuthForm = () => {
	const { handleSubmit } = useForm({
		validationSchema: signUpSchema(),
		initialValues: {
			name: '',
			email: '',
			phone: '',
			password: '',
		},
	});

	return {
		handleSubmit,
	};
};
