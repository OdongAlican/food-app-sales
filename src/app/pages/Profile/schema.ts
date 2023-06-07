import * as yup from 'yup'

export const contactPersonSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().required('Email is required'),
    accountNumber: yup.string().required('Account Number is required'),
    bankName: yup.string().required('Bank Name is required'),
    phone: yup.string().required('Phone is required'),
    physicalAddress: yup.string().required('Physical Address is required'),
    gender: yup.string().required('Gender is required'),
})

export const detailsSchema = yup.object().shape({
    details: yup.string().required('Other details name is required')
})