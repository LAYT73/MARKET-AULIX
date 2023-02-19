<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegistrationRequest;

class AuthController extends Controller
{
    public function registrtion(RegistrationRequest $req){
        $hash = bcrypt($req->pass);
        $user = User::create(['name'=>$req->name,
        'last_name'=>$req->last_name,
        'login'=>$req->login,
        'password'=>$hash]);
        return redirect()->back();
    }

    public function auth(AuthRequest $req){
        
        return redirect()->back();
    }

    public function user_one(User $id){
        return response()->json($id);
    }

    public function user_all(){
        return response()->json(User::all());
    }
}
