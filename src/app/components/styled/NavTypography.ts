import { Typography, styled } from "@mui/material";


export const StyledNavTypography = styled(Typography)(({
    theme,
    variant
}) => ({
    [theme.breakpoints.only("xs")]: {
        display: variant === "h6" ? "none" : "flex"
    },
    [theme.breakpoints.only("sm")]: {
        display: variant === "h5" ? "flex" : "none"
    },
    mr: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
}));