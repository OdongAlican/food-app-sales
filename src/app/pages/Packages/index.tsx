import { Box, Button, Card, Grid, Typography } from "@mui/material"
import Wrapper from "../../components/wrapper";

const Packages = () => {
    return (
        <Wrapper >
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} >
                    <Typography>Packages</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Card sx={{ padding: 3 }}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={4}>
                                <Box>Gold</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>UGX 20,000 Per Year</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>
                                    <Button color="primary" >Purchase</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} >
                    <Card sx={{ padding: 3 }}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={4}>
                                <Box>Silver</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>UGX 10,000 Per Year</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>
                                    <Button color="primary" >Purchase</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} >
                    <Card sx={{ padding: 3 }}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={4}>
                                <Box>Bronze</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>UGX 5,000 Per Year</Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box>
                                    <Button color="primary" >Purchase</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Packages;