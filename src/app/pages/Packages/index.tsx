import { Box, Button, Card, Grid, Typography } from "@mui/material"
import Wrapper from "../../components/wrapper";
import { useState } from "react";
import { modalState } from "../../../utills/constants";
import ModalComponent from "../../components/modal";
import MobilePayment from "../../components/mobilePayment";

interface IPayment { name: string, customerStatus: boolean, price: string, period: string }

const Packages = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>('');
    const [currentPackage, setCurrentPackage] = useState<IPayment>({
        name: '', customerStatus: false, price: '', period: ''
    })

    const handleClose = () => setOpen(false);

    const packageList: Array<IPayment> = [
        {
            name: 'Gold',
            customerStatus: false,
            price: '20,000',
            period: 'yearly'
        },
        {
            name: 'Silver',
            customerStatus: true,
            price: '10,000',
            period: 'monthly'
        },
        {
            name: 'Bronze',
            customerStatus: false,
            price: '5,000',
            period: 'weekly'
        }
    ];

    const onPurchase = (item: IPayment) => {
        setAction(modalState.purchase);
        setOpen(true);
        setCurrentPackage(item);
    }

    return (
        <Wrapper >
            {
                action === modalState.purchase ? (
                    <ModalComponent open={open} handleClose={handleClose} >
                        {currentPackage.customerStatus ? <MobilePayment /> : (
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                Pending Admin's Approval
                            </Grid>
                        )}
                    </ModalComponent>
                ) : null
            }
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} >
                    <Typography>Packages</Typography>
                </Grid>
                {
                    packageList.map((item) => (
                        <Grid item xs={12} >
                            <Card sx={{ padding: 3 }}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={4}>
                                        <Box>{item.name}</Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>UGX {item.price} {item.period}</Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <Button
                                                onClick={() => onPurchase(item)}
                                                variant="contained" >Make Payment</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Wrapper>
    )
}

export default Packages;