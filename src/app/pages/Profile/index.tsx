import { Card, Grid, Typography } from "@mui/material"

const Packages = () => {
    return (
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
    )
}

export default Packages;