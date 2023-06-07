import { Drawer, styled } from "@mui/material";

type IDrawerProps = { drawerWidth: number }

export const StyledDrawer = styled(Drawer)<IDrawerProps>(({
    drawerWidth,
    theme,
    variant
}) => ({
    [theme.breakpoints.only("xs")]: {
        display: variant === "permanent" ? "none" : "block"
    },
    [theme.breakpoints.only("sm")]: {
        display: variant === "permanent" ? "block" : "none"
    },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth,
        border: 'none'
    },
}));