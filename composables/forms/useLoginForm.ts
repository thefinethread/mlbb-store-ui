import { loginSchema } from '~/validation-schema/login';

export const useLoginForm = () => {
	const { errors, handleSubmit } = useForm({
		validationSchema: loginSchema(),
		initialValues: {
			email: '',
			password: '',
		},
	});

	return {
		errors,
		handleSubmit,
	};
};
