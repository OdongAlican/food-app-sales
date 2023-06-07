import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box
} from '@mui/material';
import { sidebarList } from './SibeBarList';

const SideBar = () => {
    return (
        <Box>
            <List>
                {sidebarList.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton>
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