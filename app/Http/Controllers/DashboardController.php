<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $users = User::selectRaw("
            id,
            name,
            email,
            created_at,
            case when active = true then 'Sim'
                else 'Não'
            end as active,
            image
        ")
            ->get();

        return Inertia::render('Dashboard', compact('users'));
    }
}
