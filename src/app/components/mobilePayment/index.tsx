import { Grid, Box, FormControl, FormHelperText, Button } from "@mui/material"
import { BootstrapInput, BootstrapPhoneNumber } from "../input/Input"
import {
  useForm,
  Controller
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema";


const MobilePayment = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<{ phone: string, amount: string }>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (formData: { phone: string, amount: string }) => {
    console.log(formData, 'Form data');
  }

  return (

    <Box
      component='div'
      sx={{ width: '100%'}}
    >
      <form autoComplete='false' onSubmit={handleSubmit(onSubmit)}>
        <Grid container xs={12}>
          <Grid item p={2} container xs={12} sx={(theme) => ({
            bgcolor: theme.palette.background.paper,
            borderRadius: '6px'
          })}>
            <Grid item container spacing={3} xs={12} padding={4}>
              <Grid item xs={12} sx={{ textAlign: 'center'}}>
                Enter your Phone Number and Amount
              </Grid>
              <Grid item xs={12}>
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
                        error={Boolean(errors.phone)}
                      />
                    )}
                  />
                  {errors.phone && (
                    <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    control={control}
                    name='amount'
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur } }) => (
                      <BootstrapInput
                        size='small'
                        id='amount'
                        label='amount'
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.amount)}
                      />
                    )}
                  />
                  {errors.amount && (
                    <FormHelperText sx={{ color: 'error.main' }}>{errors.amount.message}</FormHelperText>
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
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default MobilePayment