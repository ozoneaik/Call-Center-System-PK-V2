import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import {Link} from "@inertiajs/react";
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
export const SidebarMenu = ({icon = <ViewSidebarIcon/>,title,currentUrl,path}) => {
    return (
        <ListItem component={Link} href={path}>
            <ListItemButton selected={currentUrl === path}>
                {icon}
                <ListItemContent>
                    <Typography level="title-sm">{title}</Typography>
                </ListItemContent>
            </ListItemButton>
        </ListItem>
    )
}