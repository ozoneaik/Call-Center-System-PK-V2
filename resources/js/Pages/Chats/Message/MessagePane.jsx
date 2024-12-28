import { Sheet } from "@mui/joy";
import MessagePaneHeader from "./MessagePaneHeader";
import Info from "./Info";

export default function MessagePane({ auth }) {
    return (
        <Sheet sx={{
            flex: 1,
            width: '100%',
            mx: 'auto',
            pt: { xs: 'var(--Header-height)', md: 0 },
            display: 'grid',
            gridTemplateColumns: {
                xs: '1fr',
                sm: 'minmax(min-content, min(80%, 800px)) 1fr',
                // sm: '1fr',
                lg: 'minmax(min-content, min(70%, 1400px)) 1fr',
            },
        }}>
            <Sheet>
                <Sheet sx={{
                    height: '100dvh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.level1',
                }}>
                    <MessagePaneHeader/>
                </Sheet>
            </Sheet>
            <Info/>
        </Sheet>
    )
}