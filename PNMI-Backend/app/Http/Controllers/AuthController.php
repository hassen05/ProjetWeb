<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Other methods...

    public function register(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        // Create a new user instance
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        // Save the user to the database
        $user->save();

        // Optionally, you can authenticate the user after registration
        // auth()->login($user);

        // Return a response indicating successful registration
        return response()->json(['message' => 'Registration successful'], 201);
    }
}
