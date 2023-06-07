import { ROUTES } from "../../../core/routes/routes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';

export const sidebarList: Array<{
        text: string,
        icon: JSX.Element,
        path: string
}> = [
    {
        text: 'Packages',
        icon: <InventoryIcon />,
        path: ROUTES.PACKAGES
    },
    {
        text: 'Profile',
        icon: <AccountCircleIcon />,
        path: ROUTES.PROFILE
    }
]