import { useState } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    Typography
} from '@mui/material';
import {
    useForm,
    Controller
} from 'react-hook-form';
import { BootstrapInput } from '../../components/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IRegister } from './interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import companyLogo from '../../../src/img/company.png'
import { Link } from 'react-router-dom';


const Register = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loggingIn, setLoggingIn] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegister>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = (formData: IRegister) => {
        setLoggingIn(true)
        console.log(formData, 'Form data');
        // navigate(`${ROUTES.SCHOOL}/${ROUTES.CANTEEN}`)
    }

    return (
        <Grid container xs={12}
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Grid xs={4} item >
                <Box
                    component='div'
                    sx={{ bgcolor: 'teal' }}
                >
                    <form autoComplete='false'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container xs={12} >
                            <Grid item p={2} container xs={12} sx={(theme) => ({
                                bgcolor: theme.palette.background.paper,
                                borderRadius: '6px'
                            })}>
                                <Grid item container spacing={3} xs={12} padding={4}>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                                        < Box
                                            component="img"
                                            sx={{ height: '150px', width: '200px' }}
                                            alt='px'
                                            src={companyLogo}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <Controller
                                                control={control}
                                                name='email'
                                                rules={{ required: true }}
                                                render={({ field: { onChange, onBlur } }) => (
                                                    <BootstrapInput
                                                        size='small'
                                                        id='email'
                                                        label='Email Address'
                                                        variant="outlined"
                                                        onBlur={onBlur}
                                                        onChange={onChange}
                                                        error={Boolean(errors.email)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <EmailOutlinedIcon />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                )}
                                            />
                                            {errors.email && (
                                                <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <Controller
                                                control={control}
                                                name='password'
                                                rules={{ required: true }}
                                                render={({ field: { onChange, onBlur } }) => (
                                                    <BootstrapInput
                                                        size='small'
                                                        id='password'
                                                        label='Password'
                                                        onBlur={onBlur}
                                                        onChange={onChange}
                                                        error={Boolean(errors.password)}
                                                        type={showPassword ? 'text' : 'password'}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                )}
                                            />
                                            {errors.password && (
                                                <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <Controller
                                                control={control}
                                                name='confirmPassword'
                                                rules={{ required: true }}
                                                render={({ field: { onChange, onBlur } }) => (
                                                    <BootstrapInput
                                                        size='small'
                                                        id='confirmPassword'
                                                        label='Confirm Password'
                                                        onBlur={onBlur}
                                                        onChange={onChange}
                                                        error={Boolean(errors.confirmPassword)}
                                                        type={showPassword ? 'text' : 'password'}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                )}
                                            />
                                            {errors.confirmPassword && (
                                                <FormHelperText sx={{ color: 'error.main' }}>{errors.confirmPassword.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box component='div'>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                fullWidth
                                                size='large'
                                                sx={{
                                                    textTransform: 'none'
                                                }}
                                                startIcon={
                                                    loggingIn ? (
                                                        <CircularProgress />
                                                    ) : ('')
                                                }
                                                disabled={loggingIn}
                                            >
                                                Register
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
                                            Already have an account, Sign In <Link style={{ textDecoration: 'none', color: 'blue' }} to='#'> here</Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register;