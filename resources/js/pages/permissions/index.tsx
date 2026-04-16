import { Head, Link } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { index, create, edit, destroy } from '@/routes/permissions';
import type * as types from '@/types';

export default function PermissionIndex({
    permissions,
}: {
    permissions: types.Permission[];
}) {
    return (
        <>
            <Head title="Permissions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-end">
                    <Link
                        href={create().url}
                        className="mx-4 mt-2 rounded bg-green-600 px-4 py-1 text-white hover:bg-green-800"
                    >
                        Create
                    </Link>
                </div>
                <div>
                    <Table>
                        <TableCaption>A list of your permissions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Guard</TableHead>
                                <TableHead>Roles</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {permissions.map((permission) => (
                                <TableRow key={permission.id}>
                                    <TableCell>{permission.id}</TableCell>
                                    <TableCell>{permission.name}</TableCell>
                                    <TableCell>
                                        {permission.guard_name}
                                    </TableCell>
                                    <TableCell>
                                        {permission.roles?.map((role) => (
                                            <span
                                                key={role.id}
                                                className="mr-2 rounded bg-emerald-700 px-2 py-1 text-xs text-white"
                                            >
                                                {role.name}
                                            </span>
                                        ))}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link
                                            href={edit(permission)}
                                            className="mr-2 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-800"
                                        >
                                            Modify
                                        </Link>
                                        <Link
                                            href={destroy(permission)}
                                            className="rounded bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-800"
                                        >
                                            Delete
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}

PermissionIndex.layout = {
    breadcrumbs: [
        {
            href: index().url,
            title: 'Permissions',
        },
    ] as types.BreadcrumbItem[],
};
