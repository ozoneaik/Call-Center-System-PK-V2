import { Badge, Button } from "@mui/joy";
export default function FloatButton () {
    return(
        <Button
            variant="solid" color="primary"
            sx={{
                position: 'fixed', bottom: 16, right: 16, borderRadius: '50%',
                padding: 0, width: 56, height: 56, minWidth: 'unset', zIndex: 1
            }}
        >
            <Badge
                badgeContent={4}
                color="danger"
                sx={{
                    "& .MuiBadge-badge": {
                        right: -10,
                        top: -10,
                        border: `2px solid white`,
                        padding: '1'
                    }
                }}
            >
                j
            </Badge>
        </Button>
    )
}