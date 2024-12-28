import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BreadcrumbsComponent from "@/Components/Breadcrumbs";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <BreadcrumbsComponent list={[{ name: 'roomName' }, { name: 'รายละเอียด' }]} />
            <Head title="Dashboard" />
            <div>You're logged in!</div>
        </AuthenticatedLayout>
    );
}
