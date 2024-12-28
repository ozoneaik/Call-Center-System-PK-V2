import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        empCode: '',
        name: '',
        description: '',
        password: '',
        role: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data)

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="empCode" value="รหัสพนักงาน"/>
                    <TextInput
                        id="empCode"
                        name="empCode"
                        value={data.empCode}
                        className="mt-1 block w-full"
                        autoComplete="empCode"
                        isFocused={true}
                        onChange={(e) => setData('empCode', e.target.value)}
                        required
                    />

                    <InputError message={errors.empCode} className="mt-2"/>
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="ชื่อ"/>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="แผนก"/>
                    <TextInput
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="role" value="สิทธิ์"/>
                    <TextInput
                        id="role"
                        name="role"
                        value={data.role}
                        className="mt-1 block w-full"
                        autoComplete="role"
                        isFocused={true}
                        onChange={(e) => setData('role', e.target.value)}
                        required
                    />

                    <InputError message={errors.role} className="mt-2"/>
                </div>


                <div className="mt-4">
                    <InputLabel htmlFor="password" value="รหัสผ่าน"/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="ยืนยันรหัสผ่าน"/>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2"/>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        เคยสมัครแล้ว?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        สมัคร
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
