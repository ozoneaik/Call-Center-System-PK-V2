import Sheet from "@mui/joy/Sheet";
import {LayoutStyle} from "../../css/LayoutStyle.js";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toggleSidebar } from "@/utils.js";

export default function Navbar(){
    return (
        <Sheet sx={LayoutStyle.Navbar}>
            <GlobalStyles styles={(theme) => ({
                ':root': {
                    '--Header-height': '52px',
                    [theme.breakpoints.up('lg')]: {
                        '--Header-height': '0px',
                    },
                },
            })}/>
            <IconButton
                onClick={() => toggleSidebar()}
                variant="outlined"
                color="neutral"
                size="sm"
            >
                <MenuRoundedIcon />
            </IconButton>
        </Sheet>
    )
}
