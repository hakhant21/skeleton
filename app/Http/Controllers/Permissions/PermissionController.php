<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Requests\Permissions\CreateRequest;
use App\Http\Requests\Permissions\UpdateRequest;
use App\Http\Resources\Permissions\PermissionResource;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('permissions/index', [
            'permissions' => PermissionResource::collection(Permission::with('roles')->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('permissions/create', [
            'permissions' => PermissionResource::collection(Permission::with('roles')->get()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request)
    {
        Permission::create($request->validated());

        return to_route('permissions.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission $permission)
    {
        return Inertia::render('permissions/edit', [
            'permission' => new PermissionResource($permission->load('roles')),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Permission $permission)
    {
        $permission->update($request->validated());

        return to_route('permissions.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return to_route('permissions.index');
    }
}
