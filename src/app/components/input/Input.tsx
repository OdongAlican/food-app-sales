import MuiPhoneNumber, { MuiPhoneNumberProps } from 'mui-phone-number';

import TextField, {
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
    TextFieldVariants
} from '@mui/material/TextField';
import { JSX } from 'react/jsx-runtime';

export const BootstrapInput = (
    props: JSX.IntrinsicAttributes &
    { variant?: TextFieldVariants | undefined; } &
        Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => {
    return <TextField {...props} autoComplete='off' ></TextField>
}

export const BootstrapPhoneNumber = (props: JSX.IntrinsicAttributes & MuiPhoneNumberProps) => (
    <MuiPhoneNumber {...props} defaultCountry={'ug'} />
)