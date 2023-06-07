import { ROUTES } from "../../../core/routes/routes";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const sidebarList: Array<{
        text: string,
        icon: JSX.Element,
        path: string
}> = [
    {
        text: 'Packages',
        icon: <MonetizationOnOutlinedIcon />,
        path: ROUTES.PACKAGES
    },
    {
        text: 'Profile',
        icon: <AccountCircleOutlinedIcon />,
        path: ROUTES.PROFILE
    }
]