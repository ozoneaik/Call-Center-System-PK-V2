<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'empCode' => ['required', 'string', 'max:255'],
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required']
        ]);
        $email = $request->input('empCode').'@pumpkin.local';

        $user = User::query()->create([
            'empCode' => $request->input('empCode'),
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'email' => $email,
            'role' => $request->input('role'),
            'password' => Hash::make($request->input('password')),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
