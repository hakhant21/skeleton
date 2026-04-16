import { Head, Link, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { index, update } from '@/routes/permissions';
import type { BreadcrumbItem, Permission } from '@/types';

export default function PermissionEdit({
    permission,
}: {
    permission: Permission;
}) {
    return (
        <>
            <Head title={`Edit ${permission.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="mx-auto w-2/4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Edit permission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                {...update.form(permission.id)}
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
                                                    defaultValue={
                                                        permission.name
                                                    }
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
                                                    id="guard_name"
                                                    name="guard_name"
                                                    type="guard_name"
                                                    defaultValue={
                                                        permission.guard_name
                                                    }
                                                    tabIndex={2}
                                                    autoComplete="guard_name"
                                                    placeholder="Guard Name"
                                                />
                                                <InputError
                                                    message={errors.guard_name}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-2">
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
                                                        'Update'
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

PermissionEdit.layout = {
    breadcrumbs: [
        {
            title: 'Permissions',
            href: index().url,
        },
        {
            title: 'Edit Permission',
            href: '#',
        },
    ] as BreadcrumbItem[],
};
