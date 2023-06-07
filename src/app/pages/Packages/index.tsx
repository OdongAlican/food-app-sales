import { Card, Grid, Typography } from "@mui/material"
import Wrapper from "../../components/wrapper";

const Packages = () => {
    return (
        <Wrapper >
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} >
                    <Typography>Packages</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Card>Gold</Card>
                </Grid>
                <Grid item xs={12} >
                    <Card>Gold</Card>
                </Grid>
                <Grid item xs={12} >
                    <Card>Gold</Card>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Packages;