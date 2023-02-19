<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegistrationRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function registration(RegistrationRequest $req){
        $hash = bcrypt($req->pass);
        $user = User::create(['name'=>$req->name,
            'last_name'=>$req->last_name,
            'login'=>$req->login,
            'password'=>$hash]);

        auth()->login($user);
        $user = auth()->user();        
        return redirect('/success');
    }

    public function auth(AuthRequest $req){
        $user = User::where('login', $req->login)->get();
        if(Hash::check($req->pass, $user[0]->password)) {
            auth()->login($user[0]);
            return redirect('/success');
        } else {
            return redirect()->back();
        }   
    }

    public function logout(){
        Auth::logout();
        return redirect('/');
    }

    public function user_one(User $id){
        return response()->json($id);
    }

    public function user_all(){
        return response()->json(User::all());
    }
}
