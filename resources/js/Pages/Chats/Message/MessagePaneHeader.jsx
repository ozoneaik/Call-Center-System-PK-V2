import { Avatar, Button, Chip, Stack, Typography } from "@mui/joy";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import PauseIcon from '@mui/icons-material/Pause';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function MessagePaneHeader() {
    return (
        <Stack direction='row' sx={{
            justifyContent: 'space-between',
            py: { xs: 2, md: 2 },
            px: { xs: 1, md: 2 },
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.body',
        }}>
            <Stack direction='row' spacing={2} alignItems='center'>
                <Button variant="outlined" size='sm' onClick={()=>window.history.back()}>
                    <ArrowBackIosIcon />
                </Button>
                <Avatar color="primary" variant="solid" />
                <Stack>
                    <Typography component='h2' noWrap fontWeight='lg' fontSize='lg'>
                        รายละเอียดการสนทนา
                    </Typography>
                    <Chip variant="outlined" color="success">joker</Chip>
                </Stack>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
                <Button variant="solid" size='sm' color="primary">
                    <ForwardToInboxIcon />ส่งต่อไปยัง
                </Button>
                <Button variant="solid" size='sm' color="warning">
                    <ShortcutIcon />ตัวช่วยตอบ
                </Button>
                <Button variant="solid" size='sm' color="neutral">
                    <PauseIcon />พักการสนทนาชั่วคราว
                </Button>
                <Button variant="solid" size='sm' color="success">
                    <CheckCircleIcon />จบการสนทนา
                </Button>
            </Stack>
        </Stack>
    )
}