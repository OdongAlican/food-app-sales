import React, { useState } from "react";
import {
    Grid,
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Card
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactPerson from "./ContactPerson";
import OtherDetails from "./OtherDetails";
import { IContactDetails, IOtherDetails } from "./interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    contactPersonSchema, detailsSchema
} from "./schema";
import Wrapper from "../../components/wrapper";

const steps = ['Profile Information', 'User Photo & Other Details'];

const CustomerProfile = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    const handleReset = () => { setActiveStep(0); };

    const {
        handleSubmit,
        control,
        formState,
    } = useForm<IContactDetails | IOtherDetails>({
        mode: 'onChange',
        resolver: yupResolver(
            activeStep === 0 ? contactPersonSchema : detailsSchema)
    });

    const onSubmit = (formData: IContactDetails | IOtherDetails) => {
        console.log(formData, 'form data')
        handleNext()
    }
    return (
        <Wrapper>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={12}>
                    <Card sx={{ padding: '20px' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Box sx={{
                                    mt: 2,
                                    mb: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: 4
                                }}>
                                    <CheckCircleOutlineIcon fontSize="large" sx={(theme) => ({
                                        color: theme.palette.success.light,
                                    })} />
                                    <Typography mt={2}>User John Doe Created successfully</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <form autoComplete='false' onSubmit={handleSubmit(onSubmit)}>
                                <Grid container xs={12}>
                                    {activeStep === 0 ? (
                                        <React.Fragment>
                                            <ContactPerson formState={formState} control={control} />
                                        </React.Fragment>
                                    ) :
                                        (<OtherDetails formState={formState} control={control} />)
                                    }
                                </Grid>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button
                                        type="submit">
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Card>
                </Grid>
            </Grid>
        </Wrapper>

    )
}

export default CustomerProfile;