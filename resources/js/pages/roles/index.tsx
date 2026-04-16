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
import { index, create, edit, destroy } from '@/routes/roles';
import type { BreadcrumbItem, Role } from '@/types';

export default function RoleIndex({ roles }: { roles: Role[] }) {
    return (
        <>
            <Head title="Roles" />
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
                        <TableCaption>A list of your roles.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Guard</TableHead>
                                <TableHead>Permissions</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roles.map((role) => (
                                <TableRow key={role.id}>
                                    <TableCell>{role.id}</TableCell>
                                    <TableCell>{role.name}</TableCell>
                                    <TableCell>{role.guard_name}</TableCell>
                                    <TableCell>
                                        {role.permissions?.map((permission) => (
                                            <span
                                                key={permission.id}
                                                className="mr-2 rounded bg-emerald-700 px-2 py-1 text-xs text-white"
                                            >
                                                {permission.name}
                                            </span>
                                        ))}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link
                                            href={edit(role)}
                                            className="mr-2 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-800"
                                        >
                                            Modify
                                        </Link>
                                        <Link
                                            href={destroy(role)}
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

RoleIndex.layout = {
    breadcrumbs: [
        {
            href: index().url,
            title: 'Roles',
        },
    ] as BreadcrumbItem[],
};
