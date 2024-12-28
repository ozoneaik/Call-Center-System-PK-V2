import { Box, Button, Input, Stack, Typography } from "@mui/joy"
import SendIcon from '@mui/icons-material/Send';

export const BoxTableHeader = ({ totalList = 0 ,user}) => {
    return (
        <Box sx={{
            display: 'flex',
            mb: 1,
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'start', sm: 'center' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }}>
            <Stack direction='row' spacing={2}>
                <Typography level='h2'>
                    รอดำเนินการ&nbsp;
                    <Typography level='body-sm' color="neutral">
                        {totalList} รายการ
                    </Typography>
                </Typography>
                <Input type="search" placeholder="ค้นหาชื่อลูกค้า"/>
                <Button>ค้นหา</Button>
            </Stack>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1,
                alignItems: 'center'
            }}>
                {user.role === 'admin' && (
                        <>
                            <Input type="date" />
                            <Typography>ถึง</Typography>
                            <Input type="date" />
                            <Button>
                                <SendIcon />&nbsp;จบการสนทนาตามช่วงเวลา
                            </Button>
                        </>
                    )}
            </Box>
        </Box>
    )
}