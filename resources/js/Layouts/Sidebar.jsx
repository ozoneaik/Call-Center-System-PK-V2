import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { LayoutStyle } from "../../css/LayoutStyle.js";
import { usePage, Link } from "@inertiajs/react";
import { SidebarMenu } from '@/Components/SidebarMenu.jsx';
import ColorSchemeToggle from '@/ColorSchemeToggle.jsx';
import { closeSidebar } from '@/utils.js';
import { Button } from '@mui/joy';

export default function Sidebar({ user }) {
    const { url } = usePage();
    return (
        <Sheet className="Sidebar" sx={LayoutStyle.Sidebar.Layout}>
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px',
                        },
                    },
                })}
            />
            <Box sx={LayoutStyle.Sidebar.Overlay} onClick={() => closeSidebar()} />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button variant="soft" color="danger" size="sm">
                    P
                    {/*<img src={Logo || ''} alt="" width={25}/>*/}
                </Button>
                <Typography level="title-lg">Pumpkin Co.</Typography>
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>
            <Box sx={{ ...LayoutStyle.Sidebar.ListItemButton, [`& .${listItemButtonClasses.root}`]: { gap: 1.5, }, }}>
                <List size="sm" sx={LayoutStyle.Sidebar.List}>
                    <SidebarMenu icon={<HomeIcon />} title={'หน้าหลัก'} currentUrl={url} path={'/dashboard'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ห้องแชทบอท'} currentUrl={url} path={'/chat-overview/ROOM01'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ห้องแชทรวม'} currentUrl={url} path={'/chat-overview/ROOM02'} />
                    <SidebarMenu icon={<HomeIcon />} title={'บริการหลังการขาย'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ประสานงานขาย MT'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ประสานงานขาย TT'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ฝ่ายบุคคล'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'Customer Service'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ติดต่อผู้เชี่ยวชาญ'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ร้องเรียนบริการ'} currentUrl={url} path={'/'} />
                    <SidebarMenu icon={<HomeIcon />} title={'ห้อง Marketing Trading'} currentUrl={url} path={'/'} />
                </List>
                <Typography startDecorator={<PersonIcon />} level='body-sm'>
                    รายการของท่าน
                </Typography>
                <Divider />

            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', cursor: 'pointer' }}>
                <Avatar variant="outlined" size="sm" />
                <Box sx={{ minWidth: 0, flex: 1 }} component={Link} href={'/profile'}>
                    <Typography level="title-sm" mb={1}>{user.name}</Typography>
                    <Typography level="body-xs">สิทธิ์&nbsp;{user.role}</Typography>
                </Box>
                <Link href={route('logout')} method="post" as='button'>
                    <LogoutRoundedIcon />
                </Link>
            </Box>
        </Sheet>
    )
}
