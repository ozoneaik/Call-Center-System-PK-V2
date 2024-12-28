import BreadcrumbsComponent from "@/Components/Breadcrumbs";
import { Box } from "@mui/joy";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from "@inertiajs/react";
import Progress from "./Progress";
import Pending from "./Pending";
import { Head } from '@inertiajs/react';

export default function OverView({auth,roomId,roomName,pending, progress}) {
    const {url} = usePage();

    const ContentOverView = () => {
        return (
            <>
            {roomId}
                <Progress list={progress} user={auth.user}/>
                <Pending list={pending} user={auth.user}/>
            </>
        )
    }


    return (
        <AuthenticatedLayout user={auth.user}>
             <Head title={roomName} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BreadcrumbsComponent list={[{ name: roomName }, { name: 'รายละเอียด' }]} />
            </Box>
            <ContentOverView />
        </AuthenticatedLayout>
    )
}