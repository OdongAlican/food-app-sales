import * as yup from 'yup'

export const schema = yup.object().shape({
    phone: yup.string().required('Phone is required'),
    amount: yup.string().required('Amount is required')
})