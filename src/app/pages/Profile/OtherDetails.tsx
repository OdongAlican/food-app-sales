import {
    Controller,
    FormState,
    Control,
    FieldError,
  } from 'react-hook-form';
  import { FormControl, FormHelperText, Grid, Box } from "@mui/material";
  import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
  import { BootstrapInput } from '../../components/input/Input'; 
import { IContactDetails, IOtherDetails } from "./interface";

  export const imageContainer = {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
}
  
  interface IFormProps {
    formState: FormState<IContactDetails | IOtherDetails> & {
      errors: {
        details?: FieldError;
      };
    };
    control: Control<IContactDetails | IOtherDetails>;
  };
  
  const OtherDetails: React.FC<IFormProps> = ({ formState, control }: IFormProps) => {
    return (
      <Grid item container spacing={3} xs={12} padding={4}>
        <Grid item container xs={6}>
          <Grid xs={12} item p={2} container sx={
            (theme) => (
              {
                ...imageContainer,
                border: `1px solid ${theme.palette.grey[200]}`,
              }
            )
          }>
            <Grid xs={6} sx={{ ...imageContainer }}>
              <Box
                component='div'
                sx={(theme) => ({
                  ...imageContainer,
                  bgcolor: theme.palette.grey[200],
                  height: '200px',
                  width: '200px',
                  borderRadius: '50%'
                })}>
                <AddPhotoAlternateIcon sx={(theme) => ({
                  color: theme.palette.primary.main,
                  cursor: 'pointer'
                })} fontSize="large" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Controller
              control={control}
              name='details'
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <BootstrapInput
                  size='small'
                  multiline
                  id='details'
                  rows={10}
                  maxRows={10}
                  label='Other Details'
                  variant="outlined"
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(formState.errors.details)}
                />
              )}
            />
            {formState.errors.details && (
              <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.details.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    )
  }
  
  export default OtherDetails;