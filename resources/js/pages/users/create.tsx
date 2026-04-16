import { Head, Link, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { index, create, store } from '@/routes/users';
import type { BreadcrumbItem, Role } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

export default function UserCreate({ roles }: { roles: Role[] }) {
    return (
        <>
            <Head title="Create User" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="mx-auto w-2/4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create User</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                {...store.form()}
                                resetOnSuccess={[
                                    'password',
                                    'password_confirmation',
                                ]}
                                disableWhileProcessing
                                className="flex flex-col gap-4"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        <div className="grid gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    autoFocus
                                                    tabIndex={1}
                                                    autoComplete="name"
                                                    placeholder="Name"
                                                />
                                                <InputError
                                                    message={errors.name}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    tabIndex={2}
                                                    autoComplete="email"
                                                    placeholder="Email"
                                                />
                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    tabIndex={3}
                                                    autoComplete="new-password"
                                                    placeholder="Password"
                                                />
                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="password_confirmation">
                                                    Confirm Password
                                                </Label>
                                                <Input
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    type="password"
                                                    tabIndex={4}
                                                    autoComplete="new-password"
                                                    placeholder="Confirm Password"
                                                />
                                                <InputError
                                                    message={
                                                        errors.password_confirmation
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label
                                                    htmlFor="roles"
                                                    className="mb-0"
                                                >
                                                    Roles
                                                </Label>
                                                <div className="flex flex-wrap items-center">
                                                    {roles.map((role) => (
                                                        <div
                                                            key={role.id}
                                                            className="flex items-center"
                                                        >
                                                            <Checkbox
                                                                id={`role-${role.id}`}
                                                                name="roles[]"
                                                                value={
                                                                    role.name
                                                                }
                                                                tabIndex={5}
                                                                className="my-2 border border-white"
                                                            />
                                                            <Label
                                                                htmlFor={`role-${role.id}`}
                                                                className="mx-1"
                                                            >
                                                                {role.name}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Link
                                                    href={index().url}
                                                    className="flex-1 rounded-lg bg-gray-500 px-4 py-1 text-center text-white hover:bg-gray-600"
                                                >
                                                    Cancel
                                                </Link>
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="flex-1 cursor-pointer rounded-lg bg-blue-500 px-4 py-1 text-center text-white hover:bg-blue-600"
                                                >
                                                    {processing ? (
                                                        <Spinner />
                                                    ) : (
                                                        'Create'
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

UserCreate.layout = {
    breadcrumbs: [
        {
            href: index().url,
            title: 'Users',
        },
        {
            href: create().url,
            title: 'Create User',
        },
    ] as BreadcrumbItem[],
};
