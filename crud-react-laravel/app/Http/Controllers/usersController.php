<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class usersController extends Controller
{
    public function login(Request $request)
    {
        // dd($request->all());
        // return User::select('name','password')->get();
        // dd("one");

        //         $results = User::where("name", $bagente)
        // ->whereMonth("data", $month)
        // -get();
        $compare = DB::table('users')->where('name', $request->name)->where('password', $request->password)->get();
        // return
        // dd($compare);
        // dd($compare);

        if ($compare[0]->name == $request->name && $compare[0]->password == $request->password) {
            return response()->json([
                // 'message'=>'compare susscefully'
                'datax' => $compare,
                'isuser' => true
            ], 200);
        } else {
            return response()->json([
                'message' => 'compare  not susscefully',
                'isuser' => false
            ], 500);
        }
    }


    // public function login(Request $request)
}
