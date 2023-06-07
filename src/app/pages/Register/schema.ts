import * as yup from 'yup'

export const schema = yup.object().shape({
    email: yup.string().required('Email is required').email(),
    password: yup.string().required('Password is required').max(10, 'Length of password must not be greater than 10'),
    confirmPassword: yup.string().required('Please retype your password.').oneOf([yup.ref('password')], 'Your passwords do not match.')
})