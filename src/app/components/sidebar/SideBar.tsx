import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from '@mui/material';
import { sidebarList } from './SibeBarList';

const SideBar = () => {
    return (
        <div>
            <Toolbar />
            <Divider />
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
        </div>
    );
}

export default SideBar;