import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box
} from '@mui/material';
import { sidebarList } from './SibeBarList';
import { useLocation, useNavigate } from 'react-router';
import { lightBlue } from '@mui/material/colors';

const SideBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <Box>
            <List>
                {sidebarList.map((item) => (
                    <ListItem
                        sx={{
                            bgcolor: `${pathname.includes(item.path) ? lightBlue[50] : ''
                                }`
                        }}
                        key={item.path} disablePadding>
                        <ListItemButton onClick={() => navigate(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SideBar;