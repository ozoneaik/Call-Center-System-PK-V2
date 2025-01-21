import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BreadcrumbsComponent from "@/Components/Breadcrumbs";
import { useState } from 'react';

export default function Dashboard({ auth }) {
    const [message, setMessage] = useState('');
    return (
        <AuthenticatedLayout user={auth.user}>
            <BreadcrumbsComponent list={[{ name: 'roomName' }, { name: 'รายละเอียด' }]} />
            <Head title="Dashboard" />
            <div>You're logged in! {message}</div>
        </AuthenticatedLayout>
    );
}
