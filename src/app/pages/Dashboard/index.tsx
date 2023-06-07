import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import companyLogo from '../../../src/img/company.png'
import { Outlet } from 'react-router';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    border: 'none'
  }),
);

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={(theme) => ({ bgcolor: theme.palette.background.paper })}>
        <Toolbar>
          <Box
            src={companyLogo}
            sx={{ height: '40px', mr: '20px' }}
            component='img'
          />
          <Typography sx={(theme) => ({
            color: theme.palette.grey[800],
            fontSize: '15px', fontWeight: 'bold'
          })} component="div">
            Food Sales
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          '& .MuiDrawer-paper': { boxShadow: 1 },
        }}
      >
        <DrawerHeader />
        <Box p={1} sx={(theme) => ({ height: '100%', bgcolor: theme.palette.grey[50] })}>
          <SideBar />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={(theme) => ({ flexGrow: 1, height: '100vh', bgcolor: theme.palette.grey[50] })}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};