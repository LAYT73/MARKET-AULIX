<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\AuthRequest;

class AuthController extends Controller
{
    public function index(AuthRequest $req){
        
        $user = User::create(['name'=>$req->name,
        'last_name'=>$req->last_name,
        'login'=>$req->login,
        'password'=>$req->pass]);

        return redirect()->back();
    }

    public function user_one(User $id){
        return response()->json($id);
    }

    public function user_all(){
        return response()->json(User::all());
    }
}
