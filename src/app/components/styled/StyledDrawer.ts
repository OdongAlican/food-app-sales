import { Drawer, styled } from "@mui/material";

interface IDrawer { drawerWidth: number }

export const StyledDrawer = styled(Drawer)<IDrawer>(({ drawerWidth, theme, variant }) => ({
    [theme.breakpoints.only("xs")]: { 
        display: variant === "permanent" ? "none" : "block" 
    },
    [theme.breakpoints.only("sm")]: { 
        display: variant === "permanent" ? "block" : "none" 
    },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box', 
        width: drawerWidth, 
        border: 'none',
        boxShadow: `1px 2px 9px ${theme.palette.grey[300]}`
    },
}));
