import BreadcrumbsComponent from "@/Components/Breadcrumbs";
import { Box } from "@mui/joy";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from "@inertiajs/react";
import Progress from "./Progress";
import Pending from "./Pending";

export default function OverView({auth,roomId,roomName,pending, progress}) {
    const {url} = usePage();

    const ContentOverView = () => {
        return (
            <>
            {roomId}
                <Pending list={pending} user={auth.user}/>
                <Progress list={progress} user={auth.user}/>
            </>
        )
    }


    return (
        <AuthenticatedLayout user={auth.user}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BreadcrumbsComponent list={[{ name: roomName }, { name: 'รายละเอียด' }]} />
            </Box>
            <ContentOverView />
        </AuthenticatedLayout>
    )
}