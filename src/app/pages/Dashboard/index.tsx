import * as React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
} from '@mui/material';
import companyLogo from '../../../src/img/company.png'
import { Outlet } from 'react-router';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import { StyledDrawer } from '../../components/styled/StyledDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { StyledNavTypography } from '../../components/styled/NavTypography';


const drawerWidth = 240;
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

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={(theme) => ({ bgcolor: theme.palette.background.paper })}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            src={companyLogo}
            sx={{ height: '40px', width: '40px', mr: '20px', borderRadius: '50%' }}
            component='img'
          />
          <StyledNavTypography sx={(theme) => ({
            color: theme.palette.grey[800],
            fontSize: '15px', fontWeight: 'bold'
          })} >
            Food Sales
          </StyledNavTypography>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={(theme) => ({
          bgcolor: theme.palette.background.paper,
          width: { sm: drawerWidth }, flexShrink: { sm: 0 }
        })}
        aria-label="mailbox folders"
      >
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          drawerWidth={drawerWidth}
        >
          <DrawerHeader />
          <Box p={1} sx={(theme) => ({ height: '100%', bgcolor: theme.palette.grey[50] })}>
            <SideBar />
          </Box>
        </StyledDrawer>

        <StyledDrawer
          aria-label="mailbox folders"
          variant="permanent"
          drawerWidth={drawerWidth}
          open
        >
          <DrawerHeader />
          <Box p={1} sx={(theme) => ({ height: '100%', bgcolor: theme.palette.grey[50] })}>
            <SideBar />
          </Box>
        </StyledDrawer>
      </Box>
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          height: '100vh',
          bgcolor: theme.palette.grey[50]
        })}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};