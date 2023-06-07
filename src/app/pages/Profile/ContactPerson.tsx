import {
    Grid,
    FormControl,
    FormHelperText,
    Typography,
    Select,
    MenuItem,
} from '@mui/material';
import {
    Controller,
    FormState,
    Control,
    FieldError
} from 'react-hook-form';
import { BootstrapInput, BootstrapPhoneNumber } from '../../components/input/Input';
import { IContactDetails, IOtherDetails } from "./interface";


interface IFormProps {
    formState: FormState<IContactDetails | IOtherDetails> & {
        errors: {
            firstName?: FieldError;
            lastName?: FieldError;
            email?: FieldError;
            accountNumber?: FieldError;
            bankName?: FieldError;
            phone?: FieldError;
            physicalAddress?: FieldError;
            gender?: FieldError;
        };
    };
    control: Control<IContactDetails | IOtherDetails>;
};

const VendorInfo: React.FC<IFormProps> = ({ formState, control }: IFormProps) => {

    return (
        <Grid item container spacing={3} xs={12} padding={4}>
            <Grid item xs={12}>
                <Typography>Vendor Information</Typography>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='firstName'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='firstName'
                                label='First Name'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.firstName)}
                            />
                        )}
                    />
                    {formState.errors.firstName && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.firstName.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='lastName'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='lastName'
                                label='Last Name'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.lastName)}
                            />
                        )}
                    />
                    {formState.errors.lastName && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.lastName.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='email'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='email'
                                label='Email'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.email)}
                            />
                        )}
                    />
                    {formState.errors.email && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.email.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='accountNumber'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='accountNumber'
                                label='Account Number'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.accountNumber)}
                            />
                        )}
                    />
                    {formState.errors.accountNumber && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.accountNumber.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='bankName'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='bankName'
                                label='Bank Name'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.bankName)}
                            />
                        )}
                    />
                    {formState.errors.bankName && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.bankName.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='physicalAddress'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapInput
                                size='small'
                                id='physicalAddress'
                                label='Physical Address'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.physicalAddress)}
                            />
                        )}
                    />
                    {formState.errors.physicalAddress && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.physicalAddress.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='phone'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <BootstrapPhoneNumber
                                size='small'
                                id='phone'
                                label='Phone Number'
                                variant="outlined"
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(formState.errors.phone)}
                            />
                        )}
                    />
                    {formState.errors.phone && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.phone.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='gender'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur } }) => (
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            size='small'
                            label="gender"
                            onChange={onChange}
                          >
                            <MenuItem value='Female'>Female</MenuItem>
                            <MenuItem value='Male'>Male</MenuItem>
                          </Select>
       
                        )}
                    />
                    {formState.errors.gender && (
                        <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.gender.message}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default VendorInfo;