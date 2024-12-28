import { Avatar, Chip, Divider, Stack, Typography } from "@mui/joy";
import ChatIcon from '@mui/icons-material/Chat';
import CircleIcon from '@mui/icons-material/Circle';
export const CustDetail = ({ avatar, custName, RateId, description,message }) => {
    return (
        <Stack direction="row" gap={1} alignItems='center'>
            <CircleIcon color="success" />
            <Avatar src={avatar || ''} />
            <Stack>
                <Typography fontWeight='bold'>
                    {custName || 'ไม่พบชื่อ'}
                    <Typography color="neutral" fontSize={12} fontWeight='normal'>
                        &nbsp;(รหัสอ้างอิง {RateId || 'NaN'})
                    </Typography>
                </Typography>
                <Chip color='success' variant="outlined">{description || 'not found'}</Chip>
                <Divider sx={{ my: 1 }} />
                <Chip color='primary' variant="solid" startDecorator={<ChatIcon />}>
                    {message || 'not found'}
                </Chip>
            </Stack>
        </Stack>
    )
}