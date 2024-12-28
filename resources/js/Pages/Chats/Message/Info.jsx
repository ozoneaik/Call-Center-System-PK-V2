import {Box, Sheet} from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
export default function Info() {
    return (
        <Sheet sx={{
            height: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.level1',
            borderLeft: '1px solid',
            borderColor: 'divider',
            position: { xs: 'fixed', sm: 'sticky' },
            transition: 'transform 0.4s, width 0.4s',
            zIndex: 100,
            width: '100%',
            transform: { xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))', sm: 'none', },
        }}>
             <Box sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.body',
                height: '20%',
                backgroundImage: 'url(https://www.pumpkintool.com/wp-content/uploads/2017/11/Company-1.png)',
                objectFit: 'cover',
             }}>
                <Avatar  sx={{width: '80px', height: '80px', mb: 1}}/>
                <Typography level="h4" sx={{mb: 0.5, color: 'white'}}>joker</Typography>
            </Box>
        </Sheet>
    )
}